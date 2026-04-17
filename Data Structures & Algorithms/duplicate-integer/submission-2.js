class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length==0) return false
        let set = new Set()
        for(let i=0;i<nums.length;i++){
            if(set.has(nums[i])){
                return true
            }
            set.add(nums[i],1)
        }
    return false
    }
}
