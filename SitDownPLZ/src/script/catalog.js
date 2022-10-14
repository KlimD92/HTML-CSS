window.addEventListener('DOMContentLoaded', function(){
// Swiper

const catalogSlider = document.querySelector('.catalog__swiper');

	let swiperCatalog = new Swiper(catalogSlider, {
		slidesPerView: 3,
		slidesPerColumn: 3,
		autoHeight: false,
		slidesPerGroup: 3,
		spaceBetween: 32,
		simulateTouch: false,
		// navigation: {
		// 	nextEl: '.catalog__btn-next',
		// 	prevEl: '.catalog__btn-prev',
		// },
		// pagination: {
		// 	el: '.catalog__swiper-pagination',
		// 	type: 'fraction',
		// },
		// a11y: {
		// 	prevSlideMessage: 'Предыдущий слайд',
		// 	nextSlideMessage: 'Следующий слайд',
		// },
		// breakpoints: {
		// 	1401: {
		// 		slidesPerView: 3,
		// 	},
		// 	640: {
		// 		slidesPerView: 2,
		// 		spaceBetween: 34,
		// 	},
		// 	320: {
		// 		slidesPerView: 1,
		// 		slidesPerColumn: 1,
		// 		slidesPerGroup: 1,
		// 	},
		// }
	});

})