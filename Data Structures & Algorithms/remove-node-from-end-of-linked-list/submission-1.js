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
        //head: 1 > 2 > 3 > 4 > null
        //dummy: 0 > 1 > 2 > 3 > 4 > null

        const dummy = new ListNode(0, head);
        let slow = dummy;
        let fast = dummy.next;

        //shift the fast nth
        while(n > 0){
            fast = fast.next;
            n--;
        }

        //shift the pointers
        while(fast){
            slow = slow.next;
            fast = fast.next;
        }

        //delete: 2 > 3 > 4 > null
        slow.next = slow.next.next;
        //deleted: 2 > 4 > null

        return dummy.next;
    }
}
