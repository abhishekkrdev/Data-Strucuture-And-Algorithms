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

    // Recursive method to convert an array to a linked list
    arrayToLinkedList(arr, index = 0) {
        // Base case: if index is out of bounds, return null
        if (index >= arr.length) {
            return null;
        }

        // Create a new node with the current element
        const node = new Node(arr[index]);

        // Recursively set the next property
        node.next = this.arrayToLinkedList(arr, index + 1);

        // Return the current node
        return node;
    }

    // Recursive method to insert elements at the start
    arrayToLinkedListInsertAtStart(arr, index = 0) {
        // Base case: if index is out of bounds, return the current head
        if (index >= arr.length) {
            return this.head;
        }

        // Create a new node with the current array element
        const newNode = new Node(arr[index]);

        // Recursively call for the next index
        newNode.next = this.arrayToLinkedListInsertAtStart(arr, index + 1);

        // Update the head to the new node
        this.head = newNode;

        // Return the updated head
        return this.head;
    }

    // Initialize the linked list from an array
    initializeFromArray(arr) {
        this.head = this.arrayToLinkedList(arr); // Populate the head using recursion
    }

    // Method to display the linked list
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
const array = [10, 20, 30, 40, 50];
const linkedList = new LinkedList();

// Initialize the linked list with the array
linkedList.initializeFromArray(array);

// Display the linked list
console.log("Linked List:");
linkedList.display();
