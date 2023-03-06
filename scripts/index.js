// Находим форму в DOM
const popapElement = document.querySelector(".popap");
const popapCloseButtonElement = popapElement.querySelector(".popap__close");
const popapOpenButtonElement = document.querySelector(".profile__edit-button");

  const openPopap = function () {
    popapElement.classList.add("popap_opened");
    console.log('Open popap clicked');
  };
  const closePopap = function () {
    popapElement.classList.remove("popap_opened");
    };

const closePopapByClickOnOverlay = function(event) {
  console.log(event.target, event.currentTarget);
  if (event.target !==event.currentTarget) {
  return;
};
closePopap();
};

popapOpenButtonElement.addEventListener("click", openPopap);
popapCloseButtonElement.addEventListener("click", closePopap);
popapElement.addEventListener('click', closePopapByClickOnOverlay);


// popapOpenButtonElement.addEventListener("click", function(event) {
// console.log(event);
// })

// тогл в одну строку открывает/закрыват
// popapOpenButtonElement.addEventListener("click", tooglePopapVisibility);


// tooglePopapVisibility();



// Воспользуйтесь методом querySelector()
// Находим поля формы в DOM
// let nameInput = // Воспользуйтесь инструментом .querySelector()
// let jobInput = // Воспользуйтесь инструментом .querySelector()

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
// function handleFormSubmit (evt) {
    // evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
// }

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
// formElement.addEventListener('submit', handleFormSubmit);



// console.log(.popap)
