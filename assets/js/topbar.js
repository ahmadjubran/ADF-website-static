const notificationIcon = document.querySelector(".topbar__notifications__icon");
const notificationModal = document.querySelector(".topbar__notifications__modal");
const removeNotificationButtons = document.querySelectorAll(".topbar__notifications__item__top__remove");
const path = window.location.pathname.split("/").filter((item) => item !== "");

removeNotificationButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".topbar__notifications__item").remove();
    if (document.querySelectorAll(".topbar__notifications__item").length === 0) {
      notificationModal.classList.add("hidden");
      notificationModal.innerHTML = `
      <div class="topbar__notifications__empty">
        <p class="topbar__notifications__empty__message">${
          path[0] === "en" ? "No notifications" : "لا يوجد إشعارات"
        }</p>
      </div>`;
    }
  });
});

notificationIcon.addEventListener("click", () => {
  notificationModal.classList.toggle("hidden");
  notificationIcon.classList.remove("not-read");
});

window.addEventListener("click", (e) => {
  if (
    !e.target.closest(".topbar__notifications__modal") &&
    !e.target.closest(".topbar__notifications__icon") &&
    !e.target.closest(".topbar__notifications__item__top__remove")
  ) {
    notificationModal.classList.add("hidden");
  }
});

const menuArrow = document.querySelector(".topbar__user__arrow");
const userMenu = document.querySelector(".topbar__user__menu");

menuArrow.addEventListener("click", () => {
  userMenu.classList.toggle("hidden");
});

window.addEventListener("click", (e) => {
  if (!e.target.closest(".topbar__user__menu") && !e.target.closest(".topbar__user__arrow")) {
    userMenu.classList.add("hidden");
  }
});
