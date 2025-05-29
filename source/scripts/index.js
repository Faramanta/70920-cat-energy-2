/* в этот файл добавляет скрипты*/
const navOpenBtn = document.querySelector('.main-nav__toggle');
const navList = document.querySelector('.main-nav__list');

navOpenBtn.addEventListener('click', function() {
  this.classList.toggle('main-nav__toggle--active');
  navList.classList.toggle('main-nav__list--active');
});
