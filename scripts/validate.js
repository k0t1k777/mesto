const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit-button",
  inactiveButtonClass: "popup__submit-button_invalid",
  activeButtonClass: "popup__submit-button_valid",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
// Подготовка формы
const enableValidation = ({ formSelector, ...rest }) => {
  const forms = Array.from(document.querySelectorAll(formSelector));
  forms.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form, rest);
  });
};
// Навешиваем слушатели инпутам
const setEventListeners = (
  formToValidate,
  { inputSelector, submitButtonSelector, ...rest }
) => {
  const formInputs = Array.from(formToValidate.querySelectorAll(inputSelector));
  const formButton = formToValidate.querySelector(submitButtonSelector);
  formInputs.forEach((input) => {
    disableButton(formButton, rest);
    input.addEventListener("input", () => {
      checkInputValidity(input, rest);
      if (hasInvalidInput(formInputs)) {
        disableButton(formButton, rest);
      } else {
        enableButton(formButton, rest);
      }
    });
  });
};
const showErrorMessage = function (
  currentInputErrorContainer,
  input,
  { inputErrorClass, errorClass }
) {
  currentInputErrorContainer.classList.add(errorClass);
  currentInputErrorContainer.textContent = input.validationMessage;
  input.classList.add(inputErrorClass);
};
const hideErrorMessage = function (
  currentInputErrorContainer,
  input,
  { inputErrorClass, errorClass }
) {
  currentInputErrorContainer.classList.remove(errorClass);
  currentInputErrorContainer.textContent = "";
  input.classList.remove(inputErrorClass);
};
// Проверка валидности инпутов
const checkInputValidity = (input, rest) => {
  const currentInputWrapper = input.parentElement;
  const currentInputErrorContainer = currentInputWrapper.querySelector(
    `#${input.id}-error`
  );
  if (input.checkValidity()) {
    hideErrorMessage(currentInputErrorContainer, input, rest);
  } else {
    showErrorMessage(currentInputErrorContainer, input, rest);
  }
};
const hasInvalidInput = (formInputs) => {
  return formInputs.some((item) => !item.validity.valid);
};
// Активная/неактивная кнопка
const enableButton = (button, { inactiveButtonClass, activeButtonClass }) => {
  button.classList.remove(inactiveButtonClass);
  button.classList.add(activeButtonClass);
  button.removeAttribute("disabled", "disabled");
};
const disableButton = (button, { inactiveButtonClass, activeButtonClass }) => {
  button.classList.add(inactiveButtonClass);
  button.classList.remove(activeButtonClass);
  button.setAttribute("disabled", "disabled");
};
enableValidation(validationConfig);
