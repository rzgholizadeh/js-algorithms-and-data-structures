// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
	constructor(data, next = null) {
		this.data = data;
		this.next = next;
	}
}

class LinkedList {
	constructor() {
		this.head = null;
	}

	insertFirst(data) {
		this.head = new Node(data, this.head);
	}

	size() {
		let node = this.head;
		let count = 0;
		while (node) {
			node = node.next;
			count++;
		}
		return count;
	}
}

module.exports = { Node, LinkedList };