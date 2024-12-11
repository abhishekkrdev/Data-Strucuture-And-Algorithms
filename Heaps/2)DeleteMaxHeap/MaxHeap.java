class MaxHeap {
    private int[] heap;
    private int size;
    private int capacity;

    // Constructor
    public MaxHeap(int capacity) {
        this.capacity = capacity;
        this.heap = new int[capacity];
        this.size = 0;
    }

    // Insert a value into the heap
    public void insert(int value) {
        if (size == capacity) {
            System.out.println("Heap is full!");
            return;
        }
        heap[size] = value; // Place the value at the end
        size++;
        heapifyUp(size - 1); // Fix the heap
    }

    // Heapify up to maintain the max heap property
    private void heapifyUp(int index) {
        int parentIndex = (index - 1) / 2;

        while (index > 0 && heap[index] > heap[parentIndex]) {
            swap(index, parentIndex);
            index = parentIndex;
            parentIndex = (index - 1) / 2;
        }
    }

    // Delete the root (maximum element)
    public int delete() {
        if (size == 0) {
            System.out.println("Heap is empty!");
            return -1; // Return a sentinel value for empty heap
        }

        int max = heap[0]; // Root value to be removed

        if (size == 1) {
            size--;
            return max; // If only one element, just reduce size
        }

        // Replace root with the last element and reduce size
        heap[0] = heap[size - 1];
        size--;
        heapifyDown(0); // Fix the heap

        return max; // Return the removed element
    }

    // Heapify down to maintain the max heap property
    private void heapifyDown(int index) {
        int largest = index;
        int leftChild = 2 * index + 1;
        int rightChild = 2 * index + 2;

        // Check if the left child is larger
        if (leftChild < size && heap[leftChild] > heap[largest]) {
            largest = leftChild;
        }

        // Check if the right child is larger
        if (rightChild < size && heap[rightChild] > heap[largest]) {
            largest = rightChild;
        }

        // If largest is not the current index, swap and continue heapifying
        if (largest != index) {
            swap(index, largest);
            heapifyDown(largest);
        }
    }

    // Swap two elements in the heap
    private void swap(int index1, int index2) {
        int temp = heap[index1];
        heap[index1] = heap[index2];
        heap[index2] = temp;
    }

    // Print the heap
    public void printHeap() {
        for (int i = 0; i < size; i++) {
            System.out.print(heap[i] + " ");
        }
        System.out.println();
    }

    // Main method to demonstrate the functionality
    public static void main(String[] args) {
        MaxHeap maxHeap = new MaxHeap(10);

        // Insert nodes
        maxHeap.insert(10);
        maxHeap.insert(20);
        maxHeap.insert(15);
        maxHeap.insert(30);
        maxHeap.insert(40);

        // Print the heap
        System.out.println("Heap before deletion:");
        maxHeap.printHeap(); // Output: [40, 30, 15, 10, 20]

        // Delete the root
        System.out.println("Deleted root: " + maxHeap.delete()); // Output: Deleted root: 40

        // Print the heap after deletion
        System.out.println("Heap after deletion:");
        maxHeap.printHeap(); // Output: [30, 20, 15, 10]
    }
}
