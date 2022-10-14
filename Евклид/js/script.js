window.addEventListener('DOMContentLoaded', function() {
	document.querySelector('#burger').addEventListener('click', function() {
		document.querySelector('#menu').classList.toggle('is-active');
		document.querySelector('#burger').classList.toggle('header__burger_active');
	});

	// Swiper

	const heroSlider = document.querySelector('.hero__swiper');

	let swiperHero = new Swiper(heroSlider, {
		slidesPerView: 1,
		effect: 'fade',
		autoplay: {
			delay: 2000,
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	});

	// Accordion

	$( function() {
		$("#accordion").accordion({
			active: true,
			collapsible: true,
			animate: 200,
			header: "div",
		});
	} );

	window.onresize = function( event ) {
		$('#accordion').accordion("refresh");
	};

	

	// document.querySelectorAll('.questions__item').forEach(function(qButtonTurn){
	// 	qButtonTurn.addEventListener('click', function (ev){
	// 		ev.target.querySelector('.questions__btn').classList.toggle('questions__btn-active')
	// 	});
	// });

	document.addEventListener('click', function(ev){
		let questionsItem = ev.target.closest('.questions__item')
		if(questionsItem){
			let questionsBtn = questionsItem.querySelector('.questions__btn');
			if(questionsBtn.classList.contains('questions__btn-active')){
				questionsBtn.classList.remove('questions__btn-active');
			} else {
				document.querySelectorAll('.questions__btn').forEach(el => {el.classList.remove('questions__btn-active')})
				questionsBtn.classList.add('questions__btn-active');
			}
		}
	})

	// Work-tabs

	document.querySelectorAll('.work__step-link').forEach(function(workTabs){
		workTabs.addEventListener('click', function(event) {
			const path = event.currentTarget.dataset.path
			document.querySelectorAll('.work__container').forEach(function(tabContent) {
				tabContent.classList.remove('work__container_active')
			});
			document.querySelector(`[data-target="${path}"]`).classList.add('work__container_active');
			// const targetos = event.currentTarget.dataset.target
			document.querySelectorAll('.work__step-link').forEach(function(tabStep) {
				tabStep.classList.remove('work__step-link_active')
			});
			document.querySelector(`[data-path="${path}"]`).classList.add('work__step-link_active')
		});
	});
});

