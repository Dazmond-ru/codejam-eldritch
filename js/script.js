//* Карты древних
const azathothCard = document.querySelector('.azathoth')
const cthulthuCard = document.querySelector('.cthulthu')
const iogSothothCard = document.querySelector('.iogSothoth')
const shubNiggurathCard = document.querySelector('.shubNiggurath')

let allCards

//* Текст с кол-вом карт
const dot1 = document.querySelector('.dot1')
const dot2 = document.querySelector('.dot2')
const dot3 = document.querySelector('.dot3')
const dot4 = document.querySelector('.dot4')
const dot5 = document.querySelector('.dot5')
const dot6 = document.querySelector('.dot6')
const dot7 = document.querySelector('.dot7')
const dot8 = document.querySelector('.dot8')
const dot9 = document.querySelector('.dot9')

import ancientsData from '../data/ancients.js'

//* Меню сложности
const difficultyList = document.querySelector('.difficulty-list')

function getAzathothCount() {
	dot1.textContent = 1
	dot2.textContent = 2
	dot3.textContent = 1
	dot4.textContent = 2
	dot5.textContent = 3
	dot6.textContent = 1
	dot7.textContent = 2
	dot8.textContent = 4
	dot9.textContent = 0
}

function getCthulthuCount() {
	dot1.textContent = 0
	dot2.textContent = 2
	dot3.textContent = 2
	dot4.textContent = 1
	dot5.textContent = 3
	dot6.textContent = 0
	dot7.textContent = 3
	dot8.textContent = 4
	dot9.textContent = 0
}

function getIogSothothCount() {
	dot1.textContent = 0
	dot2.textContent = 2
	dot3.textContent = 1
	dot4.textContent = 2
	dot5.textContent = 3
	dot6.textContent = 1
	dot7.textContent = 3
	dot8.textContent = 4
	dot9.textContent = 0
}

function getIogshubNiggurathCount() {
	dot1.textContent = 1
	dot2.textContent = 2
	dot3.textContent = 1
	dot4.textContent = 3
	dot5.textContent = 2
	dot6.textContent = 1
	dot7.textContent = 2
	dot8.textContent = 4
	dot9.textContent = 0
}

azathothCard.addEventListener('click', function () {
	azathothCard.classList.add('active')
	cthulthuCard.classList.remove('active')
	iogSothothCard.classList.remove('active')
	shubNiggurathCard.classList.remove('active')

	difficultyList.classList.remove('invisible')

	difficulty0.classList.remove('active')
	difficulty1.classList.remove('active')
	difficulty2.classList.remove('active')
	difficulty3.classList.remove('active')
	difficulty4.classList.remove('active')

	shuffleButton.classList.add('invisible')

	currentState.classList.add('invisible')
	deck.classList.add('invisible')
	lastСard.classList.add('invisible')
})

cthulthuCard.addEventListener('click', function () {
	cthulthuCard.classList.add('active')
	azathothCard.classList.remove('active')
	iogSothothCard.classList.remove('active')
	shubNiggurathCard.classList.remove('active')

	difficultyList.classList.remove('invisible')

	difficulty0.classList.remove('active')
	difficulty1.classList.remove('active')
	difficulty2.classList.remove('active')
	difficulty3.classList.remove('active')
	difficulty4.classList.remove('active')

	shuffleButton.classList.add('invisible')

	currentState.classList.add('invisible')
	deck.classList.add('invisible')
	lastСard.classList.add('invisible')
})

iogSothothCard.addEventListener('click', function () {
	iogSothothCard.classList.add('active')
	azathothCard.classList.remove('active')
	cthulthuCard.classList.remove('active')
	shubNiggurathCard.classList.remove('active')

	difficultyList.classList.remove('invisible')

	difficulty0.classList.remove('active')
	difficulty1.classList.remove('active')
	difficulty2.classList.remove('active')
	difficulty3.classList.remove('active')
	difficulty4.classList.remove('active')

	shuffleButton.classList.add('invisible')

	currentState.classList.add('invisible')
	deck.classList.add('invisible')
	lastСard.classList.add('invisible')
})

shubNiggurathCard.addEventListener('click', function () {
	shubNiggurathCard.classList.add('active')
	azathothCard.classList.remove('active')
	cthulthuCard.classList.remove('active')
	iogSothothCard.classList.remove('active')

	difficultyList.classList.remove('invisible')

	difficulty0.classList.remove('active')
	difficulty1.classList.remove('active')
	difficulty2.classList.remove('active')
	difficulty3.classList.remove('active')
	difficulty4.classList.remove('active')

	shuffleButton.classList.add('invisible')

	currentState.classList.add('invisible')
	deck.classList.add('invisible')
	lastСard.classList.add('invisible')
})

//* Кнопки сложности
const difficulty0 = document.querySelector('.difficulty0')
const difficulty1 = document.querySelector('.difficulty1')
const difficulty2 = document.querySelector('.difficulty2') //! средняя сложность
const difficulty3 = document.querySelector('.difficulty3')
const difficulty4 = document.querySelector('.difficulty4')

let difficultLevel

//* Блок счетчика карт
const currentState = document.querySelector('.current-state')

//* Кнопка перелистывания карты
const deck = document.querySelector('.deck')

//* Карта которая появляется
const lastСard = document.querySelector('.last-card')

//* Кнопка замешивания
const shuffleButton = document.querySelector('.shuffle-button')

difficulty0.addEventListener('click', function () {
	if (!difficulty0.classList.contains('active')) {
		difficulty0.classList.add('active')
		difficulty1.classList.remove('active')
		difficulty2.classList.remove('active')
		difficulty3.classList.remove('active')
		difficulty4.classList.remove('active')

		shuffleButton.classList.remove('invisible')

		currentState.classList.add('invisible')
		deck.classList.add('invisible')
		lastСard.classList.add('invisible')

		if (azathothCard.classList.contains('active')) {
			setTimeout(getAzathothCount, 500)
		} else if (cthulthuCard.classList.contains('active')) {
			setTimeout(getCthulthuCount, 500)
		} else if (iogSothothCard.classList.contains('active')) {
			setTimeout(getIogSothothCount, 500)
		} else {
			setTimeout(getIogshubNiggurathCount, 500)
		}

		difficultLevel = 'very-easy'
	}
})

difficulty1.addEventListener('click', function () {
	if (!difficulty1.classList.contains('active')) {
		difficulty0.classList.remove('active')
		difficulty1.classList.add('active')
		difficulty2.classList.remove('active')
		difficulty3.classList.remove('active')
		difficulty4.classList.remove('active')

		shuffleButton.classList.remove('invisible')

		currentState.classList.add('invisible')
		deck.classList.add('invisible')
		lastСard.classList.add('invisible')

		if (azathothCard.classList.contains('active')) {
			setTimeout(getAzathothCount, 500)
		} else if (cthulthuCard.classList.contains('active')) {
			setTimeout(getCthulthuCount, 500)
		} else if (iogSothothCard.classList.contains('active')) {
			setTimeout(getIogSothothCount, 500)
		} else {
			setTimeout(getIogshubNiggurathCount, 500)
		}

		difficultLevel = 'easy'
	}
})

difficulty2.addEventListener('click', function () {
	if (!difficulty2.classList.contains('active')) {
		difficulty0.classList.remove('active')
		difficulty1.classList.remove('active')
		difficulty2.classList.add('active')
		difficulty3.classList.remove('active')
		difficulty4.classList.remove('active')

		shuffleButton.classList.remove('invisible')

		currentState.classList.add('invisible')
		deck.classList.add('invisible')
		lastСard.classList.add('invisible')

		if (azathothCard.classList.contains('active')) {
			setTimeout(getAzathothCount, 500)
		} else if (cthulthuCard.classList.contains('active')) {
			setTimeout(getCthulthuCount, 500)
		} else if (iogSothothCard.classList.contains('active')) {
			setTimeout(getIogSothothCount, 500)
		} else {
			setTimeout(getIogshubNiggurathCount, 500)
		}

		difficultLevel = 'normal'
	}
})

difficulty3.addEventListener('click', function () {
	if (!difficulty3.classList.contains('active')) {
		difficulty0.classList.remove('active')
		difficulty1.classList.remove('active')
		difficulty2.classList.remove('active')
		difficulty3.classList.add('active')
		difficulty4.classList.remove('active')

		shuffleButton.classList.remove('invisible')

		currentState.classList.add('invisible')
		deck.classList.add('invisible')
		lastСard.classList.add('invisible')

		if (azathothCard.classList.contains('active')) {
			setTimeout(getAzathothCount, 500)
		} else if (cthulthuCard.classList.contains('active')) {
			setTimeout(getCthulthuCount, 500)
		} else if (iogSothothCard.classList.contains('active')) {
			setTimeout(getIogSothothCount, 500)
		} else {
			setTimeout(getIogshubNiggurathCount, 500)
		}

		difficultLevel = 'hard'
	}
})

difficulty4.addEventListener('click', function () {
	if (!difficulty4.classList.contains('active')) {
		difficulty0.classList.remove('active')
		difficulty1.classList.remove('active')
		difficulty2.classList.remove('active')
		difficulty3.classList.remove('active')
		difficulty4.classList.add('active')

		shuffleButton.classList.remove('invisible')

		currentState.classList.add('invisible')
		deck.classList.add('invisible')
		lastСard.classList.add('invisible')

		if (azathothCard.classList.contains('active')) {
			setTimeout(getAzathothCount, 500)
		} else if (cthulthuCard.classList.contains('active')) {
			setTimeout(getCthulthuCount, 500)
		} else if (iogSothothCard.classList.contains('active')) {
			setTimeout(getIogSothothCount, 500)
		} else {
			setTimeout(getIogshubNiggurathCount, 500)
		}

		difficultLevel = 'very-hard'
	}
})

shuffleButton.addEventListener('click', function () {
	shuffleButton.classList.add('invisible')

	currentState.classList.remove('invisible')
	deck.classList.remove('invisible')

	getShuffleAllCards()
})

//* Добавление всех карт в массивы

import cardsData from '../data/mythicCards/index.js'

function getShuffleAllCards() {
	let arrGreen = []
	let arrBrown = []
	let arrBlue = []

	const dot1Number = Number(dot1.textContent)
	const dot2Number = Number(dot2.textContent)
	const dot3Number = Number(dot3.textContent)
	const dot4Number = Number(dot4.textContent)
	const dot5Number = Number(dot5.textContent)
	const dot6Number = Number(dot6.textContent)
	const dot7Number = Number(dot7.textContent)
	const dot8Number = Number(dot8.textContent)
	const dot9Number = Number(dot9.textContent)

	function getCard() {
		if (difficultLevel === 'very-easy') {
			cardsData.forEach((el) => {
				if (el.color === 'green' && el.difficulty === 'easy') {
					arrGreen.push(el)
				} else if (el.color === 'brown' && el.difficulty === 'easy') {
					arrBrown.push(el)
				} else if (el.color === 'blue' && el.difficulty === 'easy') {
					arrBlue.push(el)
				}
			})
		} else if (difficultLevel === 'easy') {
			cardsData.forEach((el) => {
				if (el.color === 'green' && el.difficulty !== 'hard') {
					arrGreen.push(el)
				} else if (el.color === 'brown' && el.difficulty !== 'hard') {
					arrBrown.push(el)
				} else if (el.color === 'blue' && el.difficulty !== 'hard') {
					arrBlue.push(el)
				}
			})
		} else if (difficultLevel === 'normal') {
			cardsData.forEach((el) => {
				if (el.color === 'green') {
					arrGreen.push(el)
				} else if (el.color === 'brown') {
					arrBrown.push(el)
				} else {
					arrBlue.push(el)
				}
			})
		} else if (difficultLevel === 'hard') {
			cardsData.forEach((el) => {
				if (el.color === 'green' && el.difficulty !== 'easy') {
					arrGreen.push(el)
				} else if (el.color === 'brown' && el.difficulty !== 'easy') {
					arrBrown.push(el)
				} else if (el.color === 'blue' && el.difficulty !== 'easy') {
					arrBlue.push(el)
				}
			})
		} else if (difficultLevel === 'very-hard') {
			cardsData.forEach((el) => {
				if (el.color === 'green' && el.difficulty === 'hard') {
					arrGreen.push(el)
				} else if (el.color === 'brown' && el.difficulty === 'hard') {
					arrBrown.push(el)
				} else if (el.color === 'blue' && el.difficulty === 'hard') {
					arrBlue.push(el)
				}
			})
		}
	}

	getCard()

	if (
		arrGreen.length < dot1Number + dot4Number + dot7Number ||
		arrGreen.length < dot2Number + dot5Number + dot8Number
	) {
		let arrGreenNormal = []
		let arrBrownNormal = []

		cardsData.forEach((el) => {
			if (el.color === 'green' && el.difficulty === 'normal') {
				arrGreenNormal.push(el)
			} else if (el.color === 'brown' && el.difficulty === 'normal') {
				arrBrownNormal.push(el)
			}
		})
		shuffle(arrGreenNormal)
		shuffle(arrBrownNormal)

		for (
			let i = 0;
			arrGreen.length < dot1Number + dot4Number + dot7Number;
			i++
		) {
			arrGreen.push(arrGreenNormal[i])
		}

		for (
			let j = 0;
			arrBrown.length < dot2Number + dot5Number + dot8Number;
			j++
		) {
			arrBrown.push(arrBrownNormal[j])
		}
	}

	function shuffle(arr) {
		arr.sort(() => Math.random() - 0.5)
	}

	shuffle(arrGreen)
	shuffle(arrBrown)
	shuffle(arrBlue)

	const shuffleThirdLine = arrBlue
		.slice(0, dot9Number)
		.concat(arrBrown.slice(0, dot8Number))
		.concat(arrGreen.slice(0, dot7Number))

	const shuffleSecondLine = arrBlue
		.slice(dot9Number, dot9Number + dot6Number)
		.concat(arrBrown.slice(dot8Number, dot8Number + dot5Number))
		.concat(arrGreen.slice(dot7Number, dot7Number + dot4Number))

	const shuffleFirstLine = arrBlue
		.slice(dot9Number + dot6Number, dot9Number + dot6Number + dot3Number)
		.concat(
			arrBrown.slice(
				dot8Number + dot5Number,
				dot8Number + dot5Number + dot2Number
			)
		)
		.concat(
			arrGreen.slice(
				dot7Number + dot4Number,
				dot7Number + dot4Number + dot1Number
			)
		)

	shuffle(shuffleThirdLine)
	shuffle(shuffleSecondLine)
	shuffle(shuffleFirstLine)

	allCards = shuffleThirdLine.concat(shuffleSecondLine).concat(shuffleFirstLine)
}

//* Перебор карт по нажатию

function deckClick() {
	if (allCards.length > 0) {
		lastСard.style.backgroundImage = allCards[allCards.length - 1].src
		if (allCards[allCards.length - 1].color === 'green') {
			if (dot1.textContent !== '0') {
				dot1.textContent--
			} else if (dot4.textContent !== '0') {
				dot4.textContent--
			} else if (dot7.textContent !== '0') {
				dot7.textContent--
			}
		} else if (allCards[allCards.length - 1].color === 'brown') {
			if (dot2.textContent !== '0') {
				dot2.textContent--
			} else if (dot5.textContent !== '0') {
				dot5.textContent--
			} else if (dot8.textContent !== '0') {
				dot8.textContent--
			}
		} else if (allCards[allCards.length - 1].color === 'blue') {
			if (dot3.textContent !== '0') {
				dot3.textContent--
			} else if (dot6.textContent !== '0') {
				dot6.textContent--
			} else if (dot9.textContent !== '0') {
				dot9.textContent--
			}
		}
		allCards.pop()
	} else {
		lastСard.classList.add('invisible')
		alert('Спасибо, что дошел до конца😀')

		currentState.classList.add('invisible')
		deck.classList.add('invisible')
		lastСard.classList.add('invisible')

		difficulty0.classList.remove('active')
		difficulty1.classList.remove('active')
		difficulty2.classList.remove('active')
		difficulty3.classList.remove('active')
		difficulty4.classList.remove('active')
	}
}

deck.addEventListener('click', function () {
	lastСard.classList.remove('invisible')
	deckClick()
})
