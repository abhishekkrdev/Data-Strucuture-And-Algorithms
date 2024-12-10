// https://leetcode.com/problems/last-stone-weight/description/

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

function lastStoneWeight(stones) {
    const maxHeap = new MaxHeap();

    // Push all stone weights into the max-heap (negate to simulate max-heap)
    stones.forEach((stone) => maxHeap.push(stone));

    // Simulate the process
    while (maxHeap.heap.length > 1) {
        const stone1 = maxHeap.pop();
        const stone2 = maxHeap.pop();

        if (stone1 !== stone2) {
            maxHeap.push(Math.abs(stone1 - stone2));
        }
    }

    // If there is one stone left, return its weight, otherwise return 0
    return maxHeap.heap.length === 0 ? 0 : maxHeap.pop();
}

// Example usage:
const stones = [2, 7, 4, 1, 8, 1];
console.log(lastStoneWeight(stones)); // Output: 1
