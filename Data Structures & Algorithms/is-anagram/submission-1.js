class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const s_hash = this.createHashMap(s);
        const t_hash = this.createHashMap(t);

        if(s_hash.size !== t_hash.size){
            return false;
        }

        return this.checkAnagramForHashes(s_hash, t_hash);
    }

    createHashMap(stringToHash){
        const hashToReturn = new Map();
        for(let str of stringToHash){
            let count = 0;
            if(hashToReturn.has(str)){
                count = hashToReturn.get(str);
            }
            hashToReturn.set(str, count+1)
        }
        return hashToReturn;
    }

    checkAnagramForHashes(hashOne, hashTwo){

        const iterator = hashOne.keys();
        let currentKey = iterator.next().value;

        while(currentKey != undefined){
            if(hashTwo.get(currentKey) == hashOne.get(currentKey)){
                currentKey = iterator.next().value;
                continue;
            }
            return false;
        }

        return true;
    }
}
