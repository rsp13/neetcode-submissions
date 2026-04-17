class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        let Prefix = strs[0]
        for(let i=1;i<strs.length;i++){
            while(strs[i].indexOf(Prefix)!==0){
                Prefix = Prefix.substring(0,Prefix.length-1)
                if(Prefix === "") return ""
            }
        }
       return Prefix
    }   
}
