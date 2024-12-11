// Node class
class Node {
    constructor(data) {
        this.data = data; // Node's data
        this.next = null; // Pointer to the next node
    }
}

// LinkedList class
class LinkedList {
    constructor() {
        this.head = null; // Head of the list
    }

    // Insert a node at the beginning
    insertAtBeginning(data) {
        const newNode = new Node(data); // Create a new node
        newNode.next = this.head; // Link the new node to the current head
        this.head = newNode; // Update the head to the new node
    }

    // Insert a node at the end
    insertAtEnd(data) {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode; // If the list is empty, make the new node the head
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next; // Traverse to the last node
        }
        current.next = newNode; // Link the last node to the new node
    }

    // Method to insert at a specific position iteratively
    insertAtPosition(data, position) {
        // Create the new node to be inserted
        const newNode = new Node(data);

        // If inserting at position 0, make the new node the head
        if (position === 0) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        let current = this.head;
        let currentPosition = 0;

        // Traverse the list to find the position before where we want to insert
        while (current !== null && currentPosition < position - 1) {
            current = current.next;
            currentPosition++;
        }

        // If the position is valid (within the bounds of the list)
        if (current !== null) {
            // Insert the new node at the desired position
            newNode.next = current.next;
            current.next = newNode;
        } else {
            console.log("Position out of bounds");
        }
    }

    // Display the linked list
    display() {
        let current = this.head;
        let result = "";
        while (current) {
            result += current.data + " -> ";
            current = current.next;
        }
        console.log(result + "null");
    }
}

// Example usage
const list = new LinkedList();

// Add at the beginning
list.addAtBeginning(30);
list.addAtBeginning(20);
list.addAtBeginning(10);
console.log("After adding at the beginning:");
list.display();

// Add at the end
list.addAtEnd(40);
list.addAtEnd(50);
console.log("After adding at the end:");
list.display();
