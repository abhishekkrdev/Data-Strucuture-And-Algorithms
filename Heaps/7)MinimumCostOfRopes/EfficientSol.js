class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Helper function to return the index of the parent
    parent(index) {
        return Math.floor((index - 1) / 2);
    }

    // Helper function to return the left child index
    leftChild(index) {
        return 2 * index + 1;
    }

    // Helper function to return the right child index
    rightChild(index) {
        return 2 * index + 2;
    }

    // Swap two elements in the heap
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Insert a new element into the heap
    insert(value) {
        this.heap.push(value);
        let index = this.heap.length - 1;

        // Rebalance the heap
        while (index > 0 && this.heap[this.parent(index)] > this.heap[index]) {
            this.swap(this.parent(index), index);
            index = this.parent(index);
        }
    }

    // Extract the minimum element from the heap
    extractMin() {
        if (this.heap.length === 0) return null;

        const min = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();

        this.heapify(0);
        return min;
    }

    // Rebalance the heap to maintain the heap property
    heapify(index) {
        let smallest = index;
        const left = this.leftChild(index);
        const right = this.rightChild(index);

        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) {
            smallest = left;
        }

        if (
            right < this.heap.length &&
            this.heap[right] < this.heap[smallest]
        ) {
            smallest = right;
        }

        if (smallest !== index) {
            this.swap(index, smallest);
            this.heapify(smallest);
        }
    }

    // Get the size of the heap
    size() {
        return this.heap.length;
    }
}

function minCost(ropes) {
    const minHeap = new MinHeap();

    // Insert all ropes into the heap
    ropes.forEach((rope) => minHeap.insert(rope));

    let totalCost = 0;

    // Combine ropes until only one remains
    while (minHeap.size() > 1) {
        // Extract the two smallest ropes
        const rope1 = minHeap.extractMin();
        const rope2 = minHeap.extractMin();

        // Calculate the cost to combine them
        const cost = rope1 + rope2;
        totalCost += cost;

        // Insert the combined rope back into the heap
        minHeap.insert(cost);
    }

    return totalCost;
}

// Example Usage
const ropes = [4, 3, 2, 6];
console.log("Minimum cost to connect ropes:", minCost(ropes)); // Output: 29
