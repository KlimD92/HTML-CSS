window.addEventListener('DOMContentLoaded', function(){


	// Scroll menu

	function scrollMenu(event){
		event.preventDefault();

		let href = $(this).attr('href');

		let offset = $(href).offset().top	;

		$('body,html').animate({
			scrollTop: offset,
		}, 700);
	}

	$('.header__menu-item a').on('click', scrollMenu);


	// Search

	var searchBtn = document.querySelector('.header__search-btn');
	var searchArea = document.querySelector('.header__search-area');
	var closeBtn = document.querySelector('.header__search-close');
	var searchInput = document.querySelector('.header__search-input');

	// searchBtn.addEventListener('click', function() {
	// 	searchArea.classList.add('header__search-area_active')
	// })
	// closeBtn.addEventListener('click', function() {
	// 	searchArea.classList.remove('header__search-area_active')
	// })

	var tlSearch = gsap.timeline({paused: true});

	tlSearch.fromTo(".header__search-area", {x: 400, opacity: 0, display: 'none'}, {duration: .4, x: 0, opacity: 1, display: 'flex'})
		.fromTo(".header__search-input", {x: 400, opacity: 0}, {duration: .3, x: 0, opacity: 1})
		.fromTo(".header__search-close", {y: 100, opacity: 0}, {duration: .2, y: 0, opacity: 1})

	searchBtn.addEventListener('click', function() {
		tlSearch.play()
	})
	closeBtn.addEventListener('click', function() {
		tlSearch.reverse()
	})



	// Burger

	const burger = document.querySelector('.header__burger');
	const burgerLine = document.querySelector('.header__burger-line');
	const menu = document.querySelector('.header__nav_down');
	const body = document.querySelector('body');
	const headerMenuLink = document.querySelectorAll('.header__menu-item a');

	burger.addEventListener('click', function(){
		burger.classList.toggle('header__burger_active');
		burgerLine.classList.toggle('header__burger-line_active');
		menu.classList.toggle('header__nav_is-active');
		body.classList.toggle('scroll-off');
	})

	headerMenuLink.forEach(el => {
		el.addEventListener('click', function(){
			burger.classList.remove('header__burger_active');
			menu.classList.remove('header__nav_is-active');
			burgerLine.classList.remove('header__burger-line_active');
			body.classList.remove('scroll-off')
		})
	});


	
	// Map
	
	ymaps.ready(init);
	function init(){
		var myMap = new ymaps.Map("map", {
				center: [55.76641422502473,37.63511534804934],
				zoom: 15
		});
		var myPlacemark = new ymaps.Placemark([55.76943037433221,37.63968628463385], {}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/contacts/ellipse.png',
			iconImageSize: [12, 12],
			iconImageOffset: [-10, -10]
		});

		myPlacemark.events.add('click', function () {
			document.querySelector('.contacts__address').classList.toggle('contacts__address_active')
		});

		myMap.geoObjects.add(myPlacemark);
		myMap.controls.remove('searchControl');
		myMap.controls.remove('geolocationControl');
		myMap.controls.remove('routeButtonControl');
		myMap.controls.remove('trafficControl');
		myMap.controls.remove('typeSelector');
		myMap.controls.remove('fullscreenControl');
		myMap.controls.remove('zoomControl');
		myMap.controls.remove('rulerControl');
	};

	document.querySelector('.contacts__address-close-btn').addEventListener('click', function() {
		document.querySelector('.contacts__address').classList.remove('contacts__address_active');
	});


	// Validate form

	new window.JustValidate('.about__form', {
		rules: {
		},
		colorWrong: '#F06666',
		messages: {
			email: 'Недопустимый формат',
		},
		submitHandler: function(thisForm) {
			let formData = new FormData(thisForm);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено')
					}
				}
			}

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			thisForm.reset();
		}
	});

	

	new window.JustValidate('.contacts__form', {
		rules: {
			name: {
        required: true,
				minLength: 2,
				maxLength: 30,
				strength: {
					custom: '^[A-Za-zА-Яа-яЁё\s]'
				},
      },
		},
		colorWrong: '#F06666',
		messages: {
			name: 'Недопустимый формат',
			email: 'Недопустимый формат',
		},
		submitHandler: function(thisForm) {
			let formData = new FormData(thisForm);

			let xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function() {
				if (xhr.readyState === 4) {
					if (xhr.status === 200) {
						console.log('Отправлено')
					}
				}
			}

			xhr.open('POST', 'mail.php', true);
			xhr.send(formData);

			thisForm.reset();
		}
	});

	

})

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGZ1bmN0aW9uKCl7XHJcblxyXG5cclxuXHQvLyBTY3JvbGwgbWVudVxyXG5cclxuXHRmdW5jdGlvbiBzY3JvbGxNZW51KGV2ZW50KXtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG5cdFx0bGV0IGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHJcblx0XHRsZXQgb2Zmc2V0ID0gJChocmVmKS5vZmZzZXQoKS50b3BcdDtcclxuXHJcblx0XHQkKCdib2R5LGh0bWwnKS5hbmltYXRlKHtcclxuXHRcdFx0c2Nyb2xsVG9wOiBvZmZzZXQsXHJcblx0XHR9LCA3MDApO1xyXG5cdH1cclxuXHJcblx0JCgnLmhlYWRlcl9fbWVudS1pdGVtIGEnKS5vbignY2xpY2snLCBzY3JvbGxNZW51KTtcclxuXHJcblxyXG5cdC8vIFNlYXJjaFxyXG5cclxuXHR2YXIgc2VhcmNoQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoLWJ0bicpO1xyXG5cdHZhciBzZWFyY2hBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoLWFyZWEnKTtcclxuXHR2YXIgY2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19zZWFyY2gtY2xvc2UnKTtcclxuXHR2YXIgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19zZWFyY2gtaW5wdXQnKTtcclxuXHJcblx0Ly8gc2VhcmNoQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0Ly8gXHRzZWFyY2hBcmVhLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcl9fc2VhcmNoLWFyZWFfYWN0aXZlJylcclxuXHQvLyB9KVxyXG5cdC8vIGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0Ly8gXHRzZWFyY2hBcmVhLmNsYXNzTGlzdC5yZW1vdmUoJ2hlYWRlcl9fc2VhcmNoLWFyZWFfYWN0aXZlJylcclxuXHQvLyB9KVxyXG5cclxuXHR2YXIgdGxTZWFyY2ggPSBnc2FwLnRpbWVsaW5lKHtwYXVzZWQ6IHRydWV9KTtcclxuXHJcblx0dGxTZWFyY2guZnJvbVRvKFwiLmhlYWRlcl9fc2VhcmNoLWFyZWFcIiwge3g6IDQwMCwgb3BhY2l0eTogMCwgZGlzcGxheTogJ25vbmUnfSwge2R1cmF0aW9uOiAuNCwgeDogMCwgb3BhY2l0eTogMSwgZGlzcGxheTogJ2ZsZXgnfSlcclxuXHRcdC5mcm9tVG8oXCIuaGVhZGVyX19zZWFyY2gtaW5wdXRcIiwge3g6IDQwMCwgb3BhY2l0eTogMH0sIHtkdXJhdGlvbjogLjMsIHg6IDAsIG9wYWNpdHk6IDF9KVxyXG5cdFx0LmZyb21UbyhcIi5oZWFkZXJfX3NlYXJjaC1jbG9zZVwiLCB7eTogMTAwLCBvcGFjaXR5OiAwfSwge2R1cmF0aW9uOiAuMiwgeTogMCwgb3BhY2l0eTogMX0pXHJcblxyXG5cdHNlYXJjaEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0dGxTZWFyY2gucGxheSgpXHJcblx0fSlcclxuXHRjbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0dGxTZWFyY2gucmV2ZXJzZSgpXHJcblx0fSlcclxuXHJcblxyXG5cclxuXHQvLyBCdXJnZXJcclxuXHJcblx0Y29uc3QgYnVyZ2VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fYnVyZ2VyJyk7XHJcblx0Y29uc3QgYnVyZ2VyTGluZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX2J1cmdlci1saW5lJyk7XHJcblx0Y29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX25hdl9kb3duJyk7XHJcblx0Y29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuXHRjb25zdCBoZWFkZXJNZW51TGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oZWFkZXJfX21lbnUtaXRlbSBhJyk7XHJcblxyXG5cdGJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHRidXJnZXIuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGVyX19idXJnZXJfYWN0aXZlJyk7XHJcblx0XHRidXJnZXJMaW5lLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fYnVyZ2VyLWxpbmVfYWN0aXZlJyk7XHJcblx0XHRtZW51LmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRlcl9fbmF2X2lzLWFjdGl2ZScpO1xyXG5cdFx0Ym9keS5jbGFzc0xpc3QudG9nZ2xlKCdzY3JvbGwtb2ZmJyk7XHJcblx0fSlcclxuXHJcblx0aGVhZGVyTWVudUxpbmsuZm9yRWFjaChlbCA9PiB7XHJcblx0XHRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcblx0XHRcdGJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2J1cmdlcl9hY3RpdmUnKTtcclxuXHRcdFx0bWVudS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX25hdl9pcy1hY3RpdmUnKTtcclxuXHRcdFx0YnVyZ2VyTGluZS5jbGFzc0xpc3QucmVtb3ZlKCdoZWFkZXJfX2J1cmdlci1saW5lX2FjdGl2ZScpO1xyXG5cdFx0XHRib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ3Njcm9sbC1vZmYnKVxyXG5cdFx0fSlcclxuXHR9KTtcclxuXHJcblxyXG5cdFxyXG5cdC8vIE1hcFxyXG5cdFxyXG5cdHltYXBzLnJlYWR5KGluaXQpO1xyXG5cdGZ1bmN0aW9uIGluaXQoKXtcclxuXHRcdHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIiwge1xyXG5cdFx0XHRcdGNlbnRlcjogWzU1Ljc2NjQxNDIyNTAyNDczLDM3LjYzNTExNTM0ODA0OTM0XSxcclxuXHRcdFx0XHR6b29tOiAxNVxyXG5cdFx0fSk7XHJcblx0XHR2YXIgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKFs1NS43Njk0MzAzNzQzMzIyMSwzNy42Mzk2ODYyODQ2MzM4NV0sIHt9LCB7XHJcblx0XHRcdGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcclxuXHRcdFx0aWNvbkltYWdlSHJlZjogJ2ltZy9jb250YWN0cy9lbGxpcHNlLnBuZycsXHJcblx0XHRcdGljb25JbWFnZVNpemU6IFsxMiwgMTJdLFxyXG5cdFx0XHRpY29uSW1hZ2VPZmZzZXQ6IFstMTAsIC0xMF1cclxuXHRcdH0pO1xyXG5cclxuXHRcdG15UGxhY2VtYXJrLmV2ZW50cy5hZGQoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGFjdHNfX2FkZHJlc3MnKS5jbGFzc0xpc3QudG9nZ2xlKCdjb250YWN0c19fYWRkcmVzc19hY3RpdmUnKVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0bXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xyXG5cdFx0bXlNYXAuY29udHJvbHMucmVtb3ZlKCdzZWFyY2hDb250cm9sJyk7XHJcblx0XHRteU1hcC5jb250cm9scy5yZW1vdmUoJ2dlb2xvY2F0aW9uQ29udHJvbCcpO1xyXG5cdFx0bXlNYXAuY29udHJvbHMucmVtb3ZlKCdyb3V0ZUJ1dHRvbkNvbnRyb2wnKTtcclxuXHRcdG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHJhZmZpY0NvbnRyb2wnKTtcclxuXHRcdG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHlwZVNlbGVjdG9yJyk7XHJcblx0XHRteU1hcC5jb250cm9scy5yZW1vdmUoJ2Z1bGxzY3JlZW5Db250cm9sJyk7XHJcblx0XHRteU1hcC5jb250cm9scy5yZW1vdmUoJ3pvb21Db250cm9sJyk7XHJcblx0XHRteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xyXG5cdH07XHJcblxyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0c19fYWRkcmVzcy1jbG9zZS1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3RzX19hZGRyZXNzJykuY2xhc3NMaXN0LnJlbW92ZSgnY29udGFjdHNfX2FkZHJlc3NfYWN0aXZlJyk7XHJcblx0fSk7XHJcblxyXG5cclxuXHQvLyBWYWxpZGF0ZSBmb3JtXHJcblxyXG5cdG5ldyB3aW5kb3cuSnVzdFZhbGlkYXRlKCcuYWJvdXRfX2Zvcm0nLCB7XHJcblx0XHRydWxlczoge1xyXG5cdFx0fSxcclxuXHRcdGNvbG9yV3Jvbmc6ICcjRjA2NjY2JyxcclxuXHRcdG1lc3NhZ2VzOiB7XHJcblx0XHRcdGVtYWlsOiAn0J3QtdC00L7Qv9GD0YHRgtC40LzRi9C5INGE0L7RgNC80LDRgicsXHJcblx0XHR9LFxyXG5cdFx0c3VibWl0SGFuZGxlcjogZnVuY3Rpb24odGhpc0Zvcm0pIHtcclxuXHRcdFx0bGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXNGb3JtKTtcclxuXHJcblx0XHRcdGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuXHJcblx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcclxuXHRcdFx0XHRcdGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ9Ce0YLQv9GA0LDQstC70LXQvdC+JylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHhoci5vcGVuKCdQT1NUJywgJ21haWwucGhwJywgdHJ1ZSk7XHJcblx0XHRcdHhoci5zZW5kKGZvcm1EYXRhKTtcclxuXHJcblx0XHRcdHRoaXNGb3JtLnJlc2V0KCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cdFxyXG5cclxuXHRuZXcgd2luZG93Lkp1c3RWYWxpZGF0ZSgnLmNvbnRhY3RzX19mb3JtJywge1xyXG5cdFx0cnVsZXM6IHtcclxuXHRcdFx0bmFtZToge1xyXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdG1pbkxlbmd0aDogMixcclxuXHRcdFx0XHRtYXhMZW5ndGg6IDMwLFxyXG5cdFx0XHRcdHN0cmVuZ3RoOiB7XHJcblx0XHRcdFx0XHRjdXN0b206ICdeW0EtWmEtetCQLdCv0LAt0Y/QgdGRXFxzXSdcclxuXHRcdFx0XHR9LFxyXG4gICAgICB9LFxyXG5cdFx0fSxcclxuXHRcdGNvbG9yV3Jvbmc6ICcjRjA2NjY2JyxcclxuXHRcdG1lc3NhZ2VzOiB7XHJcblx0XHRcdG5hbWU6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcclxuXHRcdFx0ZW1haWw6ICfQndC10LTQvtC/0YPRgdGC0LjQvNGL0Lkg0YTQvtGA0LzQsNGCJyxcclxuXHRcdH0sXHJcblx0XHRzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbih0aGlzRm9ybSkge1xyXG5cdFx0XHRsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpc0Zvcm0pO1xyXG5cclxuXHRcdFx0bGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG5cclxuXHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCkge1xyXG5cdFx0XHRcdFx0aWYgKHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn0J7RgtC/0YDQsNCy0LvQtdC90L4nKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0eGhyLm9wZW4oJ1BPU1QnLCAnbWFpbC5waHAnLCB0cnVlKTtcclxuXHRcdFx0eGhyLnNlbmQoZm9ybURhdGEpO1xyXG5cclxuXHRcdFx0dGhpc0Zvcm0ucmVzZXQoKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0XHJcblxyXG59KVxyXG4iXX0=
