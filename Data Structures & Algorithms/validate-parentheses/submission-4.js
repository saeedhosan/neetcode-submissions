class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        //stack
        //push opening
        //pair closing
        //pop  stacks

        //Time: O(n)
        //Space: O(n/2)

        const stack = [];
        const pairs = { ")": "(", "}": "{", "]": "[" };

        for(const char of s){

            if(char === '(' || char === '{' || char === '['){
                stack.push(char);
                continue;
            }

            const top = stack[stack.length - 1];

            if(top !== pairs[char]) return false;

            stack.pop();            
        }

        return stack.length === 0;
    }
}
