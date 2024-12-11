
// LinkedList class
class LinkedList {
    // Recursive method to convert array to linked list
    public Node arrayToLinkedList(int[] arr, int index) {
        // Base case: if the index is out of bounds, return null
        if (index >= arr.length) {
            return null;
        }

        // Create a new node for the current element
        Node node = new Node(arr[index]);

        // Recursively set the next property
        node.next = arrayToLinkedList(arr, index + 1);

        // Return the current node
        return node;
    }

    // Method to display the linked list
    public void display(Node head) {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }
}

// Main class to test the implementation
class Main {
    public static void main(String[] args) {
        int[] array = { 10, 20, 30, 40, 50 };

        LinkedList linkedList = new LinkedList();
        Node head = linkedList.arrayToLinkedList(array, 0);

        System.out.println("Linked List:");
        linkedList.display(head);
    }
}

// Node class
class Node {
    int data;
    Node next;

    // Constructor
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}
