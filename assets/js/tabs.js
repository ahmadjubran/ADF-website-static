const filterTabs = document.querySelectorAll(".filter__tabs__tab");
filterTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    filterTabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
  });
});
