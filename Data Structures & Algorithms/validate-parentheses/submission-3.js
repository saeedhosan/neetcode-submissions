class Solution {
    /**
     * The basic solution
     *
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {

        //stack
        //push
        //pair
        //pop
        //Time: O(n)
        //Space: O(n/2)

        const stack = [];
        const pairs = { ")": "(", "}": "{", "]": "[" };

        for (const char of s) {

            if (char === "(" || char === "{" || char === "[") {
                stack.push(char);
                continue;
            }

            const top = stack[stack.length - 1];

            if (pairs[char] !== top) {
                return false;
            }

            stack.pop();
        }

        return stack.length === 0;
    }
}
