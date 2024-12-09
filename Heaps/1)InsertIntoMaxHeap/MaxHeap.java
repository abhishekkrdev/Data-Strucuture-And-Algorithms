// Insert N Nodes in a max heap. 
// Up heapify needs to be done.
// T(n) = O(n log n)

public class MaxHeap {
    private int[] heap;
    private int size;
    private int capacity;

    // Constructor
    public MaxHeap(int capacity) {
        this.capacity = capacity;
        heap = new int[capacity];
        size = 0;
    }

    // Insert a value into the heap
    public void insert(int value) {
        if (size == capacity) {
            System.out.println("Heap is full!");
            return;
        }
        // Add the new value at the end of the heap
        heap[size] = value;
        size++;
        // Heapify up to maintain the max heap property
        heapifyUp(size - 1);
    }

    // Heapify up to maintain the max heap property
    private void heapifyUp(int index) {
        int parentIndex = (index - 1) / 2;

        // While the current node is greater than its parent, swap them
        while (index > 0 && heap[index] > heap[parentIndex]) {
            swap(index, parentIndex);
            index = parentIndex;
            parentIndex = (index - 1) / 2;
        }
    }

    // Swap two elements in the array
    private void swap(int index1, int index2) {
        int temp = heap[index1];
        heap[index1] = heap[index2];
        heap[index2] = temp;
    }

    // Print the heap as an array
    public void printHeap() {
        for (int i = 0; i < size; i++) {
            System.out.print(heap[i] + " ");
        }
        System.out.println();
    }

    // Main method to demonstrate the MaxHeap functionality
    public static void main(String[] args) {
        MaxHeap maxHeap = new MaxHeap(10);

        // Insert nodes
        maxHeap.insert(10);
        maxHeap.insert(20);
        maxHeap.insert(15);
        maxHeap.insert(30);
        maxHeap.insert(40);

        // Print the heap
        maxHeap.printHeap(); // Output: 40 30 15 10 20
    }
}
