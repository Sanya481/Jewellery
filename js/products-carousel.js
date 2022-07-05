/* На сколько смещаем */
let position = 0;
/* Сколько элементов показываем */
let productToShow = 4;
/* На сколько элементов проскроливаем */
let productToScroll = 4;
/* Счетчик количества продуктов которые просмотрел ползователь (в моб. версии)  */
let currentProductsMobileShow = 2;
/* Счетчик для пагинации */
let breadcrumbsNumberActive = 0;

/* Секция с нужными элементами, чтобы быстрее искать */
const products = document.querySelector('.products');
/* Кнопка прокрутки карусели товаров - назад */
const productPrevBtn = products.querySelector('.products__prev--main-page');
/* Кнопка прокрутки карусели товаров - вперед */
const productNextBtn = products.querySelector('.products__next--main-page');
/* Список товаров */
const productsList = products.querySelector('.products__list--main-page');
/* Общее количество товаров */
const productsCount = products.querySelectorAll('.products__item').length;
/* Одна карточка */
const product = products.querySelector('.products__item');
/* Пагинация в планшетной версии */
const breadcrumbsPage = Array.from(products.querySelectorAll('.breadcrumbs__page'));

/* Счетчик количества всех продуктов которые есть (в моб. версии)  */
const productsCountNumber = products.querySelector('.products__count');
productsCountNumber.textContent = productsCount;

/* Счетчик количества продуктов которые просмотрел ползователь (в моб. версии)  */
const productsShow = products.querySelector('.products__show');
productsShow.textContent = currentProductsMobileShow;

/* Ширина одной карточки товара + margin-right: 30px; у каждой карточки */
const productWidth = product.clientWidth + 30;

if (window.matchMedia('(min-width: 320px) and (max-width: 1023px)').matches) {
  productToShow = 2;
  productToScroll = 2;
} else {
  productToShow = 4;
  productToScroll = 4;
}

/* Значение, показывающее на сколько нужно проскролить за одно нажатие  */
const movePosition = productWidth * productToScroll;


const setPosition = () => {
  productsList.style.transform = `translateX(${position}px)`;
}

/* Отключение кнопки назад - когда пользователь на первом товаре и отключение кнопки вперед - когда пользователь на последнем товаре*/
const checkButtons = () => {
  if (productPrevBtn.disabled = position === 0) {
    productPrevBtn.classList.add('disabled');
  }

  if (productNextBtn.disabled = position <= -(productsCount - productToShow) * productWidth) {
    productNextBtn.classList.add('disabled');
  }
}

checkButtons();

productPrevBtn.addEventListener('click', () => {
  productNextBtn.classList.remove('disabled');

  /* Сколько товаров осталось */
  const productLeft = Math.abs(position) / productWidth;

  position += productLeft >= productToScroll ? movePosition : productLeft * productWidth;
  setPosition();
  checkButtons();
});


productNextBtn.addEventListener('click', () => {
  productPrevBtn.classList.remove('disabled');

  /* Сколько товаров осталось */
  const productLeft = productsCount - (Math.abs(position) + productToShow * productWidth) / productWidth;

  position -= productLeft >= productToScroll ? movePosition : productLeft * productWidth;
  setPosition();
  checkButtons();
});


/* Swipe на мобильном устройстве */
const productsCarousel = document.querySelector('.products__carousel');

let x1 = null;
let y1 = null;

const onTouchStart = (evt) => {
  const firstTouch = evt.touches[0];

  /* Координаты по x, где мы кликнули */
  x1 = firstTouch.clientX;
  /* Координаты по y, где мы кликнули */
  y1 = firstTouch.clientY;
}

const onTouchMove = (evt) => {
  if (!x1 || !y1) {
    return false;
  } else {

    let x2 = evt.touches[0].clientX;
    let y2 = evt.touches[0].clientY;

    let xDiff = x2 - x1;
    let yDiff = y2 - y1;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      /* Движение вправо/влево */

      if (xDiff < 0) {
        /* Next product */

        if (window.matchMedia('(min-width: 320px) and (max-width: 767px)').matches) {
          /* Счетчик количества продуктов которые просмотрел ползователь (в моб. версии)  */
          currentProductsMobileShow += 2;
          productsShow.textContent = currentProductsMobileShow;

        } else if (window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches) {

          /* Смена цвета у 'активной' пагинации */
          breadcrumbsNumberActive += 1;
          console.log(breadcrumbsNumberActive)

          breadcrumbsPage.forEach((number) => {
            number.querySelector('.breadcrumbs__number').classList.remove('breadcrumbs__number--active');
          })

          breadcrumbsPage[breadcrumbsNumberActive].querySelector('.breadcrumbs__number').classList.add('breadcrumbs__number--active');
        }

        const productLeft = productsCount - (Math.abs(position) + productToShow * productWidth) / productWidth;

        position -= productLeft >= productToScroll ? movePosition : productLeft * productWidth;
        setPosition();
      } else {
        /* Prev product */

        if (window.matchMedia('(min-width: 320px) and (max-width: 767px)').matches) {
          /* Счетчик количества продуктов которые просмотрел ползователь (в моб. версии)  */
          currentProductsMobileShow -= 2;
          productsShow.textContent = currentProductsMobileShow;

        } else if (window.matchMedia('(min-width: 768px) and (max-width: 1023px)').matches) {

          /* Смена цвета у 'активной' пагинации */
          breadcrumbsNumberActive -= 1;
          console.log(breadcrumbsNumberActive)

          breadcrumbsPage.forEach((number) => {
            number.querySelector('.breadcrumbs__number').classList.remove('breadcrumbs__number--active');
          })

          breadcrumbsPage[breadcrumbsNumberActive].querySelector('.breadcrumbs__number').classList.add('breadcrumbs__number--active');
        }

        const productLeft = Math.abs(position) / productWidth;

        position += productLeft >= productToScroll ? movePosition : productLeft * productWidth;
        setPosition();
      }
    }
  }
  x1 = null;
  y1 = null;
}

productsCarousel.addEventListener('touchstart', onTouchStart, false);
productsCarousel.addEventListener('touchmove', onTouchMove, false);
