class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length) return false
        let _map= new Map()
        for(let i=0;i<s.length;i++){
            if(_map.has(s[i])){
                _map.set(s[i],_map.get(s[i])+1)
            } else {
                _map.set(s[i],1)
            }
        }

        for(let j=0;j<t.length;j++){
            if(!_map.has(t[j]) || _map.get(t[j]) === 0){
                return false
           }
           _map.set(t[j],_map.get(t[j])-1)
        }
        return true
    }
}
