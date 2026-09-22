class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let length = nums.length;
        let i = 0;
        while(i < length){
            for(let j=0; j< length; j++){
                if(i == j) continue;
                if(nums[i] == nums[j]){
                    return true;
                }
            }
            i++;
        }
        return false;
    }
}
