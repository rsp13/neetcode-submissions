class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let element= new Map()
        for(let i=0;i<s.length;i++){
            if(element.has(s[i])){
                element.set(s[i],element.get(s[i])+1)
            } else {
                element.set(s[i],1)
            }
        }

        for(let j=0;j<t.length;j++){
            if(!element.has(t[j]) || element.get(t[j]) === 0){
                return false
           }
           element.set(t[j],element.get(t[j])-1)
        }
        return true
    }
}
