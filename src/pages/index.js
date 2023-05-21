import './index.css';
import {
profileOpenButton,
profileAddButton,
avatarBtn,
selectorTemplate,
popupEditProfileSelector,
popupImageSelector,
popupAddPictureSelector,
listsSelector,
popupRefreshAvatarSelecor,
popupConfirmSelector,
config,
namePopupEditProfile,
namePopupAddPicture,
avatar,
validationConfig,
initialCards
} from "../utils/constants";
import Card from "../components/Card";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirm from '../components/PopupConfirm';

const popupConfirm = new PopupConfirm(popupConfirmSelector, (card) => {
  card.deleteCard();
  popupConfirm.close();
})
popupConfirm.setEventListeners();
const userInfo = new UserInfo(config);

const popupWithImage = new PopupWithImage(popupImageSelector);
popupWithImage.setEventListeners();
function createNewCards (item) {
  const card = new Card(item, selectorTemplate, popupWithImage.open, popupConfirm.open);
  return card.createCard();
}
const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      section.addItem(createNewCards(item))
    },
  },
  listsSelector
);
section.renderItems();
// Попап для редактирования профиля
const popupWithForm = new PopupWithForm(popupEditProfileSelector, () => {
 userInfo.setUserInfo(popupWithForm._getInputsValues());
  popupWithForm.close();
});
popupWithForm.setEventListeners();
// Попап для добавления фото
const popupForAddPicture = new PopupWithForm(popupAddPictureSelector, (item) => {
  section.addItem(createNewCards(item))
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
// Экземпляр попапа для смены аватара
const popupRefreshAvatar = new PopupWithForm(popupRefreshAvatarSelecor, (data) => {
  document.querySelector(".profile__avatar").src = data.avatar;
  popupRefreshAvatar.close();
})
const formValidatorAvatar = new FormValidator(validationConfig, avatar);
formValidatorAvatar.enableValidation();
avatarBtn.addEventListener("click", function () {
  formValidatorAvatar.resetValidation();
  popupRefreshAvatar.open();
})
popupRefreshAvatar.setEventListeners();
// console.log(popupRefreshAvatar)
