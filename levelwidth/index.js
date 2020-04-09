// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
	const buff = [root, "stop"];
	const result = [0];
	while (buff.length > 1) {
		let node = buff.shift();
		if (node === "stop") {
			buff.push("stop");
			result.push(0);
		} else {
			buff.push(...node.children);
			result[result.length - 1]++;
		}
	}
	return result;
}

module.exports = levelWidth;
