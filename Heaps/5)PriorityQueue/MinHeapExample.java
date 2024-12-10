import java.util.PriorityQueue;

public class MinHeapExample {
    public static void main(String[] args) {
        // Create a PriorityQueue (Min-Heap by default)
        PriorityQueue<Integer> pq = new PriorityQueue<>();

        // Add elements
        pq.add(10);
        pq.add(4);
        pq.add(7);
        pq.add(1);

        // Print the priority queue
        System.out.println("Priority Queue (Min-Heap): " + pq);

        // Retrieve and remove elements in priority order
        System.out.println("Removed elements in priority order:");
        while (!pq.isEmpty()) {
            System.out.println(pq.poll()); // Retrieves and removes the head (smallest element)
        }
    }
}
