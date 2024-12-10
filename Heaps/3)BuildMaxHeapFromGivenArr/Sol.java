class MaxHeap {
    // Method to heapify a subtree rooted at index i in arr[]
    static void heapify(int[] arr, int n, int i) {
        int largest = i; // Initialize largest as root
        int left = 2 * i + 1; // Left child
        int right = 2 * i + 2; // Right child

        // If left child is larger than root
        if (left < n && arr[left] > arr[largest]) {
            largest = left;
        }

        // If right child is larger than largest so far
        if (right < n && arr[right] > arr[largest]) {
            largest = right;
        }

        // If largest is not root
        if (largest != i) {
            // Swap
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            // Recursively heapify the affected subtree
            heapify(arr, n, largest);
        }
    }

    // Method to build a max heap from an array
    static void buildMaxHeap(int[] arr) {
        int n = arr.length;

        // Start from the last non-leaf node and move upwards
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }
    }

    // Utility method to print the array
    static void printArray(int[] arr) {
        for (int value : arr) {
            System.out.print(value + " ");
        }
        System.out.println();
    }

    public static void main(String[] args) {
        int[] arr = { 4, 10, 3, 5, 1 };

        System.out.println("Original array:");
        printArray(arr);

        buildMaxHeap(arr);

        System.out.println("Max heap:");
        printArray(arr);
    }
}
