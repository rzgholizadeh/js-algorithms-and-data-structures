// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
	const charsCount = {};
	let maxCount = -1;
	let result="";
	for (let char of str) {
		charsCount[char] = charsCount[char] + 1 || 1;
		if (maxCount < charsCount[char]) {
			maxChar = charsCount[char];
			result = char;
		}
	}
	return result;
}

module.exports = maxChar;
