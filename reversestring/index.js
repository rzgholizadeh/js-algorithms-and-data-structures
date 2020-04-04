// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	return str.split("").reduce((reveresed, char) => char + reveresed, "");
}

module.exports = reverse;

function reverseOne(str) {
	let reveresed = "";
	for (let char of str) {
		reveresed = char + reveresed;
	}
	return reveresed;
}
function reverseTwo(str) {
	return str
		.split("")
		.reverse()
		.join("");
}

function reverseThree(str) {
	return str.split("").reduce((reveresed, char) => char + reveresed, "");
}
