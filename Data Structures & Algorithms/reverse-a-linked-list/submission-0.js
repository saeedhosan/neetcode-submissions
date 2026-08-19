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
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let previous = null;
        let next = null;
        let current = head;

        while (current) {
            next = current.next; // save the next node
            current.next = previous; // reverse the link
            previous = current; // move previous forward
            current = next; // move current forward
        }

        return previous;
    }
}
