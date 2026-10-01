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
            let temp  = half.next;
            half.next = prev;
            prev      = half;
            half      = temp;
        }

        //merge the two half
        let first   = head;
        let second  = prev;
        while(second){
            const tmp1 = first.next;
            const tmp2 = second.next;
            first.next = second;
            second.next= tmp1;
            first      = tmp1;
            second     = tmp2;
        }

    }
}
