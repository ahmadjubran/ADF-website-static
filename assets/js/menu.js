const menuButtons = document.querySelectorAll(".menu-button:not(.menu-button--disabled)");
const menuDropdowns = document.querySelectorAll(".menu-dropdown");

menuButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    menuDropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
    menuDropdowns[index].classList.add("active");
  });
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".menu-dropdown") && !event.target.closest(".menu-button")) {
    menuDropdowns.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  }
});
