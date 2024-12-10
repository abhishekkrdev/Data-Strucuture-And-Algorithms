
// https://leetcode.com/problems/kth-largest-element-in-a-stream/description//
import java.util.*;

class KthLargest {
    private int k;
    private PriorityQueue<Integer> minHeap;

    public KthLargest(int k, int[] nums) {
        this.k = k;
        minHeap = new PriorityQueue<>();

        // Initialize the heap with the first k elements
        for (int num : nums) {
            add(num);
        }

    }

    public int add(int val) {
        // Add the new element to the heap
        minHeap.offer(val);

        // If the size of the heap exceeds k, remove the smallest element
        if (minHeap.size() > k) {
            minHeap.poll();
        }

        // The k-th largest element is the root of the min-heap
        return minHeap.peek();

    }
}

/**
 * Your KthLargest object will be instantiated and called as such:
 * KthLargest obj = new KthLargest(k, nums);
 * int param_1 = obj.add(val);
 */