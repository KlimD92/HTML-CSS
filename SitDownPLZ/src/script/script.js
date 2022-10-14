window.addEventListener('DOMContentLoaded', function(){

	// Select
	const elementPreUp = document.querySelector('#header__city-selector_pre-up');
	const choicesPreUp = new Choices(elementPreUp, {
		searchEnabled: false,
		itemSelectText: '',
	});

	// Select
	const elementUp = document.querySelector('#header__city-selector_up');
	const choicesUp = new Choices(elementUp, {
		searchEnabled: false,
		itemSelectText: '',
	});

	// Select
	const elementDown = document.querySelector('#header__category-selector');
	const choicesDown = new Choices(elementDown, {
		searchEnabled: false,
		itemSelectText: '',
	});

	// Burger
	let burger = document.querySelector('.header__burger');
	let burgerLine = document.querySelector('.header__burger-line');
	let nav = document.querySelector('.header__nav');

	burger.addEventListener('click', () => {
		burgerLine.classList.toggle('header__burger-line_active');
		nav.classList.toggle('header__nav_active');
	})

	document.querySelectorAll('.header__up-item').forEach(el => {
		el.addEventListener('click', function(){
			burgerLine.classList.remove('header__burger-line_active');
			nav.classList.remove('header__nav_active');
		})
	})
	document.querySelectorAll('.header__down-item').forEach(el => {
		el.addEventListener('click', function(){
			burgerLine.classList.remove('header__burger-line_active');
			nav.classList.remove('header__nav_active');
		})
	})

	// Swiper
	const heroSlider = document.querySelector('.hero__swiper');

	let swiperHero = new Swiper(heroSlider, {
		slidesPerView: 1,
		spaceBetween: 0,
		effect: 'fade',
		autoplay: {
			delay: 2500,
		},
		pagination: {
			el: '.hero__swiper-pagination',
			clickable: true,
		},
		simulateTouch:false,
	});



	const specialSlider = document.querySelector('.special__swiper');

	let swiperSpecial = new Swiper(specialSlider, {
		slidesPerGroup: 3,
		slidesPerView: 3,
		spaceBetween: 32,
		simulateTouch: false,
		navigation: {
			nextEl: '.special__slide-btn-next',
			prevEl: '.special__slide-btn-prev',
		},
		a11y: {
			prevSlideMessage: 'Предыдущий слайд',
			nextSlideMessage: 'Следующий слайд',
		},
		breakpoints: {
			1366: {
				slidesPerView: 'auto'
			},
			1021: {
				slidesPerGroup: 3,
				slidesPerView: 3,
			},
			600: {
				slidesPerGroup: 2,
				slidesPerView: 2,
			},
			320: {
				slidesPerGroup: 1,
				slidesPerView: 1,
			}
		}
	});



	const usefullSlider = document.querySelector('.usefull__swiper');

	let swiperUsefull = new Swiper(usefullSlider, {
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 32,
		simulateTouch: false,
		navigation: {
			nextEl: '.usefull__slide-btn-next',
			prevEl: '.usefull__slide-btn-prev',
		},
		a11y: {
			prevSlideMessage: 'Предыдущий слайд',
			nextSlideMessage: 'Следующий слайд',
		},
		breakpoints: {
			1366: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			1021: {
				slidesPerView: 3,
				slidesPerGroup: 3,
			},
			765: {
				slidesPerView: 2,
				slidesPerGroup: 2,
			},
			320: {
				slidesPerView: 1,
				slidesPerGroup:1,
			}
		}
	});

	// Tooltip
	tippy('.contacts__comment', {
		content: 'Реплицированные с зарубежных источников, исследования формируют глобальную сеть.',
		theme: 'background-?',
		arrow: true,
		maxWidth: 300,
		touch: true,
	});

	// Mask
	var phone = document.getElementById("tel");

	var im = new Inputmask("+7(999) 999-9999");
	im.mask(phone);


	// var name = document.getElementById("name");
	// Inputmask("", {
	// 	positionCaretOnClick: "radixFocus",
	// 	_radixDance: true,
	// 	numericInput: true,
	// 	placeholder: "",
	// }).mask(name);

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
      email: {
        required: true,
        email: true
      },
    },

		colorWrong: '#FF6972',

		messages: {
			name: 'Недопустимый формат',
			tel: 'Недопустимый формат',
			email: 'Недопустимый формат',
		},
  });

	// Btn

	// Load more

	var btnMore = document.querySelector('.high__more');
	var items = document.querySelectorAll('.high__item');

	btnMore.addEventListener('click', () => {
		items.forEach(el => {
			el.classList.add('items-block')
		});
		
	btnMore.classList.add('btn-hide')
	})

})