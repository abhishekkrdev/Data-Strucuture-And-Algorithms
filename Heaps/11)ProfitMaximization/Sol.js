// https://www.interviewbit.com/problems/profit-maximisation/
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

function maxProfit(A, B) {
    const maxHeap = new MaxHeap();

    // Push all row seat counts into the max-heap
    for (let seats of A) {
        maxHeap.push(seats);
    }

    let totalProfit = 0;

    // Sell tickets to B people
    for (let i = 0; i < B; i++) {
        const maxSeats = maxHeap.pop();
        totalProfit += maxSeats;

        // After selling a ticket, the number of vacant seats decreases by 1
        if (maxSeats > 1) {
            maxHeap.push(maxSeats - 1);
        }
    }

    return totalProfit;
}

// Example usage:
const A = [2, 3, 5, 6]; // Number of seats in each row
const B = 4; // Number of people
console.log(maxProfit(A, B)); // Output: 18
