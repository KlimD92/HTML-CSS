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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGFsb2cuanMiLCJzY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xyXG4vLyBTd2lwZXJcclxuXHJcbmNvbnN0IGNhdGFsb2dTbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0YWxvZ19fc3dpcGVyJyk7XHJcblxyXG5cdGxldCBzd2lwZXJDYXRhbG9nID0gbmV3IFN3aXBlcihjYXRhbG9nU2xpZGVyLCB7XHJcblx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0c2xpZGVzUGVyQ29sdW1uOiAzLFxyXG5cdFx0YXV0b0hlaWdodDogZmFsc2UsXHJcblx0XHRzbGlkZXNQZXJHcm91cDogMyxcclxuXHRcdHNwYWNlQmV0d2VlbjogMzIsXHJcblx0XHRzaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuXHRcdC8vIG5hdmlnYXRpb246IHtcclxuXHRcdC8vIFx0bmV4dEVsOiAnLmNhdGFsb2dfX2J0bi1uZXh0JyxcclxuXHRcdC8vIFx0cHJldkVsOiAnLmNhdGFsb2dfX2J0bi1wcmV2JyxcclxuXHRcdC8vIH0sXHJcblx0XHQvLyBwYWdpbmF0aW9uOiB7XHJcblx0XHQvLyBcdGVsOiAnLmNhdGFsb2dfX3N3aXBlci1wYWdpbmF0aW9uJyxcclxuXHRcdC8vIFx0dHlwZTogJ2ZyYWN0aW9uJyxcclxuXHRcdC8vIH0sXHJcblx0XHQvLyBhMTF5OiB7XHJcblx0XHQvLyBcdHByZXZTbGlkZU1lc3NhZ2U6ICfQn9GA0LXQtNGL0LTRg9GJ0LjQuSDRgdC70LDQudC0JyxcclxuXHRcdC8vIFx0bmV4dFNsaWRlTWVzc2FnZTogJ9Ch0LvQtdC00YPRjtGJ0LjQuSDRgdC70LDQudC0JyxcclxuXHRcdC8vIH0sXHJcblx0XHQvLyBicmVha3BvaW50czoge1xyXG5cdFx0Ly8gXHQxNDAxOiB7XHJcblx0XHQvLyBcdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdC8vIFx0fSxcclxuXHRcdC8vIFx0NjQwOiB7XHJcblx0XHQvLyBcdFx0c2xpZGVzUGVyVmlldzogMixcclxuXHRcdC8vIFx0XHRzcGFjZUJldHdlZW46IDM0LFxyXG5cdFx0Ly8gXHR9LFxyXG5cdFx0Ly8gXHQzMjA6IHtcclxuXHRcdC8vIFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0Ly8gXHRcdHNsaWRlc1BlckNvbHVtbjogMSxcclxuXHRcdC8vIFx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuXHRcdC8vIFx0fSxcclxuXHRcdC8vIH1cclxuXHR9KTtcclxuXHJcbn0pIiwid2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpe1xyXG5cclxuXHQvLyBTZWxlY3RcclxuXHRjb25zdCBlbGVtZW50UHJlVXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGVhZGVyX19jaXR5LXNlbGVjdG9yX3ByZS11cCcpO1xyXG5cdGNvbnN0IGNob2ljZXNQcmVVcCA9IG5ldyBDaG9pY2VzKGVsZW1lbnRQcmVVcCwge1xyXG5cdFx0c2VhcmNoRW5hYmxlZDogZmFsc2UsXHJcblx0XHRpdGVtU2VsZWN0VGV4dDogJycsXHJcblx0fSk7XHJcblxyXG5cdC8vIFNlbGVjdFxyXG5cdGNvbnN0IGVsZW1lbnRVcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXJfX2NpdHktc2VsZWN0b3JfdXAnKTtcclxuXHRjb25zdCBjaG9pY2VzVXAgPSBuZXcgQ2hvaWNlcyhlbGVtZW50VXAsIHtcclxuXHRcdHNlYXJjaEVuYWJsZWQ6IGZhbHNlLFxyXG5cdFx0aXRlbVNlbGVjdFRleHQ6ICcnLFxyXG5cdH0pO1xyXG5cclxuXHQvLyBTZWxlY3RcclxuXHRjb25zdCBlbGVtZW50RG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNoZWFkZXJfX2NhdGVnb3J5LXNlbGVjdG9yJyk7XHJcblx0Y29uc3QgY2hvaWNlc0Rvd24gPSBuZXcgQ2hvaWNlcyhlbGVtZW50RG93biwge1xyXG5cdFx0c2VhcmNoRW5hYmxlZDogZmFsc2UsXHJcblx0XHRpdGVtU2VsZWN0VGV4dDogJycsXHJcblx0fSk7XHJcblxyXG5cdC8vIEJ1cmdlclxyXG5cdGxldCBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19idXJnZXInKTtcclxuXHRsZXQgYnVyZ2VyTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1cmdlci1saW5lJyk7XHJcblx0bGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdicpO1xyXG5cclxuXHRidXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblx0XHRidXJnZXJMaW5lLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fYnVyZ2VyLWxpbmVfYWN0aXZlJyk7XHJcblx0XHRuYXYuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19uYXZfYWN0aXZlJyk7XHJcblx0fSlcclxuXHJcblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhlYWRlcl9fdXAtaXRlbScpLmZvckVhY2goZWwgPT4ge1xyXG5cdFx0ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xyXG5cdFx0XHRidXJnZXJMaW5lLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fYnVyZ2VyLWxpbmVfYWN0aXZlJyk7XHJcblx0XHRcdG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX25hdl9hY3RpdmUnKTtcclxuXHRcdH0pXHJcblx0fSlcclxuXHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGVhZGVyX19kb3duLWl0ZW0nKS5mb3JFYWNoKGVsID0+IHtcclxuXHRcdGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuXHRcdFx0YnVyZ2VyTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2J1cmdlci1saW5lX2FjdGl2ZScpO1xyXG5cdFx0XHRuYXYuY2xhc3NMaXN0LnJlbW92ZSgnaGVhZGVyX19uYXZfYWN0aXZlJyk7XHJcblx0XHR9KVxyXG5cdH0pXHJcblxyXG5cdC8vIFN3aXBlclxyXG5cdGNvbnN0IGhlcm9TbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyb19fc3dpcGVyJyk7XHJcblxyXG5cdGxldCBzd2lwZXJIZXJvID0gbmV3IFN3aXBlcihoZXJvU2xpZGVyLCB7XHJcblx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0c3BhY2VCZXR3ZWVuOiAwLFxyXG5cdFx0ZWZmZWN0OiAnZmFkZScsXHJcblx0XHRhdXRvcGxheToge1xyXG5cdFx0XHRkZWxheTogMjUwMCxcclxuXHRcdH0sXHJcblx0XHRwYWdpbmF0aW9uOiB7XHJcblx0XHRcdGVsOiAnLmhlcm9fX3N3aXBlci1wYWdpbmF0aW9uJyxcclxuXHRcdFx0Y2xpY2thYmxlOiB0cnVlLFxyXG5cdFx0fSxcclxuXHRcdHNpbXVsYXRlVG91Y2g6ZmFsc2UsXHJcblx0fSk7XHJcblxyXG5cclxuXHJcblx0Y29uc3Qgc3BlY2lhbFNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zcGVjaWFsX19zd2lwZXInKTtcclxuXHJcblx0bGV0IHN3aXBlclNwZWNpYWwgPSBuZXcgU3dpcGVyKHNwZWNpYWxTbGlkZXIsIHtcclxuXHRcdHNsaWRlc1Blckdyb3VwOiAzLFxyXG5cdFx0c2xpZGVzUGVyVmlldzogMyxcclxuXHRcdHNwYWNlQmV0d2VlbjogMzIsXHJcblx0XHRzaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuXHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0bmV4dEVsOiAnLnNwZWNpYWxfX3NsaWRlLWJ0bi1uZXh0JyxcclxuXHRcdFx0cHJldkVsOiAnLnNwZWNpYWxfX3NsaWRlLWJ0bi1wcmV2JyxcclxuXHRcdH0sXHJcblx0XHRhMTF5OiB7XHJcblx0XHRcdHByZXZTbGlkZU1lc3NhZ2U6ICfQn9GA0LXQtNGL0LTRg9GJ0LjQuSDRgdC70LDQudC0JyxcclxuXHRcdFx0bmV4dFNsaWRlTWVzc2FnZTogJ9Ch0LvQtdC00YPRjtGJ0LjQuSDRgdC70LDQudC0JyxcclxuXHRcdH0sXHJcblx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHQxMzY2OiB7XHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogJ2F1dG8nXHJcblx0XHRcdH0sXHJcblx0XHRcdDEwMjE6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMyxcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAzLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQ2MDA6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMixcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAyLFxyXG5cdFx0XHR9LFxyXG5cdFx0XHQzMjA6IHtcclxuXHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMSxcclxuXHRcdFx0XHRzbGlkZXNQZXJWaWV3OiAxLFxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cclxuXHJcblx0Y29uc3QgdXNlZnVsbFNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c2VmdWxsX19zd2lwZXInKTtcclxuXHJcblx0bGV0IHN3aXBlclVzZWZ1bGwgPSBuZXcgU3dpcGVyKHVzZWZ1bGxTbGlkZXIsIHtcclxuXHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRzbGlkZXNQZXJHcm91cDogMyxcclxuXHRcdHNwYWNlQmV0d2VlbjogMzIsXHJcblx0XHRzaW11bGF0ZVRvdWNoOiBmYWxzZSxcclxuXHRcdG5hdmlnYXRpb246IHtcclxuXHRcdFx0bmV4dEVsOiAnLnVzZWZ1bGxfX3NsaWRlLWJ0bi1uZXh0JyxcclxuXHRcdFx0cHJldkVsOiAnLnVzZWZ1bGxfX3NsaWRlLWJ0bi1wcmV2JyxcclxuXHRcdH0sXHJcblx0XHRhMTF5OiB7XHJcblx0XHRcdHByZXZTbGlkZU1lc3NhZ2U6ICfQn9GA0LXQtNGL0LTRg9GJ0LjQuSDRgdC70LDQudC0JyxcclxuXHRcdFx0bmV4dFNsaWRlTWVzc2FnZTogJ9Ch0LvQtdC00YPRjtGJ0LjQuSDRgdC70LDQudC0JyxcclxuXHRcdH0sXHJcblx0XHRicmVha3BvaW50czoge1xyXG5cdFx0XHQxMzY2OiB7XHJcblx0XHRcdFx0c2xpZGVzUGVyVmlldzogMixcclxuXHRcdFx0XHRzbGlkZXNQZXJHcm91cDogMixcclxuXHRcdFx0fSxcclxuXHRcdFx0MTAyMToge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDMsXHJcblx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6IDMsXHJcblx0XHRcdH0sXHJcblx0XHRcdDc2NToge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDIsXHJcblx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6IDIsXHJcblx0XHRcdH0sXHJcblx0XHRcdDMyMDoge1xyXG5cdFx0XHRcdHNsaWRlc1BlclZpZXc6IDEsXHJcblx0XHRcdFx0c2xpZGVzUGVyR3JvdXA6MSxcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQvLyBUb29sdGlwXHJcblx0dGlwcHkoJy5jb250YWN0c19fY29tbWVudCcsIHtcclxuXHRcdGNvbnRlbnQ6ICfQoNC10L/Qu9C40YbQuNGA0L7QstCw0L3QvdGL0LUg0YEg0LfQsNGA0YPQsdC10LbQvdGL0YUg0LjRgdGC0L7Rh9C90LjQutC+0LIsINC40YHRgdC70LXQtNC+0LLQsNC90LjRjyDRhNC+0YDQvNC40YDRg9GO0YIg0LPQu9C+0LHQsNC70YzQvdGD0Y4g0YHQtdGC0YwuJyxcclxuXHRcdHRoZW1lOiAnYmFja2dyb3VuZC0/JyxcclxuXHRcdGFycm93OiB0cnVlLFxyXG5cdFx0bWF4V2lkdGg6IDMwMCxcclxuXHRcdHRvdWNoOiB0cnVlLFxyXG5cdH0pO1xyXG5cclxuXHQvLyBNYXNrXHJcblx0dmFyIHBob25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZWxcIik7XHJcblxyXG5cdHZhciBpbSA9IG5ldyBJbnB1dG1hc2soXCIrNyg5OTkpIDk5OS05OTk5XCIpO1xyXG5cdGltLm1hc2socGhvbmUpO1xyXG5cclxuXHJcblx0Ly8gdmFyIG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hbWVcIik7XHJcblx0Ly8gSW5wdXRtYXNrKFwiXCIsIHtcclxuXHQvLyBcdHBvc2l0aW9uQ2FyZXRPbkNsaWNrOiBcInJhZGl4Rm9jdXNcIixcclxuXHQvLyBcdF9yYWRpeERhbmNlOiB0cnVlLFxyXG5cdC8vIFx0bnVtZXJpY0lucHV0OiB0cnVlLFxyXG5cdC8vIFx0cGxhY2Vob2xkZXI6IFwiXCIsXHJcblx0Ly8gfSkubWFzayhuYW1lKTtcclxuXHJcblx0Ly8gVmFsaWRhdGVcclxuXHJcblx0bmV3IEp1c3RWYWxpZGF0ZSgnLmNvbnRhY3RzX19mb3JtJywge1xyXG4gICAgcnVsZXM6IHtcclxuICAgICAgbmFtZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdG1pbkxlbmd0aDogMixcclxuXHRcdFx0XHRtYXhMZW5ndGg6IDE1LFxyXG4gICAgICB9LFxyXG4gICAgICB0ZWw6IHtcclxuICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHRmdW5jdGlvbjogKG5hbWUsIHZhbHVlKSA9PiB7XHJcblx0XHRcdFx0XHRjb25zdCB0ZWxlID0gcGhvbmUuaW5wdXRtYXNrLnVubWFza2VkdmFsdWUoKVxyXG5cdFx0XHRcdFx0cmV0dXJuIE51bWJlcih0ZWxlKSAmJiB0ZWxlLmxlbmd0aCA9PT0gMTBcclxuXHRcdFx0XHR9XHJcbiAgICAgIH0sXHJcbiAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgZW1haWw6IHRydWVcclxuICAgICAgfSxcclxuICAgIH0sXHJcblxyXG5cdFx0Y29sb3JXcm9uZzogJyNGRjY5NzInLFxyXG5cclxuXHRcdG1lc3NhZ2VzOiB7XHJcblx0XHRcdG5hbWU6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcclxuXHRcdFx0dGVsOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgicsXHJcblx0XHRcdGVtYWlsOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgicsXHJcblx0XHR9LFxyXG4gIH0pO1xyXG5cclxuXHQvLyBCdG5cclxuXHJcblx0Ly8gTG9hZCBtb3JlXHJcblxyXG5cdHZhciBidG5Nb3JlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhpZ2hfX21vcmUnKTtcclxuXHR2YXIgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlnaF9faXRlbScpO1xyXG5cclxuXHRidG5Nb3JlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cdFx0aXRlbXMuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRcdGVsLmNsYXNzTGlzdC5hZGQoJ2l0ZW1zLWJsb2NrJylcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0YnRuTW9yZS5jbGFzc0xpc3QuYWRkKCdidG4taGlkZScpXHJcblx0fSlcclxuXHJcbn0pIl19
