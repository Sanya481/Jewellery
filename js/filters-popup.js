/* Отменяем скролл главной страницы при открытом попапе */
const pageBody = document.querySelector('.page-body');
/* Блок с кнопкой и фильтром для удобства поиска в нем */
const catalogSection = document.querySelector('.catalog-inner__wrapper');
/* Кнопка для открытия модального окна с фильтрами */
const filterButton = catalogSection.querySelector('.catalog-inner__button');
/* Попап с фильтрами */
const filtersPopup = catalogSection.querySelector('.filters');
/* Кнопка закрытия попапа с фильтрами */
const filtersСloseButton = catalogSection.querySelector('.filters__close');


/* Функция проверяет, что нажали кнопку Escape */
const isFilterEscapeKey = (evt) => {
  return evt.key === 'Escape';
};


/* Функция открытия попапа, добавление обработчиков по закрытию  */
const onFilterPopupOpen = (evt) => {
  evt.preventDefault();
  filtersPopup.classList.add('filters-show');
  filtersСloseButton.classList.add('filters-show');
  pageBody.classList.add('modal-open');



  filtersСloseButton.addEventListener('click', onFilterPopupClose);
  document.addEventListener('keydown', onFilterPopupEsc);
  // window.addEventListener('click', onDocumentClick);

  /* НЕ РАБОТАЕТ!!! */
  /* Функция закрытия модального окна при клике вне модального окна */
  // document.addEventListener('click', (evt) => {
  //   const isOutsideClick = !evt.composedPath().includes(modalLoginPopup);
  //   if (isOutsideClick) {
  //     console.log('Привет');
  //     modalLoginPopup.classList.remove('filters-show');
  //   }
  //   console.log('Пока');
  // })
};

function closeFilterPopup() {
  filtersPopup.classList.remove('filters-show');
  filtersСloseButton.classList.remove('filters-show');
  pageBody.classList.remove('modal-open');

  filtersСloseButton.removeEventListener('click', onFilterPopupClose);
  document.removeEventListener('keydown', onFilterPopupEsc);
}

/* Функция закрытия модального окна по нажатию на крестик */
function onFilterPopupClose() {
  closeFilterPopup();
}

/* Функция закрытия модального окна по нажатию на Escape */
function onFilterPopupEsc(evt) {
  if (isFilterEscapeKey(evt)) {
    evt.preventDefault();
    closeFilterPopup();
  }
}

filterButton.addEventListener('click', onFilterPopupOpen);
