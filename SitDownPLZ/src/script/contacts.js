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