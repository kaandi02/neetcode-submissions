class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const distinctNums = new Set();
        for(const num of nums){
            if(distinctNums.has(num))
                return true;
            distinctNums.add(num);
        }
        return false;
    }
}
