// https://www.geeksforgeeks.org/problems/kth-largest-element-in-a-stream2220/1


import java.util.*;

class Solution {
    static int[] kthLargest(int k, int[] arr, int n) {
        int[] ans = new int[n];

        // Creating a min-heap using priority queue
        PriorityQueue<Integer> pq = new PriorityQueue<>((a, b) -> a - b);

        // Iterating through each element
        for (int i = 0; i < n; i++) {

            // If size of priority
            // queue is less than k
            if (pq.size() < k)
                pq.add(arr[i]);
            else {
                if (arr[i] > pq.peek()) {
                    pq.remove();
                    pq.add(arr[i]);
                }
            }

            // If size is less than k
            if (pq.size() < k)
                ans[i] = -1;
            else
                ans[i] = pq.peek();
        }

        return ans;
    }
};