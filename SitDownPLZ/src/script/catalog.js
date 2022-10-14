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