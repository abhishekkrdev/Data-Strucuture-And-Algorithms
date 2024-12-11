// https://www.interviewbit.com/problems/magician-and-chocolates/

import java.util.*;

class Solution {
    public int nchoc(int A, int[] B) {
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        int mod = 1000000007;

        for (int b : B) {
            pq.add(b);
        }

        int count = 0;

        for (int i = 1; i <= A; i++) {
            int choco = pq.poll();
            count = (count + choco) % mod;
            pq.add(choco / 2);
        }

        return (int) (count % mod);
    }
}
