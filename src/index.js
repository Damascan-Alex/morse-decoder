const MORSE_TABLE = {
	'.-': 'a',
	'-...': 'b',
	'-.-.': 'c',
	'-..': 'd',
	'.': 'e',
	'..-.': 'f',
	'--.': 'g',
	'....': 'h',
	'..': 'i',
	'.---': 'j',
	'-.-': 'k',
	'.-..': 'l',
	'--': 'm',
	'-.': 'n',
	'---': 'o',
	'.--.': 'p',
	'--.-': 'q',
	'.-.': 'r',
	'...': 's',
	'-': 't',
	'..-': 'u',
	'...-': 'v',
	'.--': 'w',
	'-..-': 'x',
	'-.--': 'y',
	'--..': 'z',
	'.----': '1',
	'..---': '2',
	'...--': '3',
	'....-': '4',
	'.....': '5',
	'-....': '6',
	'--...': '7',
	'---..': '8',
	'----.': '9',
	'-----': '0',
}

function MorseTableToBinary(table) {
	let objKeys = Object.keys(table)
	let objValues = Object.values(table)

	let binary_objKeys = toBinnary(objKeys, '.', '-')

	let BINARY_MORSE = {}
	binary_objKeys.forEach((key, i) => (BINARY_MORSE[key] = objValues[i]))

	BINARY_MORSE['**********'] = ' ' // Add extra line to handle the space
	return BINARY_MORSE
}

function toBinnary(array, dots, dashes) {
	return array.map((word) => {
		let codeX = []
		let split = word.split('')
		split.map((leter) => {
			if (leter === dots) {
				codeX.push('10')
			} else if (leter === dashes) {
				codeX.push('11')
			}
		})
		// Transform binary to 10 digits
		//return codeX.join("") + "0".repeat(10 - codeX.length * 2);
		return '0'.repeat(10 - codeX.length * 2) + codeX.join('')
	})
}

let binaryMorse = MorseTableToBinary(MORSE_TABLE)

function decode(expr) {
	let decoded = []
	//Split the string to array
	let splitedString = expr.match(/.{1,10}/g)
	splitedString.map((m) => {
		decoded.push(binaryMorse[m])
	})
	return decoded.join('')
}

module.exports = {
	decode,
}
