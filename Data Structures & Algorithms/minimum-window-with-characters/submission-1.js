class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if (t === "") return "";

        let countT = {};
        let countS = {};
        for (let c of t) {
            countT[c] = (countT[c] || 0) + 1;
        }

        let have = 0;
        let need = Object.keys(countT).length;
        let res = [-1, -1];
        let resLen = Infinity;
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            let c = s[r];
            countS[c] = (countS[c] || 0) + 1;

            if (countT[c] && countS[c] === countT[c]) {
                have++;
            }

            while (have === need) {
                if (r - l + 1 < resLen) {
                    resLen = r - l + 1;
                    res = [l, r];
                }

                countS[s[l]]--;

                if (countT[s[l]] && countS[s[l]] < countT[s[l]]) {
                    have--;
                }
                l++;
            }
        }

        const result = s.slice(res[0], res[1] + 1);

        return resLen === Infinity ? "" : result;

        // Time: O(n + m)
        // Space: O(m)

        // Count required characters
        // Expand right --> add character
        // Window valid --> shrink left
        // Save smallest valid window
        // Removing left may break validity
    }
}
