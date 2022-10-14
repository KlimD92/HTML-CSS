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