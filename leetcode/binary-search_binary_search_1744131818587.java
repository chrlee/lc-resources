class Solution {
    public int search(int[] nums, int target) {
        int left = 0; // initialize left pointer to 
0
        int right = nums.length - 1; // initialize 
right pointer to the last index of the array
        
        while (left <= right) { // continue the 
loop till left pointer is less than or equal to 
right pointer
            int mid = left + (right - left) / 2; // 
calculate the middle index of the array