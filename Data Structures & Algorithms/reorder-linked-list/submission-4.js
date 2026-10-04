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
        // 0 > 1 > 2 > 3 > 4 > 5 > 6 > null
        

        //find middle
        let slow = head;
        let fast = head.next;
        while(fast && fast.next){
            slow = slow.next;
            fast = fast.next.next;
        }

        // 4 > 5 > 6 > null
        //reverse half
        let half = slow.next;
        let prev = (slow.next = null);
        while(half){
            const temp = half.next;
            half.next  = prev;
            prev       = half;
            half       = temp;
        }

        //merge two half

        // 0 > 1 > 2 > 3 | 4 > 5 > 6 > null
        let first = head;
        let second = prev;
        while(second){
            const fnext = first.next;
            const snext = second.next;

            first.next = second; // 0 > 6
            second.next = fnext;

            first = fnext;
            second = snext;
        }

    }
}
