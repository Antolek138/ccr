document.addEventListener('DOMContentLoaded', () => {
	const body = document.querySelector('body')
	const menu = document.querySelector('.nav__menu')
	const bars = document.querySelector('.nav__bars')
	const barsLine = document.querySelectorAll('.nav__bars-line')
	const allNavItems = document.querySelectorAll('.nav__menu-item')

	const opinionBtnOne = document.querySelector('.opinion__btn--one')
	const opinionBtnTwo = document.querySelector('.opinion__btn--two')
	const opinionBtnThree = document.querySelector('.opinion__btn--three')
	const opinionAllBtn = document.querySelectorAll('.opinion__btn')
	const opinionContainer = document.querySelector('.opinion__slider')
	const opinionSlide = document.querySelectorAll('.opinion__card')
	const opinionWidth = opinionSlide[0].clientWidth
	const totalOpinion = opinionSlide.length
	let startIndex = 0

	const dishesItems = document.querySelectorAll('.dishes__item')
	const dishesContainer = document.querySelector('.dishes__slider')
	const dishesTexts = document.querySelectorAll('.dishes__text')
	const dishesWidth = dishesTexts[0].clientWidth
	const totalDishes = dishesTexts.length
	let startIndexDishes = 0

	const footerYear = document.querySelector('.footer__year')

	const showMenu = () => {
		menu.classList.toggle('nav__menu--active')
		bars.classList.toggle('nav__bars--active')

		allNavItems.forEach(link =>
			link.addEventListener('click', () => {
				menu.classList.remove('nav__menu--active')
				bars.classList.remove('nav__bars--active')
			})
		)
	}

	const opinionSlider = index => {
		startIndex = (index + totalOpinion) % totalOpinion

		const displacement = -startIndex * opinionWidth
		opinionContainer.style.transform = `translateX(${displacement}px)`

		opinionAllBtn.forEach((btn, i) => {
			if (i === startIndex) {
				btn.classList.add('opinion__btn--active')
			} else {
				btn.classList.remove('opinion__btn--active')
			}
		})
	}

	const blockedBody = () => {
		if (body.classList.contains('unlocked')) {
			body.classList.remove('unlocked')
			body.classList.add('locked')
		} else {
			body.classList.remove('locked')
			body.classList.add('unlocked')
		}
	}

	const dishesSlider = index => {
		startIndexDishes = (index + totalDishes) % totalDishes

		const displacement = -startIndexDishes * dishesWidth
		dishesContainer.style.transform = `translateX(${displacement}px)`

		dishesItems.forEach((item, i) => {
			if (i === startIndexDishes) {
				item.classList.add('dishes__item--active')
			} else {
				item.classList.remove('dishes__item--active')
			}
		})
	}

	bars.addEventListener('click', () => {
		showMenu(), blockedBody()
	})

	const footerYears = () => {
		const date = new Date().getFullYear()
		footerYear.textContent = date
	}

	footerYears()

	dishesItems[0].addEventListener('click', () => dishesSlider(0))
	dishesItems[1].addEventListener('click', () => dishesSlider(1))
	dishesItems[2].addEventListener('click', () => dishesSlider(2))
	dishesItems[3].addEventListener('click', () => dishesSlider(3))
	dishesItems[4].addEventListener('click', () => dishesSlider(4))
	dishesItems[5].addEventListener('click', () => dishesSlider(5))

	opinionBtnOne.addEventListener('click', () => opinionSlider(0))
	opinionBtnTwo.addEventListener('click', () => opinionSlider(1))
	opinionBtnThree.addEventListener('click', () => opinionSlider(2))
})
