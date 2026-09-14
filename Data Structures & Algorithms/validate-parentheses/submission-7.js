class Solution {
    /**
     * Time: O(n)
     * Space: O(n)
     * 
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = { ")": "(", "]": "[", "}": "{" };

        for (const char of s) {
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char);
            } else {
                const top = stack[stack.length - 1];

                if (pairs[char] !== top) return false;

                stack.pop();
            }
        }

        return stack.length === 0;
    }
}
