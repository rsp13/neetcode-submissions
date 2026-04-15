class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let element = new Map()
        for(let i=0;i<nums.length;i++){
            let _val =target- nums[i]
            if(element.has(_val)){
               return [element.get(_val),i]
            }
            element.set(nums[i],i)
        }
    }
}
