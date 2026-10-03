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

        //find the middle
        let slow = head;
        let fast = head.next;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }
        let half = slow.next;


        //reverse the half
        let prev = (slow.next = null);
        while(half){
            const next  = half.next;
            half.next = prev;
            prev      = half;
            half      = next;
        }

        //merge the two half
        let first = head;
        let second = prev;
        while(second){
            const firstNext     = first.next;
            const secondNext    = second.next;
            first.next          = second;
            second.next         = firstNext;
            first               = firstNext;
            second              = secondNext;
        }
    }
}
