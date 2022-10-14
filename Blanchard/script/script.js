window.addEventListener('DOMContentLoaded', function(){

	// Header

	const headerBtn = document.querySelectorAll('.header__content');
	const headerDrop = document.querySelectorAll('.header__submenu');

	headerBtn.forEach(el => {
		el.addEventListener('click', (e) => {
			headerDrop.forEach(el => {
				el.classList.remove(('header__submenu_active'))
			})
			e.currentTarget.closest('li').querySelector('.header__submenu').classList.toggle('header__submenu_active');
		});
	});

	document.addEventListener('click', (e) => {
		if (!e.target.classList.contains('header__submenu') && !e.target.classList.contains('header__content'))
		{
			headerDrop.forEach(el => {
				el.classList.remove(('header__submenu_active'))
			})
		}
	});

	const burger = document.querySelector('.header__burger');
	const burgerLine = document.querySelector('.header__burger-line');
	const menu = document.querySelector('.header__nav');
	const body = document.querySelector('body')

	burger.addEventListener('click', function(){
		burgerLine.classList.toggle('header__burger-line_active');
		menu.classList.toggle('header__nav_is-active');
		body.classList.toggle('scroll-off');
	})

	function scrollMenu(event){
		event.preventDefault();

		let href = $(this).attr('href');

		let offset = $(href).offset().top	;

		$('body,html').animate({
			scrollTop: offset,
		}, 700);
	}

	$('.header__nav-link').on('click', scrollMenu);


	const headerMenuLink = document.querySelectorAll('.header__nav-link');
	const headerLogInMobile = document.querySelector('.log-in-mobile');

	headerMenuLink.forEach(el => {
		el.addEventListener('click', function(){
			menu.classList.remove('header__nav_is-active');
			burgerLine.classList.remove('header__burger-line_active');
			body.classList.remove('scroll-off')
		})
	});

	headerLogInMobile.addEventListener('click', function(){
			menu.classList.remove('header__nav_is-active');
			burgerLine.classList.remove('header__burger-line_active');
			body.classList.remove('scroll-off')
	});

	

	const searchFalseBtn = document.querySelector('.header__search-false');
	const searchMobileArea = document.querySelector('.search-mobile');

	searchFalseBtn.addEventListener('click', function(){
		searchFalseBtn.classList.toggle('header__search-false_close');
		searchMobileArea.classList.toggle('search-mobile_show');
	})
	





	// Hero
	// Swiper
	const heroSlider = document.querySelector('.hero__swiper');
	

	let swiperHero = new Swiper(heroSlider, {
		slidesPerView: 1,
		spaceBetween: 0,
		effect: 'fade',
		autoplay: {
			delay: 2500,
		},
		simulateTouch:false,
	});

	





	// Gallery
	// Select
	const element = document.querySelector('#gallery__selector');
	const choices = new Choices(element, {
		searchEnabled: false,
		itemSelectText: '',
	});

	// Swiper
	const gallerySlider = document.querySelector('.gallery__swiper');

	let swiperGallery = new Swiper(gallerySlider, {
		slidesPerView: 3,
		slidesPerColumn: 2,
		autoHeight: false,
		slidesPerGroup: 3,
		spaceBetween: 50,
		// loop: true,
		simulateTouch: false,
		navigation: {
			nextEl: '.gallery__btn-next',
			prevEl: '.gallery__btn-prev',
		},
		pagination: {
			el: '.gallery__swiper-pagination',
			type: 'fraction',
		},
		a11y: {
			prevSlideMessage: 'Предыдущий слайд',
			nextSlideMessage: 'Следующий слайд',
		},
		breakpoints: {
			1401: {
				slidesPerView: 3,
			},
			640: {
				slidesPerView: 2,
				spaceBetween: 34,
			},
			320: {
				slidesPerView: 1,
				slidesPerColumn: 1,
				slidesPerGroup: 1,
			},
		}
	});

	// Popup

	const popup = document.querySelector('.gallery__popup-container');
	const popupBtn = document.querySelectorAll('.gallery__slide-link');
	const gBody = document.querySelector('body');
	const gBtn = document.querySelector('.gallery__btn');

	popupBtn.forEach(function(e) {
		e.addEventListener('click', function(e){
			const gPath = e.currentTarget.dataset.path
			document.querySelector(`[data-target="${gPath}"]`).classList.add('gallery__popup-container_active');
			gBody.classList.add('scroll-off');
		})
	});

	gBtn.addEventListener('click', function() {
		popup.classList.remove('gallery__popup-container_active');
		gBody.classList.remove('scroll-off');
	})
	
	window.onclick = (e) => {
    if (e.target == popup) {
			popup.classList.remove('gallery__popup-container_active');
			gBody.classList.remove('scroll-off');
    }        
	}

	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape') {
			popup.classList.remove('gallery__popup-container_active');
			gBody.classList.remove('scroll-off');
		}
	});




	// Catalog
	// Accordion

	$( function() {
		$("#accordion-ru").accordion({
			active: 0,
			collapsible: true,
			heightStyle: "content",
			animate: 200,
			header: ".catalog__accordion-item",
		});
	} );

	window.onresize = function( event ) {
		$('#accordion-ru').accordion("refresh");
	};

	$( function() {
		$("#accordion-ital").accordion({
			active: 0,
			collapsible: true,
			heightStyle: "content",
			animate: 200,
			header: ".catalog__accordion-item",
		});
	} );

	window.onresize = function( event ) {
		$('#accordion-ital').accordion("refresh");
	};

	$('.catalog__empty-link').on('click', scrollMenu);

	// Tabs

	document.querySelectorAll('.catalog__tab-btn').forEach(function(catalogTabs) {
		catalogTabs.addEventListener('click', function(event) {
			const path = event.currentTarget.dataset.path
			document.querySelectorAll('.catalog__down').forEach(function(tabContent) {
				tabContent.classList.remove('catalog__down_active')
			});
			document.querySelector(`[data-target="${path}"]`).classList.add('catalog__down_active');
			document.querySelectorAll('.catalog__tab-btn').forEach(function(tabLanguage) {
				tabLanguage.classList.remove('catalog__tab-btn_active')
			});
			document.querySelector(`[data-path="${path}"]`).classList.add('catalog__tab-btn_active')
		});
	});

	document.querySelectorAll('.catalog__name-btn_ital').forEach(function(catalogLinks) {
		catalogLinks.addEventListener('click', function(event) {
			const path = event.currentTarget.dataset.path
			document.querySelectorAll('.catalog__down-left_ital').forEach(function(nameContent) {
				nameContent.classList.remove('catalog__down-left_active')
			});
			document.querySelectorAll(`[data-target="${path}"]`).forEach(function(evev) {
				evev.classList.add('catalog__down-left_active')
			});
			document.querySelectorAll('.catalog__name-btn_ital').forEach(function(nameActive) {
				nameActive.classList.remove('catalog__name-btn_active')
			});
			document.querySelectorAll(`[data-path="${path}"]`).forEach(function(veve) {
				veve.classList.add('catalog__name-btn_active')
			});
		});
	});

	document.querySelectorAll('.catalog__name-btn_rus').forEach(function(catalogLinks) {
		catalogLinks.addEventListener('click', function(event) {
			const path = event.currentTarget.dataset.path
			document.querySelectorAll('.catalog__down-left_rus').forEach(function(nameContent) {
				nameContent.classList.remove('catalog__down-left_active')
			});
			document.querySelectorAll(`[data-target="${path}"]`).forEach(function(evev) {
				evev.classList.add('catalog__down-left_active')
			});
			document.querySelectorAll('.catalog__name-btn_rus').forEach(function(nameActive) {
				nameActive.classList.remove('catalog__name-btn_active')
			});
			document.querySelectorAll(`[data-path="${path}"]`).forEach(function(veve) {
				veve.classList.add('catalog__name-btn_active')
			});
		});
	});

	// Tabs with scroll

	var catalogTabBtn = document.querySelectorAll('.catalog__name-btn');
	var catalogDown = document.querySelectorAll('.catalog__down-left');
	
	catalogTabBtn.forEach(function(e) {
		e.addEventListener('click', function() {
			if(window.innerWidth <= 1000 ) {
				catalogDown.forEach(function(e) {
					e.scrollIntoView({block: "start", behavior: "smooth"});
				});
			};
		});		
	});





	// Event
	// Load more
	document.querySelector('.event__button').addEventListener('click', function(event) {
		document.querySelector('.event__swiper').classList.add('event__swiper-full');
		document.querySelector('.event__button').classList.add('event__button-hide')
	});

	// Swiper

const slider = document.querySelector('.event__swiper');

let mySwiperr;

function mobileSliderEvent() {
	if (window.innerWidth <= 640 && slider.dataset.mobile == 'false') {
		mySwiperr = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			slideClass: 'event__item',
			pagination: {
				el: '.event__swiper-pagination',
				clickable: true,
			},
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 640) {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiperr.destroy();
		}
	}
}

mobileSliderEvent()

window.addEventListener('resize', () => {
	mobileSliderEvent();
});






	// Editions
	// Mask
	var cost = document.getElementsByClassName("edition__cost-input")
	Inputmask("( 999){+|1}", {
		positionCaretOnClick: "radixFocus",
		radixPoint: ",",
		_radixDance: true,
		numericInput: true,
		placeholder: "",
		// definitions: {
		// 		"0": {
		// 				validator: "[0-9\uFF11-\uFF19]"
		// 		}
		// }
	}).mask(cost);

	// Swiper

	const editionsSlider = document.querySelector('.editions__swiper');

	let swiperEditions;
	
	function mobileSliderEditions() {
		if (window.innerWidth >= 640 && editionsSlider.dataset.mobile == 'false') {
			swiperEditions = new Swiper(editionsSlider, {
				slidesPerView: 3,
				// autoHeight: false,
				slidesPerGroup: 3,
				spaceBetween: 50,
				// loop: true,
				simulateTouch: false,
				navigation: {
					nextEl: '.editions__btn-next',
					prevEl: '.editions__btn-prev',
				},
				pagination: {
					el: '.editions__swiper-pagination',
					type: 'fraction',
				},
				a11y: {
					prevSlideMessage: 'Предыдущий слайд',
					nextSlideMessage: 'Следующий слайд',
				},
				breakpoints: {
					1250: {
						slidesPerView: 3,
					},
					// 768: {
					// 	slidesPerView: 2,
					// },
					769: {
						slidesPerView: 2,
						slidesPerGroup: 2,
						spaceBetween: 50,
					},
					500: {
						slidesPerView: 2,
						slidesPerGroup: 2,
						spaceBetween: 34,
					},
					320: {
						slidesPerView: 1,
					},
				}
			});
	
			editionsSlider.dataset.mobile = 'true';
		}

		if (window.innerWidth < 640) {
			editionsSlider.dataset.mobile = 'false';
			if (editionsSlider.classList.contains('swiper-container-initialized')) {
				swiperEditions.destroy();
			}
		}
	}

	mobileSliderEditions()

	window.addEventListener('resize', () => {
		mobileSliderEditions();
	});

	// Select

	const editionsBtn = document.querySelector('.editions__categories-title');
	const editionsBlocks = document.querySelectorAll('.editions__choose-item');

	editionsBtn.addEventListener('click', () => {
		if (!editionsBtn.classList.contains('editions__categories-title_active')) {
			editionsBlocks.forEach(el => {
				el.classList.add('editions__choose-item_active');
			});

			editionsBtn.classList.add('editions__categories-title_active');
		} else {
			editionsBlocks.forEach(el => {
				el.classList.remove('editions__choose-item_active');
				if (el.querySelector('.editions__input-check').checked) {
					el.classList.add('editions__choose-item_active');
				} else {
					el.classList.remove('editions__choose-item_active');
				}
			});

			editionsBtn.classList.remove('editions__categories-title_active');
		}
	});

	// Checkbox Mobile







	// Projects

	tippy('.projects__i-1', {
		content: 'Пример современных тенденций - современная методология разработки',
		theme: 'background-i',
		arrow: true,
		maxWidth: 300,
		touch: true,
	});
	tippy('.projects__i-2', {
		content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
		theme: 'background-i',
		arrow: true,
		maxWidth: 300,
		touch: true,
	});
	tippy('.projects__i-3', {
		content: 'В стремлении повысить качество',
		theme: 'background-i',
		arrow: true,
		maxWidth: 300,
		touch: true,
	});

	// Swiper

	const projectsSlider = document.querySelector('.projects__swiper');

	let projectsEditions = new Swiper(projectsSlider, {
		slidesPerView: 3,
		// autoHeight: false,
		slidesPerGroup: 3,
		spaceBetween: 50,
		// loop: true,
		simulateTouch: false,
		navigation: {
			nextEl: '.projects__btn-next',
			prevEl: '.projects__btn-prev',
		},
		a11y: {
			prevSlideMessage: 'Предыдущий слайд',
			nextSlideMessage: 'Следующий слайд',
		},
		breakpoints: {
			1400: {
				slidesPerView: 3,
			},
			769: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 50,
			},
			610: {
				slidesPerView: 2,
				slidesPerGroup: 2,
				spaceBetween: 34,
			},
			320: {
				slidesPerView: 1,
				slidesPerGroup: 1,
			},
		}
	});






	// Contacts
	// Mask

	var phone = document.getElementById("phone");

	var im = new Inputmask("+7(999) 999-9999");
	im.mask(phone);

	// Map
	
	ymaps.ready(init);
	function init(){
			var myMapMobile = new ymaps.Map("yMap-mobile", {
					center: [55.75722818347051,37.60395867184465],
					zoom: 15,
					// controls: [],
			});
			
			var myPlacemarkMobile = new ymaps.Placemark([55.7578452791743,37.600464773419965], {}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/contacts/Ellipse.png',
				iconImageSize: [20, 20],
				iconImageOffset: [-10, -10]
			});

			myMapMobile.geoObjects.add(myPlacemarkMobile);
			myMapMobile.controls.remove('searchControl');

			var myMap = new ymaps.Map("yMap", {
				center: [55.75720398344595,37.60640484646626],
				zoom: 15,
				// controls: [],
			});
		
			var myPlacemark = new ymaps.Placemark([55.7578452791743,37.600464773419965], {}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/contacts/Ellipse.png',
				iconImageSize: [20, 20],
				iconImageOffset: [-10, -10]
			});

			myMap.geoObjects.add(myPlacemark);
			myMap.controls.remove('searchControl');
	}


	// Validate

	new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
				minLength: 2,
				maxLength: 15,
      },
      tel: {
        required: true,
				function: (name, value) => {
					const tele = phone.inputmask.unmaskedvalue()
					return Number(tele) && tele.length === 10
				}
      },
    },

		colorWrong: '#FF5C00',

		messages: {
			name: 'Как вас зовут?',
			tel: 'Укажите ваш телефон',
		},
  });


})