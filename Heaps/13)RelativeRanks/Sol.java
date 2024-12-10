// https://leetcode.com/problems/relative-ranks/description/ 

import java.util.*;

class Solution {
    public String[] findRelativeRanks(int[] score) {
        int n = score.length;
        String[] result = new String[n];

        // Create a MaxHeap (PriorityQueue with reverse order)
        PriorityQueue<int[]> maxHeap = new PriorityQueue<>((a, b) -> b[0] - a[0]);

        // Add all scores with their indices into the heap
        for (int i = 0; i < n; i++) {
            maxHeap.offer(new int[] { score[i], i });
        }

        // Assign ranks based on the order they are polled
        int rank = 1;
        while (!maxHeap.isEmpty()) {
            int[] top = maxHeap.poll();
            int index = top[1];
            if (rank == 1) {
                result[index] = "Gold Medal";
            } else if (rank == 2) {
                result[index] = "Silver Medal";
            } else if (rank == 3) {
                result[index] = "Bronze Medal";
            } else {
                result[index] = String.valueOf(rank);
            }
            rank++;
        }

        return result;
    }

    public String[] findRelativeRanks2(int[] score) {
        int n = score.length;
        String[] result = new String[n];

        // Copy and sort the scores in descending order
        int[] sortedScores = Arrays.copyOf(score, n);
        Arrays.sort(sortedScores);

        // Map scores to ranks using a HashMap
        HashMap<Integer, String> rankMap = new HashMap<>();
        for (int i = n - 1; i >= 0; i--) {
            int rank = n - i;
            if (rank == 1) {
                rankMap.put(sortedScores[i], "Gold Medal");
            } else if (rank == 2) {
                rankMap.put(sortedScores[i], "Silver Medal");
            } else if (rank == 3) {
                rankMap.put(sortedScores[i], "Bronze Medal");
            } else {
                rankMap.put(sortedScores[i], String.valueOf(rank));
            }
        }

        // Assign ranks to the original scores
        for (int i = 0; i < n; i++) {
            result[i] = rankMap.get(score[i]);
        }

        return result;
    }
}
