function initializePagination({ listId = "main-table", type = "table", lang = "ar", itemsPerRow } = {}) {
  const listContainer = document.getElementById(listId);
  const listItems = Array.from(
    listContainer.querySelectorAll(type === "table" ? "tbody tr:not(.separator)" : "li.list-item")
  ).filter((item) => !item.classList.contains("hidden"));
  const itemsPerPage = type === "table" ? 6 : itemsPerRow * 4;

  let currentPage = 1;

  function updatePagination() {
    const totalPages = Math.ceil(listItems.length / itemsPerPage);
    const paginationContainer = document.querySelector(".pagination__pages ul");
    const prevPageButton = document.getElementById("prev-page");
    const nextPageButton = document.getElementById("next-page");
    const paginationEntries = document.querySelector(".pagination__entries span");

    const showingText = lang === "en" ? "Showing" : "إظهار";
    const toText = lang === "en" ? "to" : "الى";
    const ofText = lang === "en" ? "of" : "من اصل";
    const entriesText = lang === "en" ? "Entries" : "مدخل";

    const start = (currentPage - 1) * itemsPerPage;
    const end = Math.min(currentPage * itemsPerPage, listItems.length);

    paginationEntries.innerHTML = `${showingText} ${start + 1} ${toText} ${end} ${ofText} ${
      listItems.length
    } ${entriesText}`;

    prevPageButton.disabled = currentPage === 1;
    nextPageButton.disabled = currentPage === totalPages;

    listItems.forEach((item, index) => {
      item.style.display = index >= start && index < end ? "" : "none";
    });

    paginationContainer.innerHTML = buildPaginationHTML(currentPage, totalPages);
  }

  function buildPaginationHTML(currentPage, totalPages) {
    let paginationHTML = `<li class="active"><button>${currentPage}</button></li>`;

    if (currentPage > 1) {
      paginationHTML = `<li><button>${currentPage - 1}</button></li>${paginationHTML}`;
    }

    if (currentPage < totalPages) {
      paginationHTML += `<li><button>${currentPage + 1}</button></li>`;
    }

    if (currentPage > 3) {
      paginationHTML = `<img src="/assets/icons/three-dots.svg" alt="${
        lang === "en" ? "More Pages" : "المزيد من الصفحات"
      }" />${paginationHTML}`;
    }

    if (currentPage < totalPages - 2) {
      paginationHTML += `<img src="/assets/icons/three-dots.svg" alt="${
        lang === "en" ? "More Pages" : "المزيد من الصفحات"
      }" />`;
    }

    if (currentPage > 2) {
      paginationHTML = `<li><button>1</button></li>${paginationHTML}`;
    }

    if (currentPage < totalPages - 1) {
      paginationHTML += `<li><button>${totalPages}</button></li>`;
    }
    return paginationHTML;
  }

  document.getElementById("prev-page").addEventListener("click", () => {
    currentPage--;
    updatePagination();
  });

  document.getElementById("next-page").addEventListener("click", () => {
    currentPage++;
    updatePagination();
  });

  const paginationContainer = document.querySelector(".pagination__pages ul");
  paginationContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      currentPage = parseInt(e.target.textContent);
      updatePagination();
    }
  });

  updatePagination();
}
