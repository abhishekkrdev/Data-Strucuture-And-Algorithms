// https://leetcode.com/problems/kth-largest-element-in-an-array/description/

import java.util.*;

class Solution {
    public int findKthLargest(int[] nums, int k) {
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        for (int i = 0; i < k; i++) {
            pq.add(nums[i]);
        }

        for (int i = k; i < nums.length; i++) {
            int arrElement = nums[i];
            if (arrElement > pq.peek()) {
                pq.remove();
                pq.add(arrElement);
            }
        }
        return pq.peek();
    }
}