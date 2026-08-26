class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const pairs = { ")": "(", "}": "{", "]": "[" };
        for (const char of s) {
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char);
            } else {
                const top = stack[stack.length - 1];
                if (top !== pairs[char]) {
                    return false;
                }
                stack.pop();
            }
        }

        return stack.length === 0;
    }
}
