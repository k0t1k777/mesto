import "./index.css";
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
} from "../utils/constants";
import Card from "../components/Card";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupConfirm from "../components/PopupConfirm.js";
import Api from "../components/Api.js";
import { data } from "autoprefixer";

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-66",
  headers: {
    authorization: "0c09e347-c633-4144-8e9c-eddcb83078fd",
    "Content-Type": "application/json",
  },
});
let userId;

const popupConfirm = new PopupConfirm(
  popupConfirmSelector,
  ({ card, cardID }) => {
    api
      .removeCard(cardID)
      .then((res) => {
        console.log(res);
        card.deleteCard();
        popupConfirm.close();
      })
      .catch((error) => console.error(`Ошибка удаления карты${error}`))
      .finally(() => popupConfirm.textLoading());
  }
);
popupConfirm.setEventListeners();
const userInfo = new UserInfo(config);
// Экземпляр папапа с картинкой
const popupWithImage = new PopupWithImage(popupImageSelector);
popupWithImage.setEventListeners();
function createNewCards(item) {
  const card = new Card(
    item,
    selectorTemplate,
    popupWithImage.open,
    popupConfirm.open,
    (likePic, cardID) => {
      if (likePic.classList.contains("elements__button_active")) {
        api
          .removeLikes(cardID)
          .then((res) => {
            card.isLike(res.likes);
          })
          .catch((error) => console.error(`Ошибка при удалнии лайка${error}`));
      } else {
        api
          .addLikes(cardID)
          .then((res) => {
            card.isLike(res.likes);
          })
          .catch((error) => console.error(`Ошибка добавления лайка${error}`));
      }
    }
  );
  return card.createCard();
}
// Экземпляр класса Секция для отрисовки картинок на странице
const section = new Section((item) => {
  section.addItemLast(createNewCards(item));
}, listsSelector);
// Попап для редактирования профиля
const popupWithForm = new PopupWithForm(popupEditProfileSelector, (data) => {
  api
    .changeProfile(data)
    .then((res) => {
      userInfo.setUserInfo({
        avatar: res.avatar,
        userName: res.name,
        userJob: res.about,
      });
      popupWithForm.close();
    })
    .catch((error) => console.error(`Ошибка редактирования профиля${error}`))
    .finally(() => popupWithForm.textLoading());
});
popupWithForm.setEventListeners();
// Попап для добавления фото
const popupForAddPicture = new PopupWithForm(
  popupAddPictureSelector,
  (item) => {
    api
      .addNewCard(item)
      .then((infoCard) => {
        infoCard.selfId = userId;
        section.addItemFirst(createNewCards(infoCard));
      })
      .catch((error) => console.error(`Ошибка добавления картинки${error}`))
      .finally(() => popupForAddPicture.textLoading());
    popupForAddPicture.close();
  }
);
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
const popupRefreshAvatar = new PopupWithForm(
  popupRefreshAvatarSelecor,
  (pic) => {
    api
      .changeAvatar(pic)
      .then((res) => {
        userInfo.setUserInfo({
          avatar: res.avatar,
          userName: res.name,
          userJob: res.about,
        });
        popupRefreshAvatar.close();
      })
      .catch((error) => console.error(`Ошибка аватара${error}`))
      .finally(() => popupRefreshAvatar.textLoading());
  }
);
const formValidatorAvatar = new FormValidator(validationConfig, avatar);
formValidatorAvatar.enableValidation();
avatarBtn.addEventListener("click", function () {
  formValidatorAvatar.resetValidation();
  popupRefreshAvatar.open();
});
popupRefreshAvatar.setEventListeners();

Promise.all([api.getInfoUser(), api.getInitialCards()])
  .then(([infoUser, infoCard]) => {
    userId = infoUser._id;
    infoCard.forEach(card => card.selfId = userId);
    userInfo.setUserInfo({
      avatar: infoUser.avatar,
      userName: infoUser.name,
      userJob: infoUser.about,
    });
    section.renderItems(infoCard);
  })
  .catch((error) => console.error(`Ошибка ${error}`));
