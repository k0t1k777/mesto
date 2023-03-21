const popupElement = document.querySelector(".popup");
const popupCloseButtonElement = popupElement.querySelector(".popup__close");
const popupOpenButtonElement = document.querySelector(".profile__edit-button");
const formElement = document.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__name_type_name");
const jobInput = formElement.querySelector(".popup__job_type_job");
const valueNameInput = document.querySelector(".section-title");
const valueJobInput = document.querySelector(".section-subtitle");
const popupOpenAddPictureButtonElement = document.querySelector(".profile__add-button");
const popupElementAddPicture = document.querySelector(".popup__addPicture");
const popupCloseButtonAddPicture = document.querySelector(".popup__close_addPicture");
// Переменные темплейта
const cardsContainer = document.querySelector(".elements");
const itemTemplate = document.querySelector("#template").content;
// Функция добавления место картинкам
const createCard = function (item) {
  const pictureElement = itemTemplate.cloneNode(true);
  const templateElementPicture = pictureElement.querySelector(".elements__image");
  const templateElementName = pictureElement.querySelector(".elements__name");
  templateElementPicture.src = item.link;
  templateElementPicture.alt = item.alt;
  templateElementName.textContent = item.name;
  // Добавление лайков
  pictureElement.querySelector('.elements__button').addEventListener('click', function (evt) {
  evt.target.classList.toggle("elements__button_active");
});
  // Удаление картинок
  pictureElement.querySelector('.elements__element_urn').addEventListener('click', function (evt) {
    evt.target.closest(".elements__element").remove();
  });
// Возвращаем
return pictureElement;
}
// Куда хотим их разместить
const addOnPage = function(item) {
  cardsContainer.prepend(item);
}
// Массив с картинками
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
// Вставляем данные картинки
initialCards.forEach((item) => {
  addOnPage(createCard(item));
});

// Открытие/закрытие попапа
const openPopup = function () {
  nameInput.value = valueNameInput.textContent;
  jobInput.value = valueJobInput.textContent;
  popupElement.classList.add("popup_opened");
};
const closePopup = function () {
  popupElement.classList.remove("popup_opened");
};
const closePopupByClickOnOverlay = function (event) {
  console.log(event.target, event.currentTarget);
  if (event.target !== event.currentTarget) {
    return;
  }
};
// Отправка данных для кнопки редактирования
popupOpenButtonElement.addEventListener("click", openPopup);
popupCloseButtonElement.addEventListener("click", closePopup);
popupElement.addEventListener("click", closePopupByClickOnOverlay);
function handleFormSubmit(evt) {
  evt.preventDefault();
  valueNameInput.textContent = nameInput.value;
  valueJobInput.textContent = jobInput.value;
  closePopup();
}
formElement.addEventListener("submit", handleFormSubmit);
// Открытие/закрытие попапа для отправки фото
const addPicture = function () {
  popupElementAddPicture.classList.add("popup__addPicture_opened");
};
const closeAddPicture = function () {
  popupElementAddPicture.classList.remove("popup__addPicture_opened");
};
popupOpenAddPictureButtonElement.addEventListener("click", addPicture);
popupCloseButtonAddPicture.addEventListener("click", closeAddPicture);
// Открытие/закрытие попапа увеличенных фото
// const openPhoto = function () {
//   nameInput.value = valueNameInput.textContent;
//   jobInput.value = valueJobInput.textContent;
//   }
// openPhoto.addEventListener('click', function() {
// const photoForOpenPhoto = document.querySelector(".popup__image");
// popup__forImage_active
// })
// Отправка данных для добавление фотографии

const pictureToSend = document.querySelector(".popup__name_addPicture_type_name");
const linkPictureToSend = document.querySelector(".popup__link_addPicture_type_link");
function addPictureToSubmit (event) {
  evt.preventDefault();
  const addNewPicture = {name:pictureToSend.value, link:linkPictureToSend.value}
  cardsContainer(createCard(addNewPicture));
  closeAddPicture();
}
// popupOpenButtonElement.addEventListener("click", openPopup);
// popupCloseButtonElement.addEventListener("click", closePopup);
// popupElement.addEventListener("click", closePopupByClickOnOverlay);
// function handleFormSubmit(evt) {
//   valueNameInput.textContent = nameInput.value;
//   valueJobInput.textContent = jobInput.value;
//   closePopup();
// }
// formElement.addEventListener("submit", handleFormSubmit);

// https://ae04.alicdn.com/kf/S389710ae7782459692234222687c55e8o.jpg_640x640.jpg
