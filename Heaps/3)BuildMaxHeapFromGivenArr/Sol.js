// Function to heapify a subtree rooted at index i
function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // Left child
    const right = 2 * i + 2; // Right child

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        // Swap
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // Recursively heapify the affected subtree
        heapify(arr, n, largest);
    }
}

// Function to build a max heap from an array
function buildMaxHeap(arr) {
    const n = arr.length;

    // Start from the last non-leaf node and move upwards
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

// Utility function to print the array
function printArray(arr) {
    console.log(arr.join(" "));
}

// Example usage
const arr = [4, 10, 3, 5, 1];

console.log("Original array:");
printArray(arr);

buildMaxHeap(arr);

console.log("Max heap:");
printArray(arr);
