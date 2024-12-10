// https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1

import java.util.*;

class KthSmallestElement {

    public static int kthSmallest(int[] arr, int k) {
        // Create a max-heap with a custom comparator to maintain max-heap property
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>((a, b) -> b - a);

        // Build the heap with the first 'k' elements
        for (int i = 0; i < k; i++) {
            maxHeap.offer(arr[i]);
        }

        // For the rest of the elements, if an element is smaller than the max-heap root
        // (which is the largest element in the heap), replace the root
        for (int i = k; i < arr.length; i++) {
            if (arr[i] < maxHeap.peek()) {
                maxHeap.poll(); // Remove the largest element (root of max-heap)
                maxHeap.offer(arr[i]); // Add the current element to the heap
            }
        }

        // The root of the max-heap contains the k-th smallest element
        return maxHeap.peek();
    }

    public static void main(String[] args) {
        int[] arr = { 7, 10, 4, 3, 20, 15 };
        int k = 4;

        int result = kthSmallest(arr, k);
        System.out.println("The " + k + "-th smallest element is: " + result);
    }
}
