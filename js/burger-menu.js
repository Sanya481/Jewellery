/* Шапка сайта с содержимым */
const header = document.querySelector('.header'); 
/* Логотип сайта */
const headerLogo = header.querySelector('.header__logo'); 
/* Кнопка для открытия меню */
const burgerMenuButton = header.querySelector('.burger'); 
/* Span внутри кнопки открытия меню (полоски) */
const burgerMenu = header.querySelector('.burger__menu'); 
/* Навигация сайта */
const mainNav = header.querySelector('.nav'); 
/* Иконка корзины с товарами */
const cart = header.querySelector('.cart'); 


burgerMenuButton.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    mainNav.classList.toggle('active');
    header.classList.toggle('active');
    headerLogo.classList.toggle('active');
    cart.classList.toggle('active');
})