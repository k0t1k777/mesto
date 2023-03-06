const popapElement = document.querySelector(".popap");
const popapCloseButtonElement = popapElement.querySelector(".popap__close");
const popapOpenButtonElement = document.querySelector(".profile__edit-button");
const formElement = document.querySelector(".popap__form");
const nameInput = formElement.querySelector(".popap__name");
const jobInput = formElement.querySelector(".popap__job");
const valueJobInput = document.querySelector(".section-title");
const valueNameInput = document.querySelector(".section-subtitle");

const openPopap = function () {
    popapElement.classList.add("popap_opened");
  };
  const closePopap = function () {
    popapElement.classList.remove("popap_opened");
    };
  const closePopapByClickOnOverlay = function(event) {
  console.log(event.target, event.currentTarget);
  if (event.target !==event.currentTarget) {
  return;
  };
};
popapOpenButtonElement.addEventListener("click", openPopap);
popapCloseButtonElement.addEventListener("click", closePopap);
popapElement.addEventListener('click', closePopapByClickOnOverlay);
function handleFormSubmit (evt) {
evt.preventDefault();
valueNameInput.textContent = nameInput.value;
valueJobInput.textContent = jobInput.value;
closePopap();
}
formElement.addEventListener('submit', handleFormSubmit);
