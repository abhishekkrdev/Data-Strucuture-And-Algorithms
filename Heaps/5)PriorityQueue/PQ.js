class PriorityQueue {
    constructor() {
        this.heap = [];
    }

    // Get the index of the parent of a node
    parentIndex(index) {
        return Math.floor((index - 1) / 2);
    }

    // Get the index of the left child of a node
    leftChildIndex(index) {
        return 2 * index + 1;
    }

    // Get the index of the right child of a node
    rightChildIndex(index) {
        return 2 * index + 2;
    }

    // Swap two elements in the heap
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    // Add an element to the priority queue
    enqueue(value) {
        this.heap.push(value); // Add to the end
        this.heapifyUp(); // Restore heap property
    }

    // Remove and return the highest-priority element (min element)
    dequeue() {
        if (this.heap.length === 0) return null;
        if (this.heap.length === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop(); // Replace root with last element
        this.heapifyDown(); // Restore heap property
        return root;
    }

    // Peek at the highest-priority element without removing it
    peek() {
        return this.heap[0] || null;
    }

    // Restore heap property by bubbling up
    heapifyUp() {
        let index = this.heap.length - 1;
        while (
            index > 0 &&
            this.heap[index] < this.heap[this.parentIndex(index)]
        ) {
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }

    // Restore heap property by bubbling down
    heapifyDown() {
        let index = 0;
        while (this.leftChildIndex(index) < this.heap.length) {
            let smallerChildIndex = this.leftChildIndex(index);
            if (
                this.rightChildIndex(index) < this.heap.length &&
                this.heap[this.rightChildIndex(index)] <
                    this.heap[smallerChildIndex]
            ) {
                smallerChildIndex = this.rightChildIndex(index);
            }

            if (this.heap[index] <= this.heap[smallerChildIndex]) {
                break;
            }

            this.swap(index, smallerChildIndex);
            index = smallerChildIndex;
        }
    }

    // Check if the priority queue is empty
    isEmpty() {
        return this.heap.length === 0;
    }
}

// Example Usage
const pq = new PriorityQueue();
pq.enqueue(10);
pq.enqueue(5);
pq.enqueue(7);
pq.enqueue(1);

console.log("Peek:", pq.peek()); // 1 (smallest element)
console.log("Dequeue:", pq.dequeue()); // 1
console.log("Dequeue:", pq.dequeue()); // 5
console.log("Dequeue:", pq.dequeue()); // 7
console.log("Dequeue:", pq.dequeue()); // 10
console.log("Is Empty:", pq.isEmpty()); // true
