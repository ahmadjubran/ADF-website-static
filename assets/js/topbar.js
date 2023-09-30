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

const delegateModelStep1 = document.querySelector(".topbar__delegate__model.step1");
const delegateModelStep2 = document.querySelector(".topbar__delegate__model.step2");
const delegateButton = document.querySelector(".topbar__user__menu__item__link__button");
const delegateCancelButtons = document.querySelectorAll(".topbar__delegate__model__actions__button--cancel");
const delegateNextButtons = document.querySelectorAll(".topbar__delegate__model__actions__button--next");
const delegateCloseButtons = document.querySelectorAll(".topbar__delegate__model__header__close");

delegateButton.addEventListener("click", () => {
  delegateModelStep1.classList.remove("hidden");
});

delegateCancelButtons.forEach((button) => {
  button.addEventListener("click", () => {
    delegateModelStep1.classList.add("hidden");
    delegateModelStep2.classList.add("hidden");
  });
});

delegateNextButtons[0].addEventListener("click", () => {
  delegateModelStep1.classList.add("hidden");
  delegateModelStep2.classList.remove("hidden");
});

delegateNextButtons[1].addEventListener("click", () => {
  delegateModelStep1.classList.add("hidden");
  delegateModelStep2.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (!e.target.closest(".topbar__delegate__model") && !e.target.closest(".topbar__user__menu__item__link__button")) {
    delegateModelStep1.classList.add("hidden");
    delegateModelStep2.classList.add("hidden");
  }
});

delegateCloseButtons.forEach((button) => {
  button.addEventListener("click", () => {
    delegateModelStep1.classList.add("hidden");
    delegateModelStep2.classList.add("hidden");
  });
});
