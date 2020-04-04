// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
	const reveresed = [];
	for (let index = str.length - 1; index >= 0; index--) {
		reveresed.push(str[index]);
	}
	return reveresed.join("");
}
module.exports = reverse;
