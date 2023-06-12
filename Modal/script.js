"use strict";
// querySelectorAll returns a NodeList, which is similar to an array, but does not have all the methods that an array has. It is iterable, however.

// classes allows us to aggregate multiple classes into one class, which can be used to style multiple elements at once.

//classList allows us to aggregate multiple css properties in just one, like a container with a lot of properties inside.

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".show-modal");

const OpenModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener("click", OpenModal);

  btnCloseModal.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    if (!modal.classList.contains("hidden")) {
      closeModal();
    }
  }
});
