// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = "") {
	// base case
	if (n === row) {
		return;
	}
	// when a row is done
	if (n === stair.length) {
		console.log(stair);
		steps(n, row + 1);
		return;
	}
	// constructing the row
	if (stair.length <= row) {
		stair += "#";
	} else {
		stair += " ";
	}
	steps(n, row, stair);
}

module.exports = steps;

function stepsOne(n) {
	for (let i = 1; i <= n; i++) {
		console.log(stepGenerator(i, n));
	}
}

function stepGenerator(num, max) {
	let str = "";
	for (let i = 0; i < num; i++) {
		str += "#";
	}
	for (let i = 0; i < max - num; i++) {
		str += " ";
	}
	return str;
}

function stepsTwo(n) {
	for (let row = 0; row < n; row++) {
		let stair = "";
		for (let column = 0; column < n; column++) {
			if (column <= row) {
				stair += "#";
			} else {
				stair += " ";
			}
		}
		console.log(stair);
	}
}

function stepsThree(n, row = 0, stair = "") {
	// base case
	if (n === row) {
		return;
	}
	// when a row is done
	if (n === stair.length) {
		console.log(stair);
		steps(n, row + 1);
		return;
	}
	// constructing the row
	if (stair.length <= row) {
		stair += "#";
	} else {
		stair += " ";
	}
	steps(n, row, stair);
}
