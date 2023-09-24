function setupListFilter(listContainer, type) {
  const filterSelect = document.getElementById("filter-select");
  const filterField = document.querySelector(".filter__field__input");
  const filterSort = document.querySelector(".filter__sort__icon");
  const listItems = Array.from(
    listContainer.querySelectorAll(`${type === "table" ? "tbody tr:not(.separator)" : "li.list-item"}`)
  );
  let filterOption = filterSelect.value;

  function updateListDisplay() {
    listItems.forEach((item) => {
      const itemValue = item.querySelector(`[data-filter="${filterOption}"]`).textContent.toLowerCase();
      const shouldDisplay = itemValue.includes(filterField.value.toLowerCase());
      shouldDisplay
        ? item.classList.remove("hidden") && item.classList.add("visible")
        : item.classList.add("hidden") && item.classList.remove("visible");
    });
    listContainer.dataset.search = Math.floor(Math.random() * 1000000000);
  }

  function sortListItems() {
    listItems.sort((a, b) => {
      const aValue = a.querySelector(`[data-filter="${filterOption}"]`).textContent;
      const bValue = b.querySelector(`[data-filter="${filterOption}"]`).textContent;
      return aValue.localeCompare(bValue);
    });

    listItems.forEach((item) => {
      type === "table" ? listContainer.querySelector("tbody").appendChild(item) : listContainer.appendChild(item);
    });
  }

  filterSelect.addEventListener("change", (e) => {
    filterOption = e.target.value;
    sortListItems();
    filterField.value = "";
    updateListDisplay();
    listContainer.dataset.search = Math.floor(Math.random() * 1000000000);
  });

  filterField.addEventListener("keyup", updateListDisplay);

  filterSort.addEventListener("click", () => {
    filterSort.classList.toggle("asc");
    listItems.reverse();
    listItems.forEach((item) => {
      type === "table" ? listContainer.querySelector("tbody").appendChild(item) : listContainer.appendChild(item);
    });
    listContainer.dataset.search = Math.floor(Math.random() * 1000000000);
  });

  sortListItems();
  updateListDisplay();
}
