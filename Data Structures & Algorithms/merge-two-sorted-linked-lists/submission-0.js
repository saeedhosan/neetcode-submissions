/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // 1. Create dummy and current
        // 2. Compare list1 and list2
        // 3. Attach smaller/equal node
        // 4. Move the selected list pointer
        // 5. Move current
        // 6. Attach remaining list
        // 7. Return dummy.next

        let dummy = new ListNode();
        let current = dummy;

        while (list1 && list2) {
            if (list1.val <= list2.val) {
                current.next = list1;
                list1 = list1.next;
            } else {
                current.next = list2;
                list2 = list2.next;
            }

            current = current.next;
        }

        current.next = list1 || list2;

        return dummy.next;
    }
}
