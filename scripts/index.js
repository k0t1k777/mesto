// Переменные страницы
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const popupOpenAddPicture = document.querySelector(".profile__add-button");
const valueNameInput = document.querySelector(".section-title");
const valueJobInput = document.querySelector(".section-subtitle");
// Переменные форм
const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const formElement = popupElement.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__name_type_name");
const jobInput = formElement.querySelector(".popup__job_type_job");
// Переменные с увеличения картинок
const popapForImage = document.querySelector(".popupForImage");
const onAllscreenImage = popapForImage.querySelector(".popupForImage__image");
const onAllscreenText = popapForImage.querySelector(".popupForImage__figcaption");
const closePopupBigPicture = popapForImage.querySelector(".popupForImage__close");
// Переменные добавления картинки
const elementAddPicture = document.querySelector(".popupAddPicture");
const formPicture = elementAddPicture.querySelector(".popupAddPicture__form");
const popupCloseButtonAddPicture = elementAddPicture.querySelector(".popupAddPicture__close");
const pictureToSend = elementAddPicture.querySelector(".popupAddPicture__addPictureName_type_name");
const linkPictureToSend = elementAddPicture.querySelector(".popupAddPicture__addPictureLink_type_link");
// Переменные темплейта
const cardsContainer = document.querySelector(".elements");
const itemTemplate = document.querySelector("#template").content;
// Открытие/закрытие попапа
function openPopup (popup) {
  popup.classList.add("popup_opened");
};
function closePopup (popup) {
  popup.classList.remove("popup_opened");
};
// Открытие/закрытие попапа для профиля
popupOpenButtonElement.addEventListener("click", function() {
  nameInput.value = valueNameInput.textContent;
  jobInput.value = valueJobInput.textContent;
  openPopup(popupElement);
});
popupCloseButtonElement.addEventListener("click", function() {
closePopup(popupElement);
});
// Открытие/закрытие попапа для добавления фото
popupOpenAddPicture.addEventListener("click", function() {
  openPopup(elementAddPicture);
});
popupCloseButtonAddPicture.addEventListener("click", function() {
  closePopup(elementAddPicture);
});
// Функция добавления место картинкам
const card = function (item) {
  const pictureElement = itemTemplate.cloneNode(true);
  const templateElementPicture =
    pictureElement.querySelector(".elements__image");
  const templateElementName = pictureElement.querySelector(".elements__name");
  templateElementPicture.src = item.link;
  templateElementPicture.alt = item.alt;
  templateElementName.textContent = item.name;
  closePopup(elementAddPicture);
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
      popapForImage.classList.add("popupForImage_active");
    };
    openPicture();
  });
  // Возвращаем
  return pictureElement;
};
// Закрытие увеличенных фото
closePopupBigPicture.addEventListener("click", function () {
  popapForImage.classList.remove("popupForImage_active");
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
function handleFormSubmit(evt) {
  evt.preventDefault();
  valueNameInput.textContent = nameInput.value;
  valueJobInput.textContent = jobInput.value;
  closePopup(popupElement);
}
formElement.addEventListener("submit", handleFormSubmit);
// Отправка данных для добавление фотографии
formPicture.addEventListener("submit", addCardOnPage);
function addCardOnPage(event) {
  event.preventDefault();
  const newPicture = {
    name: pictureToSend.value,
    link: linkPictureToSend.value,
  };
  addOnPage(card(newPicture));
  formPicture.reset();
}

