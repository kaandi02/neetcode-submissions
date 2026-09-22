class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
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
