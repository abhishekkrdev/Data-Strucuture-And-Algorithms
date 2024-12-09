class MaxHeap {
    constructor(capacity) {
        this.heap = [];
        this.capacity = capacity || Infinity;
    }

    // Insert a new value into the heap
    insert(value) {
        if (this.heap.length >= this.capacity) {
            console.log("Heap is full!");
            return;
        }
        // Add the new value to the end of the heap
        this.heap.push(value);
        // Heapify up to maintain the max heap property
        this.heapifyUp(this.heap.length - 1);
    }

    // Heapify up to maintain the max heap property
    heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);

        // While the current node is greater than its parent, swap them
        while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    // Swap two elements in the heap
    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // Print the heap (optional, for debugging purposes)
    printHeap() {
        console.log(this.heap);
    }
}

// Example usage
const maxHeap = new MaxHeap(10);

// Insert nodes
maxHeap.insert(10);
maxHeap.insert(20);
maxHeap.insert(15);
maxHeap.insert(30);
maxHeap.insert(40);

// Print the heap
maxHeap.printHeap(); // Output: [ 40, 30, 15, 10, 20 ]
