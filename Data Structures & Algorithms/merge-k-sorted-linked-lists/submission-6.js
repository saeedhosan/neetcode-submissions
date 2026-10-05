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
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        if (lists.length === 0) return null;

        while (lists.length > 1) {
            const merged = [];

            for (let i = 0; i < lists.length; i += 2) {
                const l1 = lists[i];
                const l2 = lists[i + 1] || null;

                merged.push(this.mergeList(l1, l2));
            }

            lists = merged;
        }

        return lists[0];
    }

    /**
     * @param {ListNode} l1
     * @param  {ListNode} l2
     * @return {ListNode}
     */
    mergeList(l1, l2) {
        let dummy = new ListNode();
        let node = dummy;

        while (l1 && l2) {
            if (l1.val < l2.val) {
                node.next = l1;
                l1 = l1.next;
            } else {
                node.next = l2;
                l2 = l2.next;
            }
            node = node.next;
        }

        if (l1) node.next = l1;
        if (l2) node.next = l2;

        return dummy.next;
    }
}
