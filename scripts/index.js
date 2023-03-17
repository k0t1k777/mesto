const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const formElement = document.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__name_type_name");
const jobInput = formElement.querySelector(".popup__job_type_job");
const valueNameInput = document.querySelector(".section-title");
const valueJobInput = document.querySelector(".section-subtitle");
const popupOpenAddPictureButtonElement = document.querySelector(".profile__add-button");
const popupElementAddPicture = document.querySelector(".popup__addPicture");
const popupCloseButtonAddPicture = document.querySelector(".popup__close_addPicture");
const heartBlack = document.querySelector(".elements__button");

const paintBlackHeart = function () {
  heartBlack.classList.toggle("elements__button_active");
}
heartBlack.addEventListener("click", paintBlackHeart);

const openPopup = function () {
  nameInput.value = valueNameInput.textContent;
  jobInput.value = valueJobInput.textContent;
  popupElement.classList.add("popup_opened");
};
const closePopup = function () {
  popupElement.classList.remove("popup_opened");
};
const closePopupByClickOnOverlay = function (event) {
  console.log(event.target, event.currentTarget);
  if (event.target !== event.currentTarget) {
    return;
  }
};
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener("click", closePopupByClickOnOverlay);
function handleFormSubmit(evt) {
  evt.preventDefault();
  valueNameInput.textContent = nameInput.value;
  valueJobInput.textContent = jobInput.value;
  closePopup();
}
formElement.addEventListener("submit", handleFormSubmit);
// addPicture

const addPicture = function () {
  popupElementAddPicture.classList.add("popup__addPicture_opened");
};
const closeAddPicture = function () {
  popupElementAddPicture.classList.remove("popup__addPicture_opened");
};
popupOpenAddPictureButtonElement.addEventListener("click", addPicture);
popupCloseButtonAddPicture.addEventListener("click", closeAddPicture);
