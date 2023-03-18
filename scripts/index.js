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
const heartBlack = document.querySelector(".elements__button");

const cardsContainer = document.querySelector(".elements");
const itemTemplate = document.querySelector("#template").content;
const addPictureToTemplate = function () {
  const pictureElement = itemTemplate.querySelector("#template").cloneNode(true);
  templateElementPicture = pictureElement.querySelector("elements__image");
  templateElementName = pictureElement.querySelector("elements__name");
  templateElementPicture.link = link;
  templateElementPicture.alt = alt;
  templateElementName.querySelector("#popup__name_addPicture").textContent = name;
}

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

initialCards.forEach(function (item) {

});



const paintBlackHeart = function () {
  heartBlack.classList.toggle("elements__button_active");
}
heartBlack.addEventListener("click", paintBlackHeart);

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
// addPicture

const addPicture = function () {
  popupElementAddPicture.classList.add("popup__addPicture_opened");
};
const closeAddPicture = function () {
  popupElementAddPicture.classList.remove("popup__addPicture_opened");
};
popupOpenAddPictureButtonElement.addEventListener("click", addPicture);
popupCloseButtonAddPicture.addEventListener("click", closeAddPicture);


