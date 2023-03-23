const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const formElement = document.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__name_type_name");
const jobInput = formElement.querySelector(".popup__job_type_job");
const valueNameInput = document.querySelector(".section-title");
const valueJobInput = document.querySelector(".section-subtitle");
const popupElementAddPicture = document.querySelector(".popup__addPicture");
const popupOpenAddPictureButtonElement = document.querySelector(
  ".profile__add-button"
);
const popupCloseButtonAddPicture = document.querySelector(
  ".popup__close_addPicture"
);
const popapForImage = document.querySelector(".popup__forImage");
// Переменные с увеличения картинок
const onAllscreenImage = document.querySelector(".popup__image");
const onAllscreenText = document.querySelector(".popup__figcaption");
const closePopupBigPicture = document.querySelector(".popup__close_image");
// Переменные добавления картинки
const formPicture = document.querySelector(".popup__form_addPicture");
// Переменные темплейта
const cardsContainer = document.querySelector(".elements");
const itemTemplate = document.querySelector("#template").content;
// Открытие/закрытие попапа
// const openPopup = function () {
//   nameInput.value = valueNameInput.textContent;
//   jobInput.value = valueJobInput.textContent;
//   popupElement.classList.add("popup_opened");
// };
// _______________________________
function openPopup (popap) {
  popap.classList.add("popup_opened");
};
function closePopup (popap) {
  popap.classList.remove("popup_opened");
};
const closePopupByClickOnOverlay = function (event) {
  console.log(event.target, event.currentTarget);
  if (event.target !== event.currentTarget) {
    return;
  }
};

// _______________________________

// Открытие/закрытие попапа для отправки фото
// const addPicture = function () {
//   popupElementAddPicture.classList.add("popup__addPicture_opened");
// };
// const closeAddPicture = function () {
//   popupElementAddPicture.classList.remove("popup__addPicture_opened");
// };
// popupOpenAddPictureButtonElement.addEventListener("click", addPicture);
// popupCloseButtonAddPicture.addEventListener("click", closeAddPicture);
// _______________________________
// Открытие/закрытие попапа для профиля
popupOpenButtonElement.addEventListener("click", function() {
  openPopup(popupElement);
});
popupCloseButtonElement.addEventListener("click", function() {
closePopup(popupElement);
console.log(closePopup(popupCloseButtonElement))

});

// Открытие/закрытие попапа для добавления фото
popupOpenAddPictureButtonElement.addEventListener("click", function() {
  openPopup(popupElementAddPicture);
});
popupCloseButtonAddPicture.addEventListener("click", function() {
  closePopup(popupElementAddPicture);
});


// _______________________________


// Функция добавления место картинкам
const card = function (item) {
  const pictureElement = itemTemplate.cloneNode(true);
  const templateElementPicture =
    pictureElement.querySelector(".elements__image");
  const templateElementName = pictureElement.querySelector(".elements__name");
  templateElementPicture.src = item.link;
  templateElementPicture.alt = item.alt;
  templateElementName.textContent = item.name;
  closePopup(popupElementAddPicture);

  // Добавление лайков
  pictureElement
    .querySelector(".elements__button")
    .addEventListener("click", function (evt) {
      evt.target.classList.toggle("elements__button_active");
    });
  // Удаление картинок
  pictureElement
    .querySelector(".elements__element_urn")
    .addEventListener("click", function (evt) {
      evt.target.closest(".elements__element").remove();
    });
  // Открытие попапа увеличенных фото
  templateElementPicture.addEventListener("click", function () {
    onAllscreenImage.src = item.link;
    onAllscreenImage.alt = item.alt;
    onAllscreenText.textContent = item.name;
    const openPicture = function () {
      popapForImage.classList.add("popup__forImage_active");
    };
    openPicture();
  });
  // Возвращаем
  return pictureElement;
};
// Закрытие увеличенных фото
closePopupBigPicture.addEventListener("click", function () {
  popapForImage.classList.remove("popup__forImage_active");
});
// Куда хотим их разместить
const addOnPage = function (item) {
  cardsContainer.prepend(item);
};
// Массив с картинками
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];
// Вставляем данные картинки
initialCards.forEach((item) => {
  addOnPage(card(item));
});
// Отправка данных для кнопки редактирования
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener("click", closePopupByClickOnOverlay);
function handleFormSubmit(evt) {
  evt.preventDefault();
  valueNameInput.textContent = nameInput.value;
  valueJobInput.textContent = jobInput.value;
  closePopup(popupElement);
}
formElement.addEventListener("submit", handleFormSubmit);
// Отправка данных для добавление фотографии
formPicture.addEventListener("submit", addCardOnPage);
const pictureToSend = document.querySelector(
  ".popup__name_addPicture_type_name"
);
const linkPictureToSend = document.querySelector(
  ".popup__link_addPicture_type_link"
);
function addCardOnPage(event) {
  event.preventDefault();
  const newPicture = {
    name: pictureToSend.value,
    link: linkPictureToSend.value,
  };
  addOnPage(card(newPicture));
  formPicture.reset();
  closePopup();
}
