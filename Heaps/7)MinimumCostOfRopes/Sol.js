// https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1/

function minCost(ropes) {
    // Create a min-heap (using the native PriorityQueue implementation in JavaScript)
    ropes.sort((a, b) => a - b); // Sort to simulate a min-heap

    let totalCost = 0;

    // Combine ropes until only one is left
    while (ropes.length > 1) {
        // Extract the two smallest ropes
        const rope1 = ropes.shift();
        const rope2 = ropes.shift();

        // Calculate the cost to combine the two ropes
        const cost = rope1 + rope2;

        // Add the cost to the total cost
        totalCost += cost;

        // Insert the combined rope back into the sorted array
        ropes.push(cost);
        ropes.sort((a, b) => a - b); // Re-sort the array to maintain the min-heap property
    }

    return totalCost;
}

// Example Usage
const ropes = [4, 3, 2, 6];
console.log("Minimum cost to connect ropes: " + minCost(ropes));
