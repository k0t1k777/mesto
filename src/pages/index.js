import './index.css';
import initialCards from "../constants";
import Card from "../components/Card";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
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
const userInfo = new UserInfo(config);
const popupWithImage = new PopupWithImage(popupImageSelector);
popupWithImage.setEventListeners();
const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, selectorTemplate, popupWithImage.open);
      return card.createCard();
    },
  },
  listsSelector
);
section.addOnPage();
// Попап для редактирования профиля
const popupWithForm = new PopupWithForm(popupEditProfileSelector, (evt) => {
  evt.preventDefault();
  userInfo.setUserInfo(popupWithForm.getInputsValues());
  popupWithForm.close();
});
popupWithForm.setEventListeners();
// Попап для добавления фото
const popupForAddPicture = new PopupWithForm(popupAddPictureSelector, (evt) => {
  evt.preventDefault();
  section.addItem(popupForAddPicture.getInputsValues());
  popupForAddPicture.close();
});
popupForAddPicture.setEventListeners();
// Открытие попапа для добавления фото
profileAddButton.addEventListener("click", function () {
  namePopupAddPicture.reset();
  formPopupAddPicture.resetError();
  popupForAddPicture.open();
});
// Открытие попапа для профиля
profileOpenButton.addEventListener("click", function () {
  formValidator.resetError();
  popupWithForm.setInputsValues(userInfo.getUserInfo());
  popupWithForm.open();
});
// Экземпляр Попапа редактирования профиля
const formValidator = new FormValidator(validationConfig, namePopupEditProfile);
formValidator.enableValidation();
// Экземпляр Попапа для добавления картинки
const formPopupAddPicture = new FormValidator(
  validationConfig,
  namePopupAddPicture
);
formPopupAddPicture.enableValidation();
