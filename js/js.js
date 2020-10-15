const slider = document.querySelector('.swiper-container');

let mySwiper = new Swiper (slider, {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	breakpoints: {
		480: {
			slidesPerView: 2,
			spaceBetween: 30,
		},
		1026: {
			slidesPerView: 3,
			spaceBetween: 30,
		},
	},
});

$(document).ready(function(){

	function showpopup(){
		$('.popup-container').fadeIn(200)
		$('html').addClass('scroll')
	}

	function hidepopup(){
		$('.popup-container').fadeOut(200)
		$('html').removeClass('scroll')
		$('.popup__success').remove()
		$('.popup').fadeIn(500)
	}

	function openMenu(e){
		e.preventDefault()
		$(this).toggleClass('header__burger-active')
		$('.header__menu').slideToggle(200)
	}

	function scrollMenu(event){
		event.preventDefault();

		let href = $(this).attr('href');

		let offset = $(href).offset().top;

		$('body,html').animate({
			scrollTop: offset,
		}, 700);
	}

	$(".popup-tel").mask("+7(999) 999-9999");

	$('.header__burger').on('click', openMenu);
		$(window).on('resize', function(){
			if($(window).width()>1025){
				$('.header__menu').css('display', 'block')
			} else {
				$('.header__menu').css('display', 'none')
			};
		});

	$('.main-button, .request-a-call, .request-a-call_telephone').on('click', showpopup);

	$('form').each(function(){
		$(this).validate({
			errorPlacement(error, element){
				return true;
			},
			focusInvalid: false,
			rules: {
				name: {
					required: true,
				},
				email: {
					required: true,
				},
				tel: {
					required: true,
				},
			},
			submitHandler(form) {
				let th = $(form);

				$.ajax({
					type: 'POST',
					url: '../php/mail.php',
					data: th.serialize(),
				}).done(()=>{

					console.log('Отправлено')

					th.trigger('reset');
				});

				return false;
			}
		});
	});
	$('.popup-container').on('click', function(e){
		// console.log($(this))
		if (e.target == $('.popup-container')[0]) {
			hidepopup()
		}
		
	});
		$('.popup-cross').on('click', hidepopup);

	$('.menu-item').on('click', scrollMenu);
	
	$('.about-me__attribut').removeClass('about-me__anim');

});