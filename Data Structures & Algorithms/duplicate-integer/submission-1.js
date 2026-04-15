class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        if(nums.length===0) return false
        let element = new Set()
        for(let i=0;i<nums.length;i++){
           if(element.has(nums[i])){
            return true
           }
           element.add(nums[i],1)
        }
        return false
    }
}
