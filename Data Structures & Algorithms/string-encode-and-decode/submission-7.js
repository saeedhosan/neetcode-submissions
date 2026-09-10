class Solution {
    key = "#";
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        //Time: O(n)
        //Space: O(n)
        let res = "";
        for (const str of strs) {
            res += str.length + this.key + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let slow = 0;
        let fast = 0;
        let data = [];

        while (slow < str.length) {
            // Find #
            while (str[fast] !== "#") {
                fast++;
            }

            // Read length without slice()
            let length = 0;

            for (let i = slow; i < fast; i++) {
                length = length * 10 + Number(str[i]);
            }

            // Start of string
            slow = fast + 1;

            // End of string
            fast = slow + length;

            let char = "";

            while (slow < fast) {
                char += str[slow];
                slow++;
            }

            data.push(char);
        }

        return data;
    }
}
