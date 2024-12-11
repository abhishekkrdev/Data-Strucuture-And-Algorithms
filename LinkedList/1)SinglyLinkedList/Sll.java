class Node {
    int data;
    Node next;

    // Constructor
    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    Node head; // Head of the list

    public LinkedList() {
        this.head = null;
    }

    // Method to insert a new node at the beginning
    public void insertAtBeginning(int data) {
        Node newNode = new Node(data);
        newNode.next = this.head; // Point the new node to the current head
        this.head = newNode; // Update head to the new node
    }

    // Method to insert a new node at the end
    public void insertAtEnd(int data) {
        Node newNode = new Node(data);
        if (this.head == null) {
            this.head = newNode;
        } else {
            Node current = head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Method to insert at a specific position iteratively
    public void insertAtPosition(int data, int position) {
        // Create the new node to be inserted
        Node newNode = new Node(data);

        // If inserting at position 0, make the new node the head
        if (position == 0) {
            newNode.next = head;
            head = newNode;
            return;
        }

        Node current = head;
        int currentPosition = 0;

        // Traverse the list to find the position before where we want to insert
        while (current != null && currentPosition < position - 1) {
            current = current.next;
            currentPosition++;
        }

        // If the position is valid (within the bounds of the list)
        if (current != null) {
            // Insert the new node at the desired position
            newNode.next = current.next;
            current.next = newNode;
        } else {
            System.out.println("Position out of bounds");
        }
    }

    // Method to display the linked list
    public void display() {
        Node current = head;
        while (current != null) {
            System.out.print(current.data + " -> ");
            current = current.next;
        }
        System.out.println("null");
    }

    // Method to delete a node with a specific value
    public void delete(int value) {
        if (head == null) {
            System.out.println("List is empty.");
            return;
        }
        if (head.data == value) {
            head = head.next;
            return;
        }
        Node current = head;
        while (current.next != null && current.next.data != value) {
            current = current.next;
        }
        if (current.next == null) {
            System.out.println("Value not found.");
        } else {
            current.next = current.next.next;
        }
    }
}

class Main {
    public static void main(String[] args) {
        LinkedList list = new LinkedList();
        list.insertAtEnd(10);
        list.insertAtEnd(20);
        list.insertAtEnd(30);

        System.out.println("Original List:");
        list.display();

        list.delete(20);
        System.out.println("After Deletion:");
        list.display();
    }
}
