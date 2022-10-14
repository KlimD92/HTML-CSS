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

	if (heroSlider) {
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
	}



	const specialSlider = document.querySelector('.special__swiper');

	if (specialSlider) {
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
	}



	const usefullSlider = document.querySelector('.usefull__swiper');

	if (specialSlider) {
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
	}

	// Tooltip
	let contactsComment = document.querySelector('.contacts__comment')
	if (contactsComment) {
		tippy('.contacts__comment', {
			content: 'Реплицированные с зарубежных источников, исследования формируют глобальную сеть.',
			theme: 'background-?',
			arrow: true,
			maxWidth: 300,
			touch: true,
		});
	}

	// Mask
	var phoneMain = document.getElementById("telMain");

	if (phoneMain) {
		var im = new Inputmask("+7(999) 999-9999");
		im.mask(phoneMain);
	}

	

	// Validate
	let contactsForm = document.querySelector('.contacts__form');

	if (contactsForm) {
		new JustValidate('.contacts__form', {
			rules: {
				name: {
					required: true,
					minLength: 2,
					maxLength: 40,
				},
				tel: {
					required: true,
					function: (name, value) => {
						const tele = phoneMain.inputmask.unmaskedvalue()
						return Number(tele) && tele.length === 10
					}
				},
				email: {
					required: true,
					email: true
				},
				checkbox: {
					required: true,
				},
			},

			colorWrong: '#FF6972',

			messages: {
				name: 'Недопустимый формат',
				tel: 'Недопустимый формат',
				email: 'Недопустимый формат',
				checkbox: 'Нужно поставить галочку',
			},
			submitHandler: function(thisForm) {
				let formData = new FormData(thisForm);

				let xhr = new XMLHttpRequest();

				xhr.onreadystatechange = function() {
					if (xhr.readyState === 4) {
						if (xhr.status === 200) {
							console.log('Отправлено');
							let popupContainerBuy = document.querySelector('.card__popup-container-buy');
							let html = document.querySelector('html');
							if (popupContainerBuy) {
								popupContainerBuy.classList.remove('card__popup-container-buy-is-active');
							}
							document.querySelector('.popup-container-successful-sending').classList.add('popup-container-successful-sending-is-active');
							html.classList.add('scroll-off');
						}
					}
				}

				xhr.open('POST', 'mail.php', true);
				xhr.send(formData);

				thisForm.reset();
			},
		});
	}

	let popupContainerSuccess = document.querySelector('.popup-container-successful-sending');
	let popupCloseBtn = document.querySelectorAll('.popup-close-btn');
	let html = document.querySelector('html');

	popupCloseBtn.forEach(e => {
		e.addEventListener('click', ()=> {
			popupContainerSuccess.classList.remove('popup-container-successful-sending-is-active');
			html.classList.remove('scroll-off');
		})
	})
	window.onclick = (e) => {
    if (e.target === popupContainerSuccess) {
			popupContainerSuccess.classList.remove('popup-container-successful-sending-is-active');
			html.classList.remove('scroll-off');
    }        
	}
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape') {
			popupContainerSuccess.classList.remove('popup-container-successful-sending-is-active');
			html.classList.remove('scroll-off');
		}
	});

	// Btn

	// Load more

	var btnMore = document.querySelector('.high__more');
	var items = document.querySelectorAll('.high__cards-item');

	if (btnMore) {
		btnMore.addEventListener('click', () => {
			items.forEach(el => {
				el.classList.add('high__cards-item_active')
			});
			
		btnMore.classList.add('btn-hide')
		})
	}

})