import initialCards from "./scripts/utils/constants.js";
import Card from "./scripts/components/Card.js";
import FormValidator from "./scripts/components/FormValidator.js";
import PopupWithImage from "./scripts/components/PopupWithImage.js";
import Section from "./scripts/components/Section.js";
import UserInfo from "./scripts/components/UserInfo.js";
import PopupWithForm from "./scripts/components/PopupWithForm.js";
const log = console.log;
// Переменные страницы
const popupElements = document.querySelectorAll(".popup");
const profileOpenButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const valueNameInput = document.querySelector(".section-title");
const valueJobInput = document.querySelector(".section-subtitle");
// Переменные форм
const popupEditProfile = document.querySelector(".popupEditProfile");
const closeButtons = document.querySelectorAll(".popup__close");
const profileForm = popupEditProfile.querySelector(".popup__form");
// const nameInput = profileForm.querySelector(".popup__input_type_name");
// const jobInput = profileForm.querySelector(".popup__input_type_job");
// Переменные с увеличения картинок
const popupForImage = document.querySelector(".popupForImage");
const zoomPicture = popupForImage.querySelector(".popupForImage__image");
const figcaptionPicture = popupForImage.querySelector(
  ".popupForImage__figcaption"
);
// Переменные добавления картинки
const popupAddPicture = document.querySelector(".popupAddPicture");
const pictureForm = popupAddPicture.querySelector(".popup__form");
const titleInput = popupAddPicture.querySelector(".popup__input_type_title");
const linkInput = popupAddPicture.querySelector(".popup__input_type_link");
// Переменные темплейта
const cardsContainer = document.querySelector(".elements");
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
  section.addItem(section.renderer(popupForAddPicture.getInputsValues()));
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
  // namePopupEditProfile.reset();
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
