import initialCards from "./constants.js";
import Card from "./card.js";

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
const nameInput = profileForm.querySelector(".popup__input_type_name");
const jobInput = profileForm.querySelector(".popup__input_type_job");
// Переменные с увеличения картинок
const popapForImage = document.querySelector(".popupForImage");
const zoomPicture = popapForImage.querySelector(".popupForImage__image");
const figcaptionPicture = popapForImage.querySelector(
  ".popupForImage__figcaption"
);
// Переменные добавления картинки
const popupAddPicture = document.querySelector(".popupAddPicture");
const pictureForm = popupAddPicture.querySelector(".popup__form");
const titleInput = popupAddPicture.querySelector(".popup__input_type_title");
const linkInput = popupAddPicture.querySelector(".popup__input_type_link");
const buttonSubmit = pictureForm.querySelector(".popup__submit-button");
// Переменные темплейта
const cardsContainer = document.querySelector(".elements");
const selectorTemplate = "#template";
const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_invalid",
  activeButtonClass: "popup__submit-button_valid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
// Открытие/закрытие попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupOnEsc);
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupOnEsc);
}
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});
// Функция закрытия попапа по Escape
function closePopupOnEsc(evt) {
  if (evt.key === "Escape") {
    const popup = document.querySelector(".popup_opened");
    closePopup(popup);
  }
}
// Функция закрытия попапа по оверлею
const closePopupOnOverlay = function (event) {
  if (event.target === event.currentTarget) {
    closePopup(event.target);
  }
};
popupElements.forEach((item) => {
  item.addEventListener("mousedown", closePopupOnOverlay);
});
// Открытие попапа для профиля
profileOpenButton.addEventListener("click", function () {
  nameInput.value = valueNameInput.textContent;
  jobInput.value = valueJobInput.textContent;
  openPopup(popupEditProfile);
});
// Открытие попапа для добавления фото
profileAddButton.addEventListener("click", function () {
  openPopup(popupAddPicture);
});
// Открытие попапа увеличенных фото
function openImagePopup(cardData) {
  zoomPicture.src = cardData.link;
  figcaptionPicture.alt = cardData.name;
  figcaptionPicture.textContent = cardData.name;
  openPopup(popapForImage);
}
// Экземппляр класса карты
function addNewCard(item) {
  const card = new Card(item, selectorTemplate, openImagePopup);
  const cardItem = card.createCard();
  return cardItem;
}
// Куда хотим их разместить
const addOnPage = function (container, item) {
  container.prepend(item);
};
// Вставляем данные картинки
initialCards.forEach((item) => {
  addOnPage(cardsContainer, addNewCard(item));
});
// Отправка данных для кнопки редактирования
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  valueNameInput.textContent = nameInput.value;
  valueJobInput.textContent = jobInput.value;
  closePopup(popupEditProfile);
}
profileForm.addEventListener("submit", handleProfileFormSubmit);
// Отправка данных для добавление фотографии
pictureForm.addEventListener("submit", addCardOnPage);
function addCardOnPage(event) {
  event.preventDefault();
  // disableButton(buttonSubmit, validationConfig);
  const newPicture = {
    name: titleInput.value,
    link: linkInput.value,
  };
  addOnPage(cardsContainer, addNewCard(newPicture));
  pictureForm.reset();
  closePopup(pictureForm);
  log(pictureForm)
}

// class FormValidator {
//  constructor()
// }






// // Переменные страницы
// const popupElements = document.querySelectorAll(".popup");
// const profileOpenButton = document.querySelector(".profile__edit-button");
// const profileAddButton = document.querySelector(".profile__add-button");
// const valueNameInput = document.querySelector(".section-title");
// const valueJobInput = document.querySelector(".section-subtitle");
// // Переменные форм
// const popupEditProfile = document.querySelector(".popupEditProfile");
// const closeButtons = document.querySelectorAll(".popup__close");
// const profileForm = popupEditProfile.querySelector(".popup__form");
// const nameInput = profileForm.querySelector(".popup__input_type_name");
// const jobInput = profileForm.querySelector(".popup__input_type_job");
// // Переменные с увеличения картинок
// const popapForImage = document.querySelector(".popupForImage");
// const zoomPicture = popapForImage.querySelector(".popupForImage__image");
// const figcaptionPicture = popapForImage.querySelector(
//   ".popupForImage__figcaption"
// );
// // Переменные добавления картинки
// const popupAddPicture = document.querySelector(".popupAddPicture");
// const pictureForm = popupAddPicture.querySelector(".popup__form");
// const titleInput = popupAddPicture.querySelector(".popup__input_type_title");
// const linkInput = popupAddPicture.querySelector(".popup__input_type_link");
// // Переменные темплейта
// const cardsContainer = document.querySelector(".elements");
// const itemTemplate = document.querySelector("#template").content;
// // Открытие/закрытие попапов
// function openPopup(popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", closePopupOnEsc);
// }
// function closePopup(popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keydown", closePopupOnEsc);
// }
// closeButtons.forEach((button) => {
//   const popup = button.closest(".popup");
//   button.addEventListener("click", () => closePopup(popup));
// });
// // Функция закрытия попапа по Escape
// function closePopupOnEsc(evt) {
//   if (evt.key === "Escape") {
//     const popup = document.querySelector(".popup_opened");
//     closePopup(popup);
//   }
// }
// // Функция закрытия попапа по оверлею
// const closePopupOnOverlay = function (event) {
//   if (event.target === event.currentTarget) {
//     closePopup(event.target);
//   }
// };
// popupElements.forEach((item) => {
//   item.addEventListener("mousedown", closePopupOnOverlay);
// });
// // Открытие попапа для профиля
// profileOpenButton.addEventListener("click", function () {
//   nameInput.value = valueNameInput.textContent;
//   jobInput.value = valueJobInput.textContent;
//   openPopup(popupEditProfile);
// });
// // Открытие попапа для добавления фото
// profileAddButton.addEventListener("click", function () {
//   openPopup(popupAddPicture);
// });
// // Функция добавления место картинкам
// const createCard = function (item) {
//   const pictureElement = itemTemplate.cloneNode(true);
//   const templateElementPicture =
//     pictureElement.querySelector(".elements__image");
//   const templateElementName = pictureElement.querySelector(".elements__name");
//   templateElementPicture.src = item.link;
//   templateElementPicture.alt = item.alt;
//   templateElementName.textContent = item.name;
//   closePopup(popupAddPicture);
//   // Добавление лайков
//   pictureElement
//     .querySelector(".elements__button")
//     .addEventListener("click", function (evt) {
//       evt.target.classList.toggle("elements__button_active");
//     });
//   // Удаление картинок
//   pictureElement
//     .querySelector(".elements__element_urn")
//     .addEventListener("click", function (evt) {
//       evt.target.closest(".elements__element").remove();
//     });
//   // Открытие попапа увеличенных фото
//   templateElementPicture.addEventListener("click", function () {
//     zoomPicture.src = item.link;
//     zoomPicture.alt = item.alt;
//     figcaptionPicture.textContent = item.name;
//     openPopup(popapForImage);
//   });
//   // Возвращаем
//   return pictureElement;
// };
// // Куда хотим их разместить
// const addOnPage = function (item) {
//   cardsContainer.prepend(item);
// };
// // Вставляем данные картинки
// initialCards.forEach((item) => {
//   addOnPage(createCard(item));
// });
// // Отправка данных для кнопки редактирования
// function handleProfileFormSubmit(evt) {
//   evt.preventDefault();
//   valueNameInput.textContent = nameInput.value;
//   valueJobInput.textContent = jobInput.value;
//   closePopup(popupEditProfile);
// }
// profileForm.addEventListener("submit", handleProfileFormSubmit);
// // Отправка данных для добавление фотографии
// pictureForm.addEventListener("submit", addCardOnPage);
// function addCardOnPage(event) {
//   event.preventDefault();
//   const buttonSubmit = pictureForm.querySelector(".popup__submit-button");
//   disableButton(buttonSubmit, validationConfig);
//   const newPicture = {
//     name: titleInput.value,
//     link: linkInput.value,
//   };
//   addOnPage(createCard(newPicture));
//   pictureForm.reset();
// // }
