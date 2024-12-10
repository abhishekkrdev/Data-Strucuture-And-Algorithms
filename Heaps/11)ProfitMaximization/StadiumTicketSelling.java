
// https://www.interviewbit.com/problems/profit-maximisation/
import java.util.PriorityQueue;
import java.util.Collections;

public class StadiumTicketSelling {

    public static int maxProfit(int[] A, int B) {
        // Max-heap to store the number of vacant seats in each row
        PriorityQueue<Integer> maxHeap = new PriorityQueue<>(Collections.reverseOrder());

        // Add all row seat counts to the max-heap
        for (int seats : A) {
            maxHeap.add(seats);
        }

        int totalProfit = 0;

        // Sell tickets to B people
        for (int i = 0; i < B; i++) {
            // Get the row with the most vacant seats
            int maxSeats = maxHeap.poll();

            // Add the profit from selling the ticket
            totalProfit += maxSeats;

            // Decrease the vacant seats by 1 (since a ticket is sold)
            if (maxSeats - 1 > 0) {
                maxHeap.add(maxSeats - 1);
            }
        }

        return totalProfit;
    }

    public static void main(String[] args) {
        // Example usage
        int[] A = { 2, 3, 5, 6 }; // Number of seats in each row
        int B = 4; // Number of people
        System.out.println(maxProfit(A, B)); // Output: 18
    }
}
