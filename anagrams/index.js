// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
	strMapA = generateStringMap(stringA);
	strMapB = generateStringMap(stringB);
	let isAnagram = true;
	if (Object.keys(strMapA).length !== Object.keys(strMapB).length) {
		return false;
	}
	for (let char in strMapA) {
		if (strMapA[char] !== strMapB[char]) {
			isAnagram = false;
		}
	}
	return isAnagram;
}

function generateStringMap(str) {
	const stringMap = {};
	for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
		stringMap[char] = stringMap[char] + 1 || 1;
	}
	return stringMap;
}

module.exports = anagrams;
