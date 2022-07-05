/* Форма с фильтрами товаров */
const filtersForm = document.querySelector('.filters__form');

/* Функция открытия первого фильтра при загрузке страницы */
const initFirstFilter = () => {
  const firstFilterBlock = filtersForm.querySelector('.filters__block');
  const firstFilterButton = firstFilterBlock.querySelector('.filter-product__title');
  const firstFilterList = firstFilterBlock.querySelector('.filter-product__list');

  firstFilterBlock.classList.add('filter-opened');
  firstFilterButton.classList.add('filter-opened');
  firstFilterList.style.maxHeight = firstFilterList.scrollHeight + 'px';
}

/* Функция открытия фильтра при клике */
const onFilterShow = (evt) => {
  if (evt.target.matches('.filter-product__title')) {
    const currentFilterBlock = evt.target.closest('.filters__block');
    const currentFilterButton = currentFilterBlock.querySelector('.filter-product__title');
    const currentFilterList = currentFilterBlock.querySelector('.filter-product__list');

    currentFilterBlock.classList.toggle('filter-opened');
    currentFilterButton.classList.toggle('filter-opened');

    if (currentFilterBlock.classList.contains('filter-opened')) {
      currentFilterList.style.maxHeight = currentFilterList.scrollHeight + 'px';
    } else {
      currentFilterList.style.maxHeight = '0px';
    }
  }
};

initFirstFilter();

filtersForm.addEventListener('click', onFilterShow);
