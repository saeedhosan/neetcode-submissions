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

        //reverse half
        let half = slow.next;
        let prev = (slow.next = null);
        while(half){
            const tmp = half.next;
            half.next = prev;
            prev      = half;
            half      = tmp;
        }

        //merge two half
        // 0 > 1 > 2 > 3 > null
        // 6 > 5 > 4 > null
        let first = head;
        let second = prev;
        while(second){
            const fnext = first.next;
            const snext = second.next;

            //0 > 6 > 1 > 2 > 3 > null
            first.next = second;
            second.next = fnext;

            first = fnext;
            second = snext;

        }
    }
}
