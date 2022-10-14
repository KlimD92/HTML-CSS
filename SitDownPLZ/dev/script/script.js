window.addEventListener('DOMContentLoaded', function () {
	
	//Swiper
	let cardSwiper = document.querySelector('.card__swiper-main');
	let cardSwiperNav = document.querySelector('.card__swiper-nav');

	if(cardSwiper || cardSwiperNav) {
		let cardSliderNav = new Swiper(cardSwiperNav, {
			slidesPerView: 'auto',
			freeMode: true,
			direction: 'horizontal',
			breakpoints: {
				1021: {
					spaceBetween: 38,
					direction: 'horizontal',
				},
				766: {
					spaceBetween: 18,
					direction: 'vertical',
				},
				320: {
					spaceBetween: 38,
					direction: 'horizontal',
				},
			}
		});

		let cardSlider = new Swiper(cardSwiper, {
			spaceBetween: 38,
			thumbs: {
				swiper: cardSliderNav,
			},
			breakpoints: {
				1021: {
					spaceBetween: 38,
				},
				766: {
					spaceBetween: 0,
				}
			}
		});
	}

	let similarSwiper = document.querySelector('.similar__swiper');

	if(similarSwiper) {
		let similarSlider = new Swiper(similarSwiper, {
			slidesPerView: 4,
			slidesPerGroup: 1,
			spaceBetween: 30,
			simulateTouch: false,
			navigation: {
				nextEl: '.similar__slide-btn-next',
				prevEl: '.similar__slide-btn-prev',
			},
			a11y: {
				prevSlideMessage: 'Предыдущий слайд',
				nextSlideMessage: 'Следующий слайд',
			},
			breakpoints: {
				1366: {
					slidesPerView: 4,
					// slidesPerGroup: 4,
				},
				1021: {
					slidesPerView: 3,
					slidesPerGroup: 1,
				},
				766: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: 30,
				},
				320: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: 16,
				}
			}
		})
	}


	// Popup
	let cardSwiperPopup = document.querySelector('.card__swiper-main-popup');
	let cardSwiperNavPopup = document.querySelector('.card__swiper-nav-popup');

	if(cardSwiperPopup || cardSwiperNavPopup){
		let cardSliderNavPopup = new Swiper(cardSwiperNavPopup, {
			spaceBetween: 78,
			navigation: {
				nextEl: '.card__popup-slide-btn-next',
				prevEl: '.card__popup-slide-btn-prev',
			},
			a11y: {
				prevSlideMessage: 'Предыдущий слайд',
				nextSlideMessage: 'Следующий слайд',
			},
			breakpoints: {
				1367: {
					slidesPerView: 4,
					spaceBetween: 78,
				},
				1021: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				766: {
					slidesPerView: 2,
					slidesPerGroup: 1,
				},
				320: {
					slidesPerView: 1,
					spaceBetween: 38,
				},
			}
		});

		let cardSliderPopup = new Swiper(cardSwiperPopup, {
			spaceBetween: 38,
			thumbs: {
				swiper: cardSliderNavPopup,
			},
			breakpoints: {
				1021: {
					spaceBetween: 38,
				},
				766: {
					spaceBetween: 0,
				}
			}
		});
	}

	let popupContainerSlide = document.querySelector('.card__popup-container-slide');
	let popupContainerBuy = document.querySelector('.card__popup-container-buy');
	let popupContainerSuccess = document.querySelector('.popup-container-successful-sending');
	let slideMain = document.querySelector('.card__swiper-main');
	let buyBtn = document.querySelectorAll('.card__btn-buy');
	let popupCloseBtn = document.querySelectorAll('.popup-close-btn');
	let html = document.querySelector('html');


	if (slideMain) {
		slideMain.addEventListener('click', () => {
			popupContainerSlide.classList.add('card__popup-container-slide-is-active');
			html.classList.add('scroll-off');
		})
	}
	buyBtn.forEach(e => {
		e.addEventListener('click', () => {
			popupContainerBuy.classList.add('card__popup-container-buy-is-active');
			html.classList.add('scroll-off');
		})
	})
	popupCloseBtn.forEach(e => {
		e.addEventListener('click', ()=> {
			popupContainerSlide.classList.remove('card__popup-container-slide-is-active');
			popupContainerBuy.classList.remove('card__popup-container-buy-is-active');
			popupContainerSuccess.classList.remove('popup-container-successful-sending-is-active');
			html.classList.remove('scroll-off');
		})
	})
	window.addEventListener('click', (e) => {
    if (e.target == popupContainerSlide || e.target == popupContainerBuy) {
			popupContainerSlide.classList.remove('card__popup-container-slide-is-active');
			popupContainerBuy.classList.remove('card__popup-container-buy-is-active');
			html.classList.remove('scroll-off');
    }        
	})
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Escape') {
			popupContainerSlide.classList.remove('card__popup-container-slide-is-active');
			popupContainerBuy.classList.remove('card__popup-container-buy-is-active');
			popupContainerSuccess.classList.remove('popup-container-successful-sending-is-active');
			html.classList.remove('scroll-off');
		}
	});

	// Mask

	var phoneCard = document.getElementById("telCard");

	if (phoneCard) {
		var im = new Inputmask("+7(999) 999-9999");
		im.mask(phoneCard);
	}

	// Validate

	
	let cardPopupForm = document.querySelector('.card__popup-form');

	if (cardPopupForm) {
		new JustValidate('.card__popup-form', {
			rules: {
				name: {
					required: true,
					minLength: 2,
					maxLength: 40,
				},
				tel: {
					required: true,
					function: (name, value) => {
						const tele = phoneCard.inputmask.unmaskedvalue()
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

				xhr.open('POST', '../mail.php', true);
				xhr.send(formData);

				thisForm.reset();
			},
		});
	}

	



})
window.addEventListener('DOMContentLoaded', function(){
// Swiper

const catalogSlider = document.querySelector('.catalog__swiper');

	if(catalogSlider) {
		var swiperCatalog = new Swiper('.catalog__swiper', {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 32,
			simulateTouch: false,
			pagination: {
				el: ".catalog__pagination",
				clickable: true,
				renderBullet: function (index, className) {
					return '<span class="' + className + '">' + (index + 1) + "</span>";
				},
			},
			keyboard: true,
			breakpoints: {
				1023: {
					slidesPerView: 3,
				},
				640: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: 32,
				},
				0: {
					slidesPerView: 2,
					slidesPerGroup: 2,
					spaceBetween: 16,
				},
			}
		});
	}

	// Range-slider

	var rangeSlider = document.getElementById('range-slider');

	if(rangeSlider) {
		noUiSlider.create(rangeSlider, {
			start: [2000, 150000],
			connect: true,
			step: 1000,
			range: {
					'min': 0,
					'max': 200000
			}
		});

		const inputFrom = document.getElementById('input-from');
		const inputTo = document.getElementById('input-to');
		const inputs = [inputFrom, inputTo];

		rangeSlider.noUiSlider.on('update', function(values, handle){
			inputs[handle].value = Math.round(values[handle])
		});

		const setRangeSlider = (i, value) => {
			let arr = [null, null];
			arr[i] = value;

			rangeSlider.noUiSlider.set(arr)
		}

		inputs.forEach((el, index) => {
			el.addEventListener('change', (e) => {
				setRangeSlider(index, e.currentTarget.value)
			})
		});
	}


	// Btn More

	const btnOpen = document.querySelectorAll('.sidebar__minititle');
	const btnMore = document.querySelectorAll('.sidebar__btn-more');
	const sidebarList = document.querySelectorAll('.sidebar__list-area');

	if(btnOpen) {
		btnOpen.forEach(el => {
			el.addEventListener('click', (e) => {
				e.currentTarget.closest('div').querySelector('.sidebar__list-area').classList.toggle('sidebar__list-area_active')
				el.classList.toggle('sidebar__minititle_active')
			})
		})
	}

	if (btnMore) {
		btnMore.forEach(el => {
			el.addEventListener('click', (e) => {
				e.currentTarget.closest('div').querySelector('.sidebar__list').classList.add('sidebar__list_open');
				el.classList.add('sidebar__btn-more_delete')
			})
		})
	}



	
	

})
window.addEventListener('DOMContentLoaded', function () {

	let contactsMap = document.querySelector('.contacts-page__map');
	if (contactsMap) {
		ymaps.ready(init);
			function init(){

					var myMap = new ymaps.Map("yMap", {
						center: [55.756067659512534,37.6382583604099],
						zoom: 14,
					});
				
					var myPlacemark1 = new ymaps.Placemark([55.75189715069446,37.64240747692601], {
						balloonContentHeader: '<h2 class="balloon__title">SitDownPls на Солянке </h2>' +
								'<span class="balloon__address">м. Китай-город, ул. Солянка, д.24</span>' + 
								'<a class="header__tel" href="tel:+74958854547">+7 (495) 885-45-47</a>',
						balloonContentBody:	'<div class="balloon__time"><span class="balloon__grey-text">Часы работы:</span><span class="balloon__simple-text"> с 10:00 до 21:00</span></div>',
						balloonContentFooter: '<div class="balloon__what"><span class="balloon__grey-text">Что здесь:</span><span class="balloon__simple-text"> шоурум, пункт отгрузки, пункт выдачи, пункт обмена-возврата, сервисный центр</span></div>',
						hintContent: 'SitDownPls на Солянке',
					}, {
						
						iconLayout: 'default#image',
						iconImageHref: '../img/svg/sprite.svg#elephant-orange',
						iconImageSize: [32, 22],
						iconImageOffset: [-10, -10]
					});
					var myPlacemark2 = new ymaps.Placemark([55.76331664149406,37.654850028277714], {
						balloonContentHeader: '<h2 class="balloon__title">SitDownPls на Покровке </h2>' +
								'<span class="balloon__address">м. Курская, ул. Петровка, д.48</span></br>' + 
								'<a class="header__tel" href="tel:+74958854547">+7 (495) 885-45-47</a>',
						balloonContentBody:	'<div class="balloon__time"><span class="balloon__grey-text">Часы работы:</span><span class="balloon__simple-text"> с 10:00 до 21:00</span></div>',
						balloonContentFooter: '<span class="balloon__grey-text">Что здесь:</span><span class="balloon__simple-text"> шоурум, пункт отгрузки, пункт</br> выдачи, пункт обмена-возврата,</br> сервисный центр</span>',
						hintContent: 'SitDownPls на Солянке',
					}, {
						iconLayout: 'default#image',
						iconImageHref: '../img/svg/sprite.svg#elephant-orange',
						iconImageSize: [32, 22],
						iconImageOffset: [-10, -10]
					});

					myMap.geoObjects.add(myPlacemark1);
					myPlacemark1.balloon.open();
					myMap.geoObjects.add(myPlacemark2);
					myMap.controls.remove('searchControl');
					myMap.controls.remove('geolocationControl');
					myMap.controls.remove('routeButtonControl');
					myMap.controls.remove('trafficControl');
					myMap.controls.remove('typeSelector');
					myMap.controls.remove('fullscreenControl');
					myMap.controls.remove('zoomControl');
					myMap.controls.remove('rulerControl');
			}
	}

})
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmRzLmpzIiwiY2F0YWxvZy5qcyIsImNvbnRhY3RzLmpzIiwic2NyaXB0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN4R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XHJcblx0XHJcblx0Ly9Td2lwZXJcclxuXHRsZXQgY2FyZFN3aXBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19zd2lwZXItbWFpbicpO1xyXG5cdGxldCBjYXJkU3dpcGVyTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX3N3aXBlci1uYXYnKTtcclxuXHJcblx0aWYoY2FyZFN3aXBlciB8fCBjYXJkU3dpcGVyTmF2KSB7XHJcblx0XHRsZXQgY2FyZFNsaWRlck5hdiA9IG5ldyBTd2lwZXIoY2FyZFN3aXBlck5hdiwge1xyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bycsXHJcblx0XHRcdGZyZWVNb2RlOiB0cnVlLFxyXG5cdFx0XHRkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQxMDIxOiB7XHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDM4LFxyXG5cdFx0XHRcdFx0ZGlyZWN0aW9uOiAnaG9yaXpvbnRhbCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3NjY6IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMTgsXHJcblx0XHRcdFx0XHRkaXJlY3Rpb246ICd2ZXJ0aWNhbCcsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQzMjA6IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMzgsXHJcblx0XHRcdFx0XHRkaXJlY3Rpb246ICdob3Jpem9udGFsJyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHJcblx0XHRsZXQgY2FyZFNsaWRlciA9IG5ldyBTd2lwZXIoY2FyZFN3aXBlciwge1xyXG5cdFx0XHRzcGFjZUJldHdlZW46IDM4LFxyXG5cdFx0XHR0aHVtYnM6IHtcclxuXHRcdFx0XHRzd2lwZXI6IGNhcmRTbGlkZXJOYXYsXHJcblx0XHRcdH0sXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0MTAyMToge1xyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAzOCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDc2Njoge1xyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAwLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRsZXQgc2ltaWxhclN3aXBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW1pbGFyX19zd2lwZXInKTtcclxuXHJcblx0aWYoc2ltaWxhclN3aXBlcikge1xyXG5cdFx0bGV0IHNpbWlsYXJTbGlkZXIgPSBuZXcgU3dpcGVyKHNpbWlsYXJTd2lwZXIsIHtcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRcdFx0c2xpZGVzUGVyR3JvdXA6IDEsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMzAsXHJcblx0XHRcdHNpbXVsYXRlVG91Y2g6IGZhbHNlLFxyXG5cdFx0XHRuYXZpZ2F0aW9uOiB7XHJcblx0XHRcdFx0bmV4dEVsOiAnLnNpbWlsYXJfX3NsaWRlLWJ0bi1uZXh0JyxcclxuXHRcdFx0XHRwcmV2RWw6ICcuc2ltaWxhcl9fc2xpZGUtYnRuLXByZXYnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRhMTF5OiB7XHJcblx0XHRcdFx0cHJldlNsaWRlTWVzc2FnZTogJ9Cf0YDQtdC00YvQtNGD0YnQuNC5INGB0LvQsNC50LQnLFxyXG5cdFx0XHRcdG5leHRTbGlkZU1lc3NhZ2U6ICfQodC70LXQtNGD0Y7RidC40Lkg0YHQu9Cw0LnQtCcsXHJcblx0XHRcdH0sXHJcblx0XHRcdGJyZWFrcG9pbnRzOiB7XHJcblx0XHRcdFx0MTM2Njoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogNCxcclxuXHRcdFx0XHRcdC8vIHNsaWRlc1Blckdyb3VwOiA0LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTAyMToge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0XHRcdHNsaWRlc1Blckdyb3VwOiAxLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0NzY2OiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6IDIsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MzIwOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6IDIsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDE2LFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cclxuXHQvLyBQb3B1cFxyXG5cdGxldCBjYXJkU3dpcGVyUG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fc3dpcGVyLW1haW4tcG9wdXAnKTtcclxuXHRsZXQgY2FyZFN3aXBlck5hdlBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX3N3aXBlci1uYXYtcG9wdXAnKTtcclxuXHJcblx0aWYoY2FyZFN3aXBlclBvcHVwIHx8IGNhcmRTd2lwZXJOYXZQb3B1cCl7XHJcblx0XHRsZXQgY2FyZFNsaWRlck5hdlBvcHVwID0gbmV3IFN3aXBlcihjYXJkU3dpcGVyTmF2UG9wdXAsIHtcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiA3OCxcclxuXHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdG5leHRFbDogJy5jYXJkX19wb3B1cC1zbGlkZS1idG4tbmV4dCcsXHJcblx0XHRcdFx0cHJldkVsOiAnLmNhcmRfX3BvcHVwLXNsaWRlLWJ0bi1wcmV2JyxcclxuXHRcdFx0fSxcclxuXHRcdFx0YTExeToge1xyXG5cdFx0XHRcdHByZXZTbGlkZU1lc3NhZ2U6ICfQn9GA0LXQtNGL0LTRg9GJ0LjQuSDRgdC70LDQudC0JyxcclxuXHRcdFx0XHRuZXh0U2xpZGVNZXNzYWdlOiAn0KHQu9C10LTRg9GO0YnQuNC5INGB0LvQsNC50LQnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDEzNjc6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDQsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDc4LFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MTAyMToge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMjAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3NjY6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDMyMDoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMSxcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMzgsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bGV0IGNhcmRTbGlkZXJQb3B1cCA9IG5ldyBTd2lwZXIoY2FyZFN3aXBlclBvcHVwLCB7XHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMzgsXHJcblx0XHRcdHRodW1iczoge1xyXG5cdFx0XHRcdHN3aXBlcjogY2FyZFNsaWRlck5hdlBvcHVwLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDEwMjE6IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMzgsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQ3NjY6IHtcclxuXHRcdFx0XHRcdHNwYWNlQmV0d2VlbjogMCxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bGV0IHBvcHVwQ29udGFpbmVyU2xpZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZF9fcG9wdXAtY29udGFpbmVyLXNsaWRlJyk7XHJcblx0bGV0IHBvcHVwQ29udGFpbmVyQnV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX3BvcHVwLWNvbnRhaW5lci1idXknKTtcclxuXHRsZXQgcG9wdXBDb250YWluZXJTdWNjZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwLWNvbnRhaW5lci1zdWNjZXNzZnVsLXNlbmRpbmcnKTtcclxuXHRsZXQgc2xpZGVNYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX3N3aXBlci1tYWluJyk7XHJcblx0bGV0IGJ1eUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX19idG4tYnV5Jyk7XHJcblx0bGV0IHBvcHVwQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXAtY2xvc2UtYnRuJyk7XHJcblx0bGV0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XHJcblxyXG5cclxuXHRpZiAoc2xpZGVNYWluKSB7XHJcblx0XHRzbGlkZU1haW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRcdHBvcHVwQ29udGFpbmVyU2xpZGUuY2xhc3NMaXN0LmFkZCgnY2FyZF9fcG9wdXAtY29udGFpbmVyLXNsaWRlLWlzLWFjdGl2ZScpO1xyXG5cdFx0XHRodG1sLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1vZmYnKTtcclxuXHRcdH0pXHJcblx0fVxyXG5cdGJ1eUJ0bi5mb3JFYWNoKGUgPT4ge1xyXG5cdFx0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0cG9wdXBDb250YWluZXJCdXkuY2xhc3NMaXN0LmFkZCgnY2FyZF9fcG9wdXAtY29udGFpbmVyLWJ1eS1pcy1hY3RpdmUnKTtcclxuXHRcdFx0aHRtbC5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtb2ZmJyk7XHJcblx0XHR9KVxyXG5cdH0pXHJcblx0cG9wdXBDbG9zZUJ0bi5mb3JFYWNoKGUgPT4ge1xyXG5cdFx0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT4ge1xyXG5cdFx0XHRwb3B1cENvbnRhaW5lclNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcmRfX3BvcHVwLWNvbnRhaW5lci1zbGlkZS1pcy1hY3RpdmUnKTtcclxuXHRcdFx0cG9wdXBDb250YWluZXJCdXkuY2xhc3NMaXN0LnJlbW92ZSgnY2FyZF9fcG9wdXAtY29udGFpbmVyLWJ1eS1pcy1hY3RpdmUnKTtcclxuXHRcdFx0cG9wdXBDb250YWluZXJTdWNjZXNzLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwLWNvbnRhaW5lci1zdWNjZXNzZnVsLXNlbmRpbmctaXMtYWN0aXZlJyk7XHJcblx0XHRcdGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLW9mZicpO1xyXG5cdFx0fSlcclxuXHR9KVxyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQgPT0gcG9wdXBDb250YWluZXJTbGlkZSB8fCBlLnRhcmdldCA9PSBwb3B1cENvbnRhaW5lckJ1eSkge1xyXG5cdFx0XHRwb3B1cENvbnRhaW5lclNsaWRlLmNsYXNzTGlzdC5yZW1vdmUoJ2NhcmRfX3BvcHVwLWNvbnRhaW5lci1zbGlkZS1pcy1hY3RpdmUnKTtcclxuXHRcdFx0cG9wdXBDb250YWluZXJCdXkuY2xhc3NMaXN0LnJlbW92ZSgnY2FyZF9fcG9wdXAtY29udGFpbmVyLWJ1eS1pcy1hY3RpdmUnKTtcclxuXHRcdFx0aHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtb2ZmJyk7XHJcbiAgICB9ICAgICAgICBcclxuXHR9KVxyXG5cdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XHJcblx0XHRcdHBvcHVwQ29udGFpbmVyU2xpZGUuY2xhc3NMaXN0LnJlbW92ZSgnY2FyZF9fcG9wdXAtY29udGFpbmVyLXNsaWRlLWlzLWFjdGl2ZScpO1xyXG5cdFx0XHRwb3B1cENvbnRhaW5lckJ1eS5jbGFzc0xpc3QucmVtb3ZlKCdjYXJkX19wb3B1cC1jb250YWluZXItYnV5LWlzLWFjdGl2ZScpO1xyXG5cdFx0XHRwb3B1cENvbnRhaW5lclN1Y2Nlc3MuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAtY29udGFpbmVyLXN1Y2Nlc3NmdWwtc2VuZGluZy1pcy1hY3RpdmUnKTtcclxuXHRcdFx0aHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtb2ZmJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdC8vIE1hc2tcclxuXHJcblx0dmFyIHBob25lQ2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVsQ2FyZFwiKTtcclxuXHJcblx0aWYgKHBob25lQ2FyZCkge1xyXG5cdFx0dmFyIGltID0gbmV3IElucHV0bWFzayhcIis3KDk5OSkgOTk5LTk5OTlcIik7XHJcblx0XHRpbS5tYXNrKHBob25lQ2FyZCk7XHJcblx0fVxyXG5cclxuXHQvLyBWYWxpZGF0ZVxyXG5cclxuXHRcclxuXHRsZXQgY2FyZFBvcHVwRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19wb3B1cC1mb3JtJyk7XHJcblxyXG5cdGlmIChjYXJkUG9wdXBGb3JtKSB7XHJcblx0XHRuZXcgSnVzdFZhbGlkYXRlKCcuY2FyZF9fcG9wdXAtZm9ybScsIHtcclxuXHRcdFx0cnVsZXM6IHtcclxuXHRcdFx0XHRuYW1lOiB7XHJcblx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdG1pbkxlbmd0aDogMixcclxuXHRcdFx0XHRcdG1heExlbmd0aDogNDAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHR0ZWw6IHtcclxuXHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0ZnVuY3Rpb246IChuYW1lLCB2YWx1ZSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRjb25zdCB0ZWxlID0gcGhvbmVDYXJkLmlucHV0bWFzay51bm1hc2tlZHZhbHVlKClcclxuXHRcdFx0XHRcdFx0cmV0dXJuIE51bWJlcih0ZWxlKSAmJiB0ZWxlLmxlbmd0aCA9PT0gMTBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGVtYWlsOiB7XHJcblx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdGVtYWlsOiB0cnVlXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRjaGVja2JveDoge1xyXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdGNvbG9yV3Jvbmc6ICcjRkY2OTcyJyxcclxuXHJcblx0XHRcdG1lc3NhZ2VzOiB7XHJcblx0XHRcdFx0bmFtZTogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxyXG5cdFx0XHRcdHRlbDogJ9Cd0LXQtNC+0L/Rg9GB0YLQuNC80YvQuSDRhNC+0YDQvNCw0YInLFxyXG5cdFx0XHRcdGVtYWlsOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgicsXHJcblx0XHRcdFx0Y2hlY2tib3g6ICfQndGD0LbQvdC+INC/0L7RgdGC0LDQstC40YLRjCDQs9Cw0LvQvtGH0LrRgycsXHJcblx0XHRcdH0sXHJcblx0XHRcdHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uKHRoaXNGb3JtKSB7XHJcblx0XHRcdFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXNGb3JtKTtcclxuXHJcblx0XHRcdFx0bGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfQntGC0L/RgNCw0LLQu9C10L3QvicpO1xyXG5cdFx0XHRcdFx0XHRcdGxldCBwb3B1cENvbnRhaW5lckJ1eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkX19wb3B1cC1jb250YWluZXItYnV5Jyk7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGh0bWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdodG1sJyk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHBvcHVwQ29udGFpbmVyQnV5KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRwb3B1cENvbnRhaW5lckJ1eS5jbGFzc0xpc3QucmVtb3ZlKCdjYXJkX19wb3B1cC1jb250YWluZXItYnV5LWlzLWFjdGl2ZScpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY29udGFpbmVyLXN1Y2Nlc3NmdWwtc2VuZGluZycpLmNsYXNzTGlzdC5hZGQoJ3BvcHVwLWNvbnRhaW5lci1zdWNjZXNzZnVsLXNlbmRpbmctaXMtYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRcdFx0aHRtbC5jbGFzc0xpc3QuYWRkKCdzY3JvbGwtb2ZmJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdHhoci5vcGVuKCdQT1NUJywgJy4uL21haWwucGhwJywgdHJ1ZSk7XHJcblx0XHRcdFx0eGhyLnNlbmQoZm9ybURhdGEpO1xyXG5cclxuXHRcdFx0XHR0aGlzRm9ybS5yZXNldCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRcclxuXHJcblxyXG5cclxufSkiLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XHJcbi8vIFN3aXBlclxyXG5cclxuY29uc3QgY2F0YWxvZ1NsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRhbG9nX19zd2lwZXInKTtcclxuXHJcblx0aWYoY2F0YWxvZ1NsaWRlcikge1xyXG5cdFx0dmFyIHN3aXBlckNhdGFsb2cgPSBuZXcgU3dpcGVyKCcuY2F0YWxvZ19fc3dpcGVyJywge1xyXG5cdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRzbGlkZXNQZXJHcm91cDogMyxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAzMixcclxuXHRcdFx0c2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogXCIuY2F0YWxvZ19fcGFnaW5hdGlvblwiLFxyXG5cdFx0XHRcdGNsaWNrYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRyZW5kZXJCdWxsZXQ6IGZ1bmN0aW9uIChpbmRleCwgY2xhc3NOYW1lKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gJzxzcGFuIGNsYXNzPVwiJyArIGNsYXNzTmFtZSArICdcIj4nICsgKGluZGV4ICsgMSkgKyBcIjwvc3Bhbj5cIjtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRrZXlib2FyZDogdHJ1ZSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQxMDIzOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0NjQwOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6IDIsXHJcblx0XHRcdFx0XHRzcGFjZUJldHdlZW46IDMyLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MDoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMixcclxuXHRcdFx0XHRcdHNsaWRlc1Blckdyb3VwOiAyLFxyXG5cdFx0XHRcdFx0c3BhY2VCZXR3ZWVuOiAxNixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8vIFJhbmdlLXNsaWRlclxyXG5cclxuXHR2YXIgcmFuZ2VTbGlkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZ2Utc2xpZGVyJyk7XHJcblxyXG5cdGlmKHJhbmdlU2xpZGVyKSB7XHJcblx0XHRub1VpU2xpZGVyLmNyZWF0ZShyYW5nZVNsaWRlciwge1xyXG5cdFx0XHRzdGFydDogWzIwMDAsIDE1MDAwMF0sXHJcblx0XHRcdGNvbm5lY3Q6IHRydWUsXHJcblx0XHRcdHN0ZXA6IDEwMDAsXHJcblx0XHRcdHJhbmdlOiB7XHJcblx0XHRcdFx0XHQnbWluJzogMCxcclxuXHRcdFx0XHRcdCdtYXgnOiAyMDAwMDBcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3QgaW5wdXRGcm9tID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0LWZyb20nKTtcclxuXHRcdGNvbnN0IGlucHV0VG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtdG8nKTtcclxuXHRcdGNvbnN0IGlucHV0cyA9IFtpbnB1dEZyb20sIGlucHV0VG9dO1xyXG5cclxuXHRcdHJhbmdlU2xpZGVyLm5vVWlTbGlkZXIub24oJ3VwZGF0ZScsIGZ1bmN0aW9uKHZhbHVlcywgaGFuZGxlKXtcclxuXHRcdFx0aW5wdXRzW2hhbmRsZV0udmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlc1toYW5kbGVdKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Y29uc3Qgc2V0UmFuZ2VTbGlkZXIgPSAoaSwgdmFsdWUpID0+IHtcclxuXHRcdFx0bGV0IGFyciA9IFtudWxsLCBudWxsXTtcclxuXHRcdFx0YXJyW2ldID0gdmFsdWU7XHJcblxyXG5cdFx0XHRyYW5nZVNsaWRlci5ub1VpU2xpZGVyLnNldChhcnIpXHJcblx0XHR9XHJcblxyXG5cdFx0aW5wdXRzLmZvckVhY2goKGVsLCBpbmRleCkgPT4ge1xyXG5cdFx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xyXG5cdFx0XHRcdHNldFJhbmdlU2xpZGVyKGluZGV4LCBlLmN1cnJlbnRUYXJnZXQudmFsdWUpXHJcblx0XHRcdH0pXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHQvLyBCdG4gTW9yZVxyXG5cclxuXHRjb25zdCBidG5PcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXJfX21pbml0aXRsZScpO1xyXG5cdGNvbnN0IGJ0bk1vcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2lkZWJhcl9fYnRuLW1vcmUnKTtcclxuXHRjb25zdCBzaWRlYmFyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyX19saXN0LWFyZWEnKTtcclxuXHJcblx0aWYoYnRuT3Blbikge1xyXG5cdFx0YnRuT3Blbi5mb3JFYWNoKGVsID0+IHtcclxuXHRcdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG5cdFx0XHRcdGUuY3VycmVudFRhcmdldC5jbG9zZXN0KCdkaXYnKS5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcl9fbGlzdC1hcmVhJykuY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZWJhcl9fbGlzdC1hcmVhX2FjdGl2ZScpXHJcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZWJhcl9fbWluaXRpdGxlX2FjdGl2ZScpXHJcblx0XHRcdH0pXHJcblx0XHR9KVxyXG5cdH1cclxuXHJcblx0aWYgKGJ0bk1vcmUpIHtcclxuXHRcdGJ0bk1vcmUuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcclxuXHRcdFx0XHRlLmN1cnJlbnRUYXJnZXQuY2xvc2VzdCgnZGl2JykucXVlcnlTZWxlY3RvcignLnNpZGViYXJfX2xpc3QnKS5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyX19saXN0X29wZW4nKTtcclxuXHRcdFx0XHRlbC5jbGFzc0xpc3QuYWRkKCdzaWRlYmFyX19idG4tbW9yZV9kZWxldGUnKVxyXG5cdFx0XHR9KVxyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cclxuXHJcblx0XHJcblx0XHJcblxyXG59KSIsIndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHRsZXQgY29udGFjdHNNYXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHMtcGFnZV9fbWFwJyk7XHJcblx0aWYgKGNvbnRhY3RzTWFwKSB7XHJcblx0XHR5bWFwcy5yZWFkeShpbml0KTtcclxuXHRcdFx0ZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuXHRcdFx0XHRcdHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJ5TWFwXCIsIHtcclxuXHRcdFx0XHRcdFx0Y2VudGVyOiBbNTUuNzU2MDY3NjU5NTEyNTM0LDM3LjYzODI1ODM2MDQwOTldLFxyXG5cdFx0XHRcdFx0XHR6b29tOiAxNCxcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0dmFyIG15UGxhY2VtYXJrMSA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWzU1Ljc1MTg5NzE1MDY5NDQ2LDM3LjY0MjQwNzQ3NjkyNjAxXSwge1xyXG5cdFx0XHRcdFx0XHRiYWxsb29uQ29udGVudEhlYWRlcjogJzxoMiBjbGFzcz1cImJhbGxvb25fX3RpdGxlXCI+U2l0RG93blBscyDQvdCwINCh0L7Qu9GP0L3QutC1IDwvaDI+JyArXHJcblx0XHRcdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJiYWxsb29uX19hZGRyZXNzXCI+0LwuINCa0LjRgtCw0Lkt0LPQvtGA0L7QtCwg0YPQuy4g0KHQvtC70Y/QvdC60LAsINC0LjI0PC9zcGFuPicgKyBcclxuXHRcdFx0XHRcdFx0XHRcdCc8YSBjbGFzcz1cImhlYWRlcl9fdGVsXCIgaHJlZj1cInRlbDorNzQ5NTg4NTQ1NDdcIj4rNyAoNDk1KSA4ODUtNDUtNDc8L2E+JyxcclxuXHRcdFx0XHRcdFx0YmFsbG9vbkNvbnRlbnRCb2R5Olx0JzxkaXYgY2xhc3M9XCJiYWxsb29uX190aW1lXCI+PHNwYW4gY2xhc3M9XCJiYWxsb29uX19ncmV5LXRleHRcIj7Qp9Cw0YHRiyDRgNCw0LHQvtGC0Ys6PC9zcGFuPjxzcGFuIGNsYXNzPVwiYmFsbG9vbl9fc2ltcGxlLXRleHRcIj4g0YEgMTA6MDAg0LTQviAyMTowMDwvc3Bhbj48L2Rpdj4nLFxyXG5cdFx0XHRcdFx0XHRiYWxsb29uQ29udGVudEZvb3RlcjogJzxkaXYgY2xhc3M9XCJiYWxsb29uX193aGF0XCI+PHNwYW4gY2xhc3M9XCJiYWxsb29uX19ncmV5LXRleHRcIj7Qp9GC0L4g0LfQtNC10YHRjDo8L3NwYW4+PHNwYW4gY2xhc3M9XCJiYWxsb29uX19zaW1wbGUtdGV4dFwiPiDRiNC+0YPRgNGD0LwsINC/0YPQvdC60YIg0L7RgtCz0YDRg9C30LrQuCwg0L/Rg9C90LrRgiDQstGL0LTQsNGH0LgsINC/0YPQvdC60YIg0L7QsdC80LXQvdCwLdCy0L7Qt9Cy0YDQsNGC0LAsINGB0LXRgNCy0LjRgdC90YvQuSDRhtC10L3RgtGAPC9zcGFuPjwvZGl2PicsXHJcblx0XHRcdFx0XHRcdGhpbnRDb250ZW50OiAnU2l0RG93blBscyDQvdCwINCh0L7Qu9GP0L3QutC1JyxcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuXHRcdFx0XHRcdFx0aWNvbkltYWdlSHJlZjogJy4uL2ltZy9zdmcvc3ByaXRlLnN2ZyNlbGVwaGFudC1vcmFuZ2UnLFxyXG5cdFx0XHRcdFx0XHRpY29uSW1hZ2VTaXplOiBbMzIsIDIyXSxcclxuXHRcdFx0XHRcdFx0aWNvbkltYWdlT2Zmc2V0OiBbLTEwLCAtMTBdXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHZhciBteVBsYWNlbWFyazIgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43NjMzMTY2NDE0OTQwNiwzNy42NTQ4NTAwMjgyNzc3MTRdLCB7XHJcblx0XHRcdFx0XHRcdGJhbGxvb25Db250ZW50SGVhZGVyOiAnPGgyIGNsYXNzPVwiYmFsbG9vbl9fdGl0bGVcIj5TaXREb3duUGxzINC90LAg0J/QvtC60YDQvtCy0LrQtSA8L2gyPicgK1xyXG5cdFx0XHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwiYmFsbG9vbl9fYWRkcmVzc1wiPtC8LiDQmtGD0YDRgdC60LDRjywg0YPQuy4g0J/QtdGC0YDQvtCy0LrQsCwg0LQuNDg8L3NwYW4+PC9icj4nICsgXHJcblx0XHRcdFx0XHRcdFx0XHQnPGEgY2xhc3M9XCJoZWFkZXJfX3RlbFwiIGhyZWY9XCJ0ZWw6Kzc0OTU4ODU0NTQ3XCI+KzcgKDQ5NSkgODg1LTQ1LTQ3PC9hPicsXHJcblx0XHRcdFx0XHRcdGJhbGxvb25Db250ZW50Qm9keTpcdCc8ZGl2IGNsYXNzPVwiYmFsbG9vbl9fdGltZVwiPjxzcGFuIGNsYXNzPVwiYmFsbG9vbl9fZ3JleS10ZXh0XCI+0KfQsNGB0Ysg0YDQsNCx0L7RgtGLOjwvc3Bhbj48c3BhbiBjbGFzcz1cImJhbGxvb25fX3NpbXBsZS10ZXh0XCI+INGBIDEwOjAwINC00L4gMjE6MDA8L3NwYW4+PC9kaXY+JyxcclxuXHRcdFx0XHRcdFx0YmFsbG9vbkNvbnRlbnRGb290ZXI6ICc8c3BhbiBjbGFzcz1cImJhbGxvb25fX2dyZXktdGV4dFwiPtCn0YLQviDQt9C00LXRgdGMOjwvc3Bhbj48c3BhbiBjbGFzcz1cImJhbGxvb25fX3NpbXBsZS10ZXh0XCI+INGI0L7Rg9GA0YPQvCwg0L/Rg9C90LrRgiDQvtGC0LPRgNGD0LfQutC4LCDQv9GD0L3QutGCPC9icj4g0LLRi9C00LDRh9C4LCDQv9GD0L3QutGCINC+0LHQvNC10L3QsC3QstC+0LfQstGA0LDRgtCwLDwvYnI+INGB0LXRgNCy0LjRgdC90YvQuSDRhtC10L3RgtGAPC9zcGFuPicsXHJcblx0XHRcdFx0XHRcdGhpbnRDb250ZW50OiAnU2l0RG93blBscyDQvdCwINCh0L7Qu9GP0L3QutC1JyxcclxuXHRcdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdFx0aWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxyXG5cdFx0XHRcdFx0XHRpY29uSW1hZ2VIcmVmOiAnLi4vaW1nL3N2Zy9zcHJpdGUuc3ZnI2VsZXBoYW50LW9yYW5nZScsXHJcblx0XHRcdFx0XHRcdGljb25JbWFnZVNpemU6IFszMiwgMjJdLFxyXG5cdFx0XHRcdFx0XHRpY29uSW1hZ2VPZmZzZXQ6IFstMTAsIC0xMF1cclxuXHRcdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0XHRcdG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrMSk7XHJcblx0XHRcdFx0XHRteVBsYWNlbWFyazEuYmFsbG9vbi5vcGVuKCk7XHJcblx0XHRcdFx0XHRteU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyazIpO1xyXG5cdFx0XHRcdFx0bXlNYXAuY29udHJvbHMucmVtb3ZlKCdzZWFyY2hDb250cm9sJyk7XHJcblx0XHRcdFx0XHRteU1hcC5jb250cm9scy5yZW1vdmUoJ2dlb2xvY2F0aW9uQ29udHJvbCcpO1xyXG5cdFx0XHRcdFx0bXlNYXAuY29udHJvbHMucmVtb3ZlKCdyb3V0ZUJ1dHRvbkNvbnRyb2wnKTtcclxuXHRcdFx0XHRcdG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHJhZmZpY0NvbnRyb2wnKTtcclxuXHRcdFx0XHRcdG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHlwZVNlbGVjdG9yJyk7XHJcblx0XHRcdFx0XHRteU1hcC5jb250cm9scy5yZW1vdmUoJ2Z1bGxzY3JlZW5Db250cm9sJyk7XHJcblx0XHRcdFx0XHRteU1hcC5jb250cm9scy5yZW1vdmUoJ3pvb21Db250cm9sJyk7XHJcblx0XHRcdFx0XHRteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xyXG5cdFx0XHR9XHJcblx0fVxyXG5cclxufSkiLCJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XHJcblxyXG5cdC8vIFNlbGVjdFxyXG5cdGNvbnN0IGVsZW1lbnRQcmVVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXJfX2NpdHktc2VsZWN0b3JfcHJlLXVwJyk7XHJcblx0Y29uc3QgY2hvaWNlc1ByZVVwID0gbmV3IENob2ljZXMoZWxlbWVudFByZVVwLCB7XHJcblx0XHRzZWFyY2hFbmFibGVkOiBmYWxzZSxcclxuXHRcdGl0ZW1TZWxlY3RUZXh0OiAnJyxcclxuXHR9KTtcclxuXHJcblx0Ly8gU2VsZWN0XHJcblx0Y29uc3QgZWxlbWVudFVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcl9fY2l0eS1zZWxlY3Rvcl91cCcpO1xyXG5cdGNvbnN0IGNob2ljZXNVcCA9IG5ldyBDaG9pY2VzKGVsZW1lbnRVcCwge1xyXG5cdFx0c2VhcmNoRW5hYmxlZDogZmFsc2UsXHJcblx0XHRpdGVtU2VsZWN0VGV4dDogJycsXHJcblx0fSk7XHJcblxyXG5cdC8vIFNlbGVjdFxyXG5cdGNvbnN0IGVsZW1lbnREb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hlYWRlcl9fY2F0ZWdvcnktc2VsZWN0b3InKTtcclxuXHRjb25zdCBjaG9pY2VzRG93biA9IG5ldyBDaG9pY2VzKGVsZW1lbnREb3duLCB7XHJcblx0XHRzZWFyY2hFbmFibGVkOiBmYWxzZSxcclxuXHRcdGl0ZW1TZWxlY3RUZXh0OiAnJyxcclxuXHR9KTtcclxuXHJcblx0Ly8gQnVyZ2VyXHJcblx0bGV0IGJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1cmdlcicpO1xyXG5cdGxldCBidXJnZXJMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnVyZ2VyLWxpbmUnKTtcclxuXHRsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fbmF2Jyk7XHJcblxyXG5cdGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdGJ1cmdlckxpbmUuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19idXJnZXItbGluZV9hY3RpdmUnKTtcclxuXHRcdG5hdi5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkZXJfX25hdl9hY3RpdmUnKTtcclxuXHR9KVxyXG5cclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX191cC1pdGVtJykuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdGJ1cmdlckxpbmUuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19idXJnZXItbGluZV9hY3RpdmUnKTtcclxuXHRcdFx0bmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fbmF2X2FjdGl2ZScpO1xyXG5cdFx0fSlcclxuXHR9KVxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX2Rvd24taXRlbScpLmZvckVhY2goZWwgPT4ge1xyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRidXJnZXJMaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fYnVyZ2VyLWxpbmVfYWN0aXZlJyk7XHJcblx0XHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX25hdl9hY3RpdmUnKTtcclxuXHRcdH0pXHJcblx0fSlcclxuXHJcblx0Ly8gU3dpcGVyXHJcblx0Y29uc3QgaGVyb1NsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvX19zd2lwZXInKTtcclxuXHJcblx0aWYgKGhlcm9TbGlkZXIpIHtcclxuXHRcdGxldCBzd2lwZXJIZXJvID0gbmV3IFN3aXBlcihoZXJvU2xpZGVyLCB7XHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdHNwYWNlQmV0d2VlbjogMCxcclxuXHRcdFx0ZWZmZWN0OiAnZmFkZScsXHJcblx0XHRcdGF1dG9wbGF5OiB7XHJcblx0XHRcdFx0ZGVsYXk6IDI1MDAsXHJcblx0XHRcdH0sXHJcblx0XHRcdHBhZ2luYXRpb246IHtcclxuXHRcdFx0XHRlbDogJy5oZXJvX19zd2lwZXItcGFnaW5hdGlvbicsXHJcblx0XHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRzaW11bGF0ZVRvdWNoOmZhbHNlLFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHJcblxyXG5cdGNvbnN0IHNwZWNpYWxTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3BlY2lhbF9fc3dpcGVyJyk7XHJcblxyXG5cdGlmIChzcGVjaWFsU2xpZGVyKSB7XHJcblx0XHRsZXQgc3dpcGVyU3BlY2lhbCA9IG5ldyBTd2lwZXIoc3BlY2lhbFNsaWRlciwge1xyXG5cdFx0XHRzbGlkZXNQZXJHcm91cDogMyxcclxuXHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0c3BhY2VCZXR3ZWVuOiAzMixcclxuXHRcdFx0c2ltdWxhdGVUb3VjaDogZmFsc2UsXHJcblx0XHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0XHRuZXh0RWw6ICcuc3BlY2lhbF9fc2xpZGUtYnRuLW5leHQnLFxyXG5cdFx0XHRcdHByZXZFbDogJy5zcGVjaWFsX19zbGlkZS1idG4tcHJldicsXHJcblx0XHRcdH0sXHJcblx0XHRcdGExMXk6IHtcclxuXHRcdFx0XHRwcmV2U2xpZGVNZXNzYWdlOiAn0J/RgNC10LTRi9C00YPRidC40Lkg0YHQu9Cw0LnQtCcsXHJcblx0XHRcdFx0bmV4dFNsaWRlTWVzc2FnZTogJ9Ch0LvQtdC00YPRjtGJ0LjQuSDRgdC70LDQudC0JyxcclxuXHRcdFx0fSxcclxuXHRcdFx0YnJlYWtwb2ludHM6IHtcclxuXHRcdFx0XHQxMzY2OiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAnYXV0bydcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDEwMjE6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1Blckdyb3VwOiAzLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDYwMDoge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6IDIsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MzIwOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cclxuXHJcblx0Y29uc3QgdXNlZnVsbFNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VmdWxsX19zd2lwZXInKTtcclxuXHJcblx0aWYgKHNwZWNpYWxTbGlkZXIpIHtcclxuXHRcdGxldCBzd2lwZXJVc2VmdWxsID0gbmV3IFN3aXBlcih1c2VmdWxsU2xpZGVyLCB7XHJcblx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdHNsaWRlc1Blckdyb3VwOiAzLFxyXG5cdFx0XHRzcGFjZUJldHdlZW46IDMyLFxyXG5cdFx0XHRzaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuXHRcdFx0bmF2aWdhdGlvbjoge1xyXG5cdFx0XHRcdG5leHRFbDogJy51c2VmdWxsX19zbGlkZS1idG4tbmV4dCcsXHJcblx0XHRcdFx0cHJldkVsOiAnLnVzZWZ1bGxfX3NsaWRlLWJ0bi1wcmV2JyxcclxuXHRcdFx0fSxcclxuXHRcdFx0YTExeToge1xyXG5cdFx0XHRcdHByZXZTbGlkZU1lc3NhZ2U6ICfQn9GA0LXQtNGL0LTRg9GJ0LjQuSDRgdC70LDQudC0JyxcclxuXHRcdFx0XHRuZXh0U2xpZGVNZXNzYWdlOiAn0KHQu9C10LTRg9GO0YnQuNC5INGB0LvQsNC50LQnLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHRcdDEzNjY6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMixcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDEwMjE6IHtcclxuXHRcdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMyxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdDc2NToge1xyXG5cdFx0XHRcdFx0c2xpZGVzUGVyVmlldzogMixcclxuXHRcdFx0XHRcdHNsaWRlc1Blckdyb3VwOiAyLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0MzIwOiB7XHJcblx0XHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6MSxcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Ly8gVG9vbHRpcFxyXG5cdGxldCBjb250YWN0c0NvbW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHNfX2NvbW1lbnQnKVxyXG5cdGlmIChjb250YWN0c0NvbW1lbnQpIHtcclxuXHRcdHRpcHB5KCcuY29udGFjdHNfX2NvbW1lbnQnLCB7XHJcblx0XHRcdGNvbnRlbnQ6ICfQoNC10L/Qu9C40YbQuNGA0L7QstCw0L3QvdGL0LUg0YEg0LfQsNGA0YPQsdC10LbQvdGL0YUg0LjRgdGC0L7Rh9C90LjQutC+0LIsINC40YHRgdC70LXQtNC+0LLQsNC90LjRjyDRhNC+0YDQvNC40YDRg9GO0YIg0LPQu9C+0LHQsNC70YzQvdGD0Y4g0YHQtdGC0YwuJyxcclxuXHRcdFx0dGhlbWU6ICdiYWNrZ3JvdW5kLT8nLFxyXG5cdFx0XHRhcnJvdzogdHJ1ZSxcclxuXHRcdFx0bWF4V2lkdGg6IDMwMCxcclxuXHRcdFx0dG91Y2g6IHRydWUsXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdC8vIE1hc2tcclxuXHR2YXIgcGhvbmVNYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWxNYWluXCIpO1xyXG5cclxuXHRpZiAocGhvbmVNYWluKSB7XHJcblx0XHR2YXIgaW0gPSBuZXcgSW5wdXRtYXNrKFwiKzcoOTk5KSA5OTktOTk5OVwiKTtcclxuXHRcdGltLm1hc2socGhvbmVNYWluKTtcclxuXHR9XHJcblxyXG5cdFxyXG5cclxuXHQvLyBWYWxpZGF0ZVxyXG5cdGxldCBjb250YWN0c0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHNfX2Zvcm0nKTtcclxuXHJcblx0aWYgKGNvbnRhY3RzRm9ybSkge1xyXG5cdFx0bmV3IEp1c3RWYWxpZGF0ZSgnLmNvbnRhY3RzX19mb3JtJywge1xyXG5cdFx0XHRydWxlczoge1xyXG5cdFx0XHRcdG5hbWU6IHtcclxuXHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0bWluTGVuZ3RoOiAyLFxyXG5cdFx0XHRcdFx0bWF4TGVuZ3RoOiA0MCxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdHRlbDoge1xyXG5cdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0XHRmdW5jdGlvbjogKG5hbWUsIHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnN0IHRlbGUgPSBwaG9uZU1haW4uaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKVxyXG5cdFx0XHRcdFx0XHRyZXR1cm4gTnVtYmVyKHRlbGUpICYmIHRlbGUubGVuZ3RoID09PSAxMFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZW1haWw6IHtcclxuXHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0ZW1haWw6IHRydWVcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGNoZWNrYm94OiB7XHJcblx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0Y29sb3JXcm9uZzogJyNGRjY5NzInLFxyXG5cclxuXHRcdFx0bWVzc2FnZXM6IHtcclxuXHRcdFx0XHRuYW1lOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgicsXHJcblx0XHRcdFx0dGVsOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgicsXHJcblx0XHRcdFx0ZW1haWw6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcclxuXHRcdFx0XHRjaGVja2JveDogJ9Cd0YPQttC90L4g0L/QvtGB0YLQsNCy0LjRgtGMINCz0LDQu9C+0YfQutGDJyxcclxuXHRcdFx0fSxcclxuXHRcdFx0c3VibWl0SGFuZGxlcjogZnVuY3Rpb24odGhpc0Zvcm0pIHtcclxuXHRcdFx0XHRsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpc0Zvcm0pO1xyXG5cclxuXHRcdFx0XHRsZXQgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcblxyXG5cdFx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ9Ce0YLQv9GA0LDQstC70LXQvdC+Jyk7XHJcblx0XHRcdFx0XHRcdFx0bGV0IHBvcHVwQ29udGFpbmVyQnV5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRfX3BvcHVwLWNvbnRhaW5lci1idXknKTtcclxuXHRcdFx0XHRcdFx0XHRsZXQgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2h0bWwnKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAocG9wdXBDb250YWluZXJCdXkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHBvcHVwQ29udGFpbmVyQnV5LmNsYXNzTGlzdC5yZW1vdmUoJ2NhcmRfX3BvcHVwLWNvbnRhaW5lci1idXktaXMtYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jb250YWluZXItc3VjY2Vzc2Z1bC1zZW5kaW5nJykuY2xhc3NMaXN0LmFkZCgncG9wdXAtY29udGFpbmVyLXN1Y2Nlc3NmdWwtc2VuZGluZy1pcy1hY3RpdmUnKTtcclxuXHRcdFx0XHRcdFx0XHRodG1sLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1vZmYnKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0eGhyLm9wZW4oJ1BPU1QnLCAnbWFpbC5waHAnLCB0cnVlKTtcclxuXHRcdFx0XHR4aHIuc2VuZChmb3JtRGF0YSk7XHJcblxyXG5cdFx0XHRcdHRoaXNGb3JtLnJlc2V0KCk7XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGxldCBwb3B1cENvbnRhaW5lclN1Y2Nlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXAtY29udGFpbmVyLXN1Y2Nlc3NmdWwtc2VuZGluZycpO1xyXG5cdGxldCBwb3B1cENsb3NlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBvcHVwLWNsb3NlLWJ0bicpO1xyXG5cdGxldCBodG1sID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpO1xyXG5cclxuXHRwb3B1cENsb3NlQnRuLmZvckVhY2goZSA9PiB7XHJcblx0XHRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XHJcblx0XHRcdHBvcHVwQ29udGFpbmVyU3VjY2Vzcy5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cC1jb250YWluZXItc3VjY2Vzc2Z1bC1zZW5kaW5nLWlzLWFjdGl2ZScpO1xyXG5cdFx0XHRodG1sLmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1vZmYnKTtcclxuXHRcdH0pXHJcblx0fSlcclxuXHR3aW5kb3cub25jbGljayA9IChlKSA9PiB7XHJcbiAgICBpZiAoZS50YXJnZXQgPT09IHBvcHVwQ29udGFpbmVyU3VjY2Vzcykge1xyXG5cdFx0XHRwb3B1cENvbnRhaW5lclN1Y2Nlc3MuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXAtY29udGFpbmVyLXN1Y2Nlc3NmdWwtc2VuZGluZy1pcy1hY3RpdmUnKTtcclxuXHRcdFx0aHRtbC5jbGFzc0xpc3QucmVtb3ZlKCdzY3JvbGwtb2ZmJyk7XHJcbiAgICB9ICAgICAgICBcclxuXHR9XHJcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcclxuXHRcdFx0cG9wdXBDb250YWluZXJTdWNjZXNzLmNsYXNzTGlzdC5yZW1vdmUoJ3BvcHVwLWNvbnRhaW5lci1zdWNjZXNzZnVsLXNlbmRpbmctaXMtYWN0aXZlJyk7XHJcblx0XHRcdGh0bWwuY2xhc3NMaXN0LnJlbW92ZSgnc2Nyb2xsLW9mZicpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQvLyBCdG5cclxuXHJcblx0Ly8gTG9hZCBtb3JlXHJcblxyXG5cdHZhciBidG5Nb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hfX21vcmUnKTtcclxuXHR2YXIgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlnaF9fY2FyZHMtaXRlbScpO1xyXG5cclxuXHRpZiAoYnRuTW9yZSkge1xyXG5cdFx0YnRuTW9yZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHRcdFx0aXRlbXMuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRcdFx0ZWwuY2xhc3NMaXN0LmFkZCgnaGlnaF9fY2FyZHMtaXRlbV9hY3RpdmUnKVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRidG5Nb3JlLmNsYXNzTGlzdC5hZGQoJ2J0bi1oaWRlJylcclxuXHRcdH0pXHJcblx0fVxyXG5cclxufSkiXX0=
