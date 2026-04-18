class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let preflix = strs[0]
       if(strs.length===0) return ""
       for(let i=0;i<strs.length;i++){
            while(strs[i].indexOf(preflix)){
                preflix = preflix.substring(0,preflix.length-1)
            }
       }
       return preflix
    }   
}
