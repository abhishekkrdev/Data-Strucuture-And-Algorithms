// https://www.geeksforgeeks.org/problems/merge-two-binary-max-heap0144/1

class Solution {

    public void Heapify(int[] ans, int index, int n) {
        int largest = index;
        int left = 2 * index + 1;
        int right = 2 * index + 2;

        if (left < n && ans[left] > ans[largest]) {
            largest = left;
        }

        if (right < n && ans[right] > ans[largest]) {
            largest = right;
        }

        if (largest != index) {
            int temp = ans[index];
            ans[index] = ans[largest];
            ans[largest] = temp;
            Heapify(ans, largest, n);
        }
    }

    public int[] mergeHeaps(int[] a, int[] b, int n, int m) {
        int[] result = new int[m + n];
        int count = 0;
        for (int i = 0; i < n; i++) {
            result[count++] = a[i];
        }

        for (int i = 0; i < m; i++) {
            result[count++] = b[i];
        }

        // Heapify Down
        for (int i = (m + n) / 2 - 1; i >= 0; i--) {
            Heapify(result, i, m + n);
        }
        return result;
    }
    
}