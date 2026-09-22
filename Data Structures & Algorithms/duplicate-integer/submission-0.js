class Solution {    
    // Incorrect solution: Checked only the adjacent values not the entire array elements.
    
    // This approach will work only when we have sorted array.
    hasDuplicate(nums) {
        let length = nums.length;
        let i = 0;
        while(i < length){
            if(nums[i] == nums[i+1])
                return true;
            i++
        }
        return false;
    }
}
