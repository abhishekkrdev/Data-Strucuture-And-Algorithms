// https://www.geeksforgeeks.org/problems/minimum-cost-of-ropes-1587115620/1

import java.util.PriorityQueue;

public class MinCostOfRopes {

    public static int minCost(int[] ropes) {
        // Create a priority queue (min-heap)
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        // Add all the ropes to the priority queue
        for (int rope : ropes) {
            pq.add(rope);
        }

        int totalCost = 0;

        // Combine ropes until only one rope is left
        while (pq.size() > 1) {
            // Extract the two smallest ropes
            int rope1 = pq.poll();
            int rope2 = pq.poll();

            // Calculate the cost to combine the two ropes
            int cost = rope1 + rope2;

            // Add the cost to the total cost
            totalCost += cost;

            // Insert the combined rope back into the heap
            pq.add(cost);
        }

        return totalCost;
    }

    public static void main(String[] args) {
        int[] ropes = { 4, 3, 2, 6 };
        System.out.println("Minimum cost to connect ropes: " + minCost(ropes));
    }
}
