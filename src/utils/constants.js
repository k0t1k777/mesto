// Переменные страницы
const profileOpenButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const avatarBtn = document.querySelector(".profile__avatar-btn");
// Переменные темплейта
const selectorTemplate = "#template";
const popupEditProfileSelector = ".popupEditProfile";
const popupImageSelector = ".popupForImage";
const popupAddPictureSelector = ".popupAddPicture";
const listsSelector = ".elements";
const popupRefreshAvatarSelecor = ".popupRefreshAvatar";
const popupConfirmSelector = ".popupConfirm";
// Переменные Section
const config = {
  nameInputSelector: ".section-title",
  jobInputSelector: ".section-subtitle",
  avatarSelector: ".profile__avatar",
};
// Переменные валидации форм
const namePopupEditProfile = document.popapForm_editProfile;
const namePopupAddPicture = document.popapForm_addPicture;
const avatar = document.popapForm_RefreshAvatar;
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
export {
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
};
