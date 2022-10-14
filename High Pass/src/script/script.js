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
