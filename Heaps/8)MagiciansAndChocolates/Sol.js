// https://www.interviewbit.com/problems/magician-and-chocolates/

class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this._heapifyUp();
    }

    pop() {
        if (this.heap.length === 0) return null;
        const max = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = last;
            this._heapifyDown();
        }
        return max;
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] > this.heap[parentIndex]) {
                [this.heap[index], this.heap[parentIndex]] = [
                    this.heap[parentIndex],
                    this.heap[index],
                ];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    _heapifyDown() {
        let index = 0;
        while (2 * index + 1 < this.heap.length) {
            let largerChildIndex = 2 * index + 1;
            if (
                2 * index + 2 < this.heap.length &&
                this.heap[2 * index + 2] > this.heap[largerChildIndex]
            ) {
                largerChildIndex = 2 * index + 2;
            }
            if (this.heap[index] < this.heap[largerChildIndex]) {
                [this.heap[index], this.heap[largerChildIndex]] = [
                    this.heap[largerChildIndex],
                    this.heap[index],
                ];
                index = largerChildIndex;
            } else {
                break;
            }
        }
    }
}

const MOD = 10 ** 9 + 7;

function maxChocolates(N, A, B) {
    const heap = new MaxHeap();

    // Insert all initial chocolates into the max-heap
    for (let chocolates of B) {
        heap.push(chocolates);
    }

    let totalChocolates = 0;

    // Process for A units of time
    for (let i = 0; i < A; i++) {
        // Get the max chocolates available (pop from heap)
        const maxChocolates = heap.pop();
        totalChocolates = (totalChocolates + maxChocolates) % MOD;

        // Refill the bag with floor(maxChocolates / 2)
        const newChocolates = Math.floor(maxChocolates / 2);

        // Push the new chocolates back into the heap
        heap.push(newChocolates);
    }

    return totalChocolates;
}

// Example Usage:
const N = 3; // Number of bags
const A = 5; // Number of units of time
const B = [5, 2, 8]; // Initial chocolates in the bags

console.log(maxChocolates(N, A, B)); // Output the maximum chocolates the kid can eat
