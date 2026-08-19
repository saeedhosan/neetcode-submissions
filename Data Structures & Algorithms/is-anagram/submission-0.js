class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        //check same length
        if(s.length !== t.length){
            return false;
        }

        //creae frequencyuency store
        const frequency = {};
        
        //addtion count from each s
        for(let i = 0; i < s.length; i++){
            const character = s[i];
            frequency[character] = (frequency[character] || 0) + 1 
        }

        //subtruct count from each t
        for(let i = 0; i < t.length; i++){

            const character = t[i];

            // check character not exists to return false
            if(!frequency[character]){
                return false;
            }

            frequency[character] -= 1;

            // check the current frequency is < 0 return false
            if(frequency[character] < 0){
                return false;
            }
            
        }

        //finally found 
        return true;
    }
}
