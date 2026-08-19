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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        //dummy node
        //fast move n steps
        //move two pointers
        //delete-relink
        //reutrn dummy.next

        let dummy = new ListNode(0, head);
        let slow = dummy;
        let fast = head;

        while (n > 0) {
            fast = fast.next;
            n--;
        }

        while (fast !== null) {
            slow = slow.next;
            fast = fast.next;
        }

        slow.next = slow.next.next;

        return dummy.next;
    }
}
