/* Ссылка на открытие модального окна с регистрацией */
const loginLink = document.querySelector('.user-navigation__link--login');
/* Модальное окно с регистрацией */
const modalLoginPopup = document.querySelector('.modal-login');
/* Форма модального окна для ввода данных */
const modalLoginForm = modalLoginPopup.querySelector('.modal-login__form');
/* Поле для ввода почты */
const modalLoginInputMail = modalLoginPopup.querySelector('.modal-login__input--mail');
/* Поле для ввода пароля */
const modalLoginInputPassword = modalLoginPopup.querySelector('.modal-login__input--password');
/* Кнопка закрытия модального окна с регистрацией */
const modalLoginCloseBtn = modalLoginPopup.querySelector('.modal-login__close-btn');

let isStorageSupport = true;
let storage = '';

try {
  storage = localStorage.getItem('login');
} catch (err) {
  isStorageSupport = false;
}

/* Функция проверяет, что нажали кнопку Escape */
const isEscapeKey = (evt) => {
  return evt.key === 'Escape';
};

/* Реализация анимации при попытке отправить неправильные данные */
const onLoginFormValidate = (evt) => {
  if (!modalLoginInputMail.value || !modalLoginInputPassword.value) {
    evt.preventDefault();
    modalLoginPopup.classList.remove('modal-error');
    modalLoginPopup.offsetWidth = modalLoginPopup.offsetWidth;
    modalLoginPopup.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', modalLoginInputMail.value);
    }
  }
};

/* Функция открытия модального окна, добавление обработчиков по закрытию и автофокус в поле ввода */
const onModalLoginOpen = (evt) => {
  evt.preventDefault();
  modalLoginPopup.classList.add('modal-login--show');

  if (storage) {
    modalLoginInputMail.value = storage;
    modalLoginInputPassword.focus();
  } else {
    modalLoginInputMail.focus();
  }

  modalLoginCloseBtn.addEventListener('click', onModalLoginClose);
  modalLoginForm.addEventListener('submit', onLoginFormValidate);
  document.addEventListener('keydown', onModalLoginEsc);
  // window.addEventListener('click', onDocumentClick);

  /* НЕ РАБОТАЕТ!!! */
  /* Функция закрытия модального окна при клике вне модального окна */
  // document.addEventListener('click', (evt) => {
  //   const isOutsideClick = !evt.composedPath().includes(modalLoginPopup);
  //   if (isOutsideClick) {
  //     console.log('Привет');
  //     modalLoginPopup.classList.remove('modal-login--show');
  //   }
  //   console.log('Пока');
  // })
};

// function onDocumentClick(evt) {
//   if (!evt.target.closest('.modal-login')) {
//     modalLoginPopup.classList.toggle('modal-login--show');
//     window.removeEventListener('click', onDocumentClick);
//     console.log(!evt.target.closest('.modal-login'));
//
//   }
// }

/* Закрытие модального окна и удаление обработчиков */
function closeModalLogin() {
  modalLoginPopup.classList.remove('modal-login--show');
  modalLoginPopup.classList.remove('modal-error');

  modalLoginCloseBtn.removeEventListener('click', onModalLoginClose);
  document.removeEventListener('keydown', onModalLoginEsc);
  modalLoginForm.removeEventListener('submit', onLoginFormValidate);
}

/* Функция закрытия модального окна по нажатию на крестик */
function onModalLoginClose() {
  closeModalLogin();
}

/* Функция закрытия модального окна по нажатию на Escape */
function onModalLoginEsc(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModalLogin();
  }
}

loginLink.addEventListener('click', onModalLoginOpen);



