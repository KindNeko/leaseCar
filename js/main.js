const tabsItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');

tabsItem.forEach((element) => {
    element.addEventListener('click', open);
});

function open(event) {
    const tabTarget = event.currentTarget;
    const button = tabTarget.dataset.button;

    tabsItem.forEach((item) => {
        item.classList.remove('tabs__btn-item--active');
    });

    tabTarget.classList.add('tabs__btn-item--active');

    tabContent.forEach((item) => {
        item.classList.remove('tabs__content-item--active');
    });

    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}


menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');
});
