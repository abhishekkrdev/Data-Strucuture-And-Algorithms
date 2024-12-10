// https://www.geeksforgeeks.org/problems/height-of-heap5025/1

function calculateHeapHeight(n) {
    let height = 0;

    while (n > 1) {
        n = Math.floor(n / 2); // Reduce the number of nodes to the size of the parent level
        height++; // Increment the height for each level
    }

    return height;
}

function calculateHeapHeightWithFormula(n) {
    if (n <= 0) return 0; // A heap with no nodes has a height of 0
    return Math.floor(Math.log2(n));
}

// Example Usage
const n = 15; // Example: Heap with 15 elements
console.log("Number of elements:", n);
console.log("Height of the heap:", calculateHeapHeight(n));
