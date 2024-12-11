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

    // Method to delete a node from the start (head)
    deleteFromStart() {
        if (!this.head) {
            console.log("The list is empty.");
            return;
        }
        // Move the head to the next node, effectively removing the first node
        this.head = this.head.next;
    }

    // Method to delete the last node
    deleteLastNode() {
        if (!this.head) {
            console.log("The list is empty.");
            return;
        }
        // If the list has only one node, set head to null
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let current = this.head;
        // Traverse the list to find the second-to-last node
        while (current.next && current.next.next) {
            current = current.next;
        }

        // Remove the last node by setting the second-to-last node's next to null
        current.next = null;
    }

    // Method to delete a node with a specific value
    deleteNodeByValue(value) {
        if (!this.head) {
            console.log("The list is empty.");
            return;
        }

        // If the node to be deleted is the head node
        if (this.head.data === value) {
            this.head = this.head.next;
            return;
        }

        // Traverse the list to find the node to delete
        let current = this.head;
        while (current.next && current.next.data !== value) {
            current = current.next;
        }

        // If the node to be deleted is found
        if (current.next) {
            current.next = current.next.next;
        } else {
            console.log("Node with value " + value + " not found.");
        }
    }
    // Recursive method to delete node by value

    deleteNodeByValueRecursively(head, value) {
        // Base case: If head is null (empty list)
        if (head === null) {
            console.log("The list is empty.");
            return null;
        }

        // If the node to be deleted is the head node
        if (head.data === value) {
            return head.next; // Skip the node by returning the next node
        }

        // Recursive call for the rest of the list
        head.next = this.deleteNodeByValueRecursively(head.next, value);
        return head;
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
