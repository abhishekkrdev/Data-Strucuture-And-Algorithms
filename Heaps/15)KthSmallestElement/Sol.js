// https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // Parent index of the current index
    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    // Left child index of the current index
    leftChild(index) {
        return 2 * index + 1;
    }

    // Right child index of the current index
    rightChild(index) {
        return 2 * index + 2;
    }

    // Swap two elements in the heap
    swap(index1, index2) {
        const temp = this.heap[index1];
        this.heap[index1] = this.heap[index2];
        this.heap[index2] = temp;
    }

    // Heapify the tree to maintain max-heap property
    heapify(index) {
        let largest = index;
        const left = this.leftChild(index);
        const right = this.rightChild(index);

        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left;
        }

        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right;
        }

        if (largest !== index) {
            this.swap(index, largest);
            this.heapify(largest);
        }
    }

    // Add an element to the heap
    insert(value) {
        this.heap.push(value);
        let index = this.heap.length - 1;

        // Move the element up to maintain the heap property
        while (index > 0 && this.heap[this.parent(index)] < this.heap[index]) {
            this.swap(index, this.parent(index));
            index = this.parent(index);
        }
    }

    // Remove and return the root (largest) element
    extractMax() {
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapify(0);

        return max;
    }

    // Get the root (largest) element
    peek() {
        return this.heap[0];
    }

    // Get the size of the heap
    size() {
        return this.heap.length;
    }
}

function kthSmallest(arr, k) {
    const maxHeap = new MaxHeap();

    // Insert the first k elements into the heap
    for (let i = 0; i < k; i++) {
        maxHeap.insert(arr[i]);
    }

    // Process the remaining elements in the array
    for (let i = k; i < arr.length; i++) {
        if (arr[i] < maxHeap.peek()) {
            maxHeap.extractMax(); // Remove the largest element
            maxHeap.insert(arr[i]); // Insert the current element
        }
    }

    // The root of the heap contains the k-th smallest element
    return maxHeap.peek();
}

// Example usage:
const arr = [7, 10, 4, 3, 20, 15];
const k = 4;
console.log(kthSmallest(arr, k)); // Output: 10
