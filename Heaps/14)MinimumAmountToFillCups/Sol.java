
// https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups/description/
import java.util.*;

class MinimumTimeToFillCups {
    public int fillCups(int[] amount) {
        // Find the sum of all cups
        int totalCups = amount[0] + amount[1] + amount[2];

        // Find the maximum cups of any single type
        int maxCups = Math.max(amount[0], Math.max(amount[1], amount[2]));

        // The minimum time is the greater of:
        // 1. The max number of cups in a single type
        // 2. The ceiling of (total cups / 2)
        return Math.max(maxCups, (totalCups + 1) / 2);
    }

    public int fillCups2(int[] amount) {
        // Create a max-heap using a PriorityQueue
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);

        // Add all non-zero elements to the heap
        for (int a : amount) {
            if (a > 0) {
                maxHeap.offer(a);
            }
        }

        int seconds = 0;

        // While there are elements in the heap
        while (!maxHeap.isEmpty()) {
            // Poll the largest element
            int first = maxHeap.poll();

            int second = 0;
            // Poll the second-largest element if available
            if (!maxHeap.isEmpty()) {
                second = maxHeap.poll();
            }

            // Decrease the top two elements
            if (first > 0)
                first--;
            if (second > 0)
                second--;

            // Reinsert non-zero elements back into the heap
            if (first > 0)
                maxHeap.offer(first);
            if (second > 0)
                maxHeap.offer(second);

            // Increment time
            seconds++;
        }

        return seconds;
    }

    public static void main(String[] args) {
        MinimumTimeToFillCups solution = new MinimumTimeToFillCups();
        int[] amount = { 1, 4, 2 };
        System.out.println(solution.fillCups(amount)); // Output: 4
    }
}
