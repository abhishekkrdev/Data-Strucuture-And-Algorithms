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
        this.heap.push(value); // Add value to the end
        this.heapifyUp(this.heap.length - 1); // Fix heap
    }

    // Heapify up to maintain the max heap property
    heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);

        while (index > 0 && this.heap[index] > this.heap[parentIndex]) {
            this.swap(index, parentIndex);
            index = parentIndex;
            parentIndex = Math.floor((index - 1) / 2);
        }
    }

    // Delete the root (maximum element)
    delete() {
        if (this.heap.length === 0) {
            console.log("Heap is empty!");
            return null;
        }

        const max = this.heap[0]; // Root value to be removed

        if (this.heap.length === 1) {
            this.heap.pop(); // Only one element
            return max;
        }

        // Move the last element to the root and reduce heap size
        this.heap[0] = this.heap.pop();
        this.heapifyDown(0); // Fix the heap

        return max; // Return the removed element
    }

    // Heapify down to maintain the max heap property
    heapifyDown(index) {
        let largest = index;
        const leftChild = 2 * index + 1;
        const rightChild = 2 * index + 2;

        // Check if left child is larger than the current largest
        if (
            leftChild < this.heap.length &&
            this.heap[leftChild] > this.heap[largest]
        ) {
            largest = leftChild;
        }

        // Check if right child is larger than the current largest
        if (
            rightChild < this.heap.length &&
            this.heap[rightChild] > this.heap[largest]
        ) {
            largest = rightChild;
        }

        // If largest is not the current index, swap and continue heapifying
        if (largest !== index) {
            this.swap(index, largest);
            this.heapifyDown(largest);
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
console.log("Heap before deletion:");
maxHeap.printHeap(); // Output: [40, 30, 15, 10, 20]

// Delete the root
console.log("Deleted root:", maxHeap.delete()); // Output: Deleted root: 40

// Print the heap after deletion
console.log("Heap after deletion:");
maxHeap.printHeap(); // Output: [30, 20, 15, 10]
