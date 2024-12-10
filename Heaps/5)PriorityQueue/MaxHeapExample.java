import java.util.Collections;
import java.util.PriorityQueue;

public class MaxHeapExample {
    public static void main(String[] args) {
        // Create a PriorityQueue with a comparator for Max-Heap
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());

        // Add elements
        pq.add(10);
        pq.add(4);
        pq.add(7);
        pq.add(1);

        // Print the priority queue
        System.out.println("Priority Queue (Max-Heap): " + pq);

        // Retrieve and remove elements in priority order
        System.out.println("Removed elements in priority order:");
        while (!pq.isEmpty()) {
            System.out.println(pq.poll()); // Retrieves and removes the head (largest element)
        }
    }
}
