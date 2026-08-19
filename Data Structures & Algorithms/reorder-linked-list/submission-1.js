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
     * @return {void}
     */
    reorderList(head) {

        //find middle
        let slow = head;
        let fast = head.next;
        while(fast !== null && fast.next !== null){
            slow = slow.next;
            fast = fast.next.next;
        }

        //reverse
        let last   = slow.next;
        let prev   = (slow.next = null);
        while(last !== null){
            const tmp   = last.next;
            last.next = prev;
            prev        = last;
            last        = tmp;
        }

        //merge
        let first = head;
            last  = prev;
        while(last != null){
            const firstNext = first.next;
            const lastNext  = last.next;
            first.next      = last;
            last.next       = firstNext;
            first           = firstNext;
            last            = lastNext;
        }
    }
}
