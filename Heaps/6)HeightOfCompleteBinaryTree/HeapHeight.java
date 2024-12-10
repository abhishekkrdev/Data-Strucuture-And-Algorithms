// https://www.geeksforgeeks.org/problems/height-of-heap5025/1

class HeapHeight {
    public static int calculateHeight(int n) {
        if (n <= 0) {
            return 0; // A heap with no nodes has a height of 0
        }
        return (int) Math.floor(Math.log(n) / Math.log(2));
    }

    public static int calculateHeightWithDivision(int n) {
        int height = 0;

        while (n > 1) {
            n /= 2; // Reduce the number of nodes to the size of the parent level
            height++; // Increment the height for each level
        }

        return height;
    }

    public static void main(String[] args) {
        int n = 15; // Example: Heap with 15 elements
        System.out.println("Number of elements: " + n);
        System.out.println("Height of the heap: " + calculateHeight(n));
    }
}
