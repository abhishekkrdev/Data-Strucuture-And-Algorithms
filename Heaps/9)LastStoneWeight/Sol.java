// https://leetcode.com/problems/last-stone-weight/description/

import java.util.*;

class Solution {
    public int lastStoneWeight(int[] stones) {
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);

        // Add all stones to the max heap
        for (int stone : stones) {
            maxHeap.add(stone);
        }

        // Smash stones until one or no stones are left
        while (maxHeap.size() > 1) {
            int stone1 = maxHeap.poll(); // Heaviest stone
            int stone2 = maxHeap.poll(); // Second heaviest stone

            if (stone1 != stone2) {
                // If the two stones don't have the same weight, add the difference back to the
                // heap
                maxHeap.offer(Math.abs(stone1 - stone2));
            }
        }

        // If there's a stone left, return its weight, otherwise return 0
        return maxHeap.isEmpty() ? 0 : maxHeap.poll();

    }
}