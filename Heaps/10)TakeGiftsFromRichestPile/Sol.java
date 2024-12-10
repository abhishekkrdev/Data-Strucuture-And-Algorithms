
// https://leetcode.com/problems/take-gifts-from-the-richest-pile/description/
import java.util.*;

class Solution {
    public long pickGifts(int[] gifts, int k) {
        // Max-heap to track the pile with the maximum number of gifts
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);

        // Add all piles to the max-heap
        for (int gift : gifts) {
            maxHeap.offer(gift);
        }

        // Perform the operation for k seconds
        for (int i = 0; i < k; i++) {
            // Get the pile with the maximum number of gifts
            int maxGifts = maxHeap.poll();

            // Compute the floor of the square root of the number of gifts
            int remainingGifts = (int) Math.floor(Math.sqrt(maxGifts));

            // If there are still gifts left after taking some, put it back in the heap
            maxHeap.offer(remainingGifts);
        }

        // Sum up all the remaining gifts in the heap
        long totalRemainingGifts = 0;
        while (!maxHeap.isEmpty()) {
            totalRemainingGifts += maxHeap.poll();
        }

        return totalRemainingGifts;

    }
}