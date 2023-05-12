import './index.css';
import {
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
initialCards
} from "../utils/constants";
import Card from "../components/Card";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";

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
section.renderItems();
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
  formPopupAddPicture.resetValidation();
  popupForAddPicture.open();
});
// Открытие попапа для профиля
profileOpenButton.addEventListener("click", function () {
  formValidator.resetValidation();
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
