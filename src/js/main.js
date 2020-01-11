import '../scss/main.scss';


const accordion = document.querySelector('.accordion__header');

accordion.addEventListener('click', (e) => {
	const arrow = document.querySelector('.accordion__header__arrow');
	const body = document.querySelector('.accordion__body');
	arrow.classList.toggle('accordion__header__arrow--closed');
	body.classList.toggle('accordion__body--closed');
	accordion.classList.toggle('accordion__header--closed');
})