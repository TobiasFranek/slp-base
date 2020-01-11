import '../scss/main.scss';


const accordion = document.querySelector('.accordion__header');

accordion.addEventListener('click', (e) => {
	const arrow = document.querySelector('.accordion__header__arrow');
	const body = document.querySelector('.accordion__body');
	arrow.classList.toggle('accordion__header__arrow--closed');
	body.classList.toggle('accordion__body--closed');
	accordion.classList.toggle('accordion__header--closed');
});

const galleryItems = document.querySelectorAll('.gallery__item');
const overlay = document.querySelector('.overlay');
const closeOverlay = document.querySelector('.overlay__close');

closeOverlay.addEventListener('click', () => {
	overlay.classList.toggle('overlay--closed');
})

for (let item of galleryItems) {
	item.addEventListener('click', (e) => {
		e.preventDefault();
		const path = e.target.parentNode.getAttribute('href');
		if (path) {
			document.querySelector('.overlay__body').innerHTML = `<img src="${path}" class="gallery__item__image gallery__item__image--overlay" >`;
			overlay.classList.toggle('overlay--closed');
		}
	});
}