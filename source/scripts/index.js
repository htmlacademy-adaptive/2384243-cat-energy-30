/* в этот файл добавляет скрипты*/

const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('main-nhttps://eslint.org/docs/latest/rules/prefer-arrow-callbackav--closed')) {
    navMain.classList.remove('main-nav--opened');
    navMain.classList.add('main-nav--closed');
  } else {
    navMain.classList.add('main-nav--opened');
    navMain.classList.remove('main-nav--closed');
  }
});
