// Переменные страницы
const profileOpenButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
// Переменные темплейта
const selectorTemplate = "#template";
const popupEditProfileSelector = ".popupEditProfile";
const popupImageSelector = ".popupForImage";
const popupAddPictureSelector = ".popupAddPicture";
const listsSelector = ".elements";
// Переменные Section
const config = {
  nameInputSelector: ".section-title",
  jobInputSelector: ".section-subtitle",
};
// Переменные валидации форм
const namePopupEditProfile = document.popapForm_editProfile;
const namePopupAddPicture = document.popapForm_addPicture;
// Объект с переменными
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_invalid",
  activeButtonClass: "popup__submit-button_valid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
// Массив с картинками
const initialCards = [
  {
    title: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    title: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    title: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    title: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    title: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    title: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
export {
  profileOpenButton,
  profileAddButton,
  selectorTemplate,
  popupEditProfileSelector,
  popupImageSelector,
  popupAddPictureSelector,
  listsSelector,
  config,
  namePopupEditProfile,
  namePopupAddPicture,
  validationConfig,
  initialCards,
}

