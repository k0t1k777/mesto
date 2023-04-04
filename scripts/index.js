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
// Переменные темплейта
const cardsContainer = document.querySelector(".elements");
const itemTemplate = document.querySelector("#template").content;
// Открытие/закрытие попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
}
function closePopup(popup) {
  popup.classList.remove("popup_opened");
}
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
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
// Функция добавления место картинкам
const createCard = function (item) {
  const pictureElement = itemTemplate.cloneNode(true);
  const templateElementPicture =
    pictureElement.querySelector(".elements__image");
  const templateElementName = pictureElement.querySelector(".elements__name");
  templateElementPicture.src = item.link;
  templateElementPicture.alt = item.alt;
  templateElementName.textContent = item.name;
  closePopup(popupAddPicture);
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
    zoomPicture.src = item.link;
    zoomPicture.alt = item.alt;
    figcaptionPicture.textContent = item.name;
    openPopup(popapForImage);
  });
  // Возвращаем
  return pictureElement;
};
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
  addOnPage(createCard(item));
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
  const newPicture = {
    name: titleInput.value,
    link: linkInput.value,
  };
  addOnPage(createCard(newPicture));
  pictureForm.reset();
}


const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_invalid',
  activeButtonClass: 'popup__submit-button_valid',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

// Подготовка формы
const enableValidation = ({ formSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
forms.forEach(form => {
  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    })
  setEventListeners(form, rest)
})
}
// Навешиваем слушатели инпутам
const setEventListeners = (formToValidate, { inputSelector, submitButtonSelector, ...rest }) => {
  const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector));
  const formButton = formToValidate.querySelector(submitButtonSelector);
  formInputs.forEach(input => {
    disableButton(formButton, rest);
    input.addEventListener("input", () => {
      checkInputValidity(input);
      if (hasInvalidInput(formInputs)) {
        disableButton(formButton, rest);
           } else {
            enableButton(formButton, rest)
          }
      });
})
}
const showErrorMessage = function (currentInputErrorContainer, input) {
  currentInputErrorContainer.classList.add("popup__error_visible")
  currentInputErrorContainer.textContent = input.validationMessage
  input.classList.add("popup__input_type_error")
}
const hideErrorMessage = function (currentInputErrorContainer, input) {
  currentInputErrorContainer.classList.remove("popup__error_visible")
  currentInputErrorContainer.textContent = ''
  input.classList.remove("popup__input_type_error")
}
// Проверка валидности инпутов
const checkInputValidity = (input) => {
  const currentInputErrorContainer = document.querySelector(`#${input.id}-error`);
if (input.checkValidity()) {
  hideErrorMessage(currentInputErrorContainer, input);
} else {
  showErrorMessage(currentInputErrorContainer, input);
}
}
const hasInvalidInput = (formInputs) => {
  return formInputs.some(item => !item.validity.valid)
}
// Активнеая/неактивная кнопка
const enableButton = (button, { inactiveButtonClass, activeButtonClass }) => {
  button.classList.remove(inactiveButtonClass);
  button.classList.add(activeButtonClass);
  button.removeAttribute("disabled", "disabled");
}
const disableButton = (button, { inactiveButtonClass, activeButtonClass }) => {
  button.classList.add(inactiveButtonClass);
  button.classList.remove(activeButtonClass);
  button.setAttribute("disabled", "disabled");
}
enableValidation(validationConfig);
