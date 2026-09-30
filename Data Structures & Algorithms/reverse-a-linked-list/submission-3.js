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
        let prev = null;
        let curr = head;
        // Initial
        // curr: 0.next=1.next=2.next=3.next=null
        // prev: null

        // Step 1
        // temp: 1.next=2.next=3.next=null
        // cnxt: null
        // prev: 0.next=null
        // curr: 1.next=2.next=3.next=null

        // Step 2
        // temp: 2.next=3.next=null
        // cnxt: 0.next=null
        // prev: 1.next=0.next=null
        // curr: 2.next=3.next=null

        // Step 3
        // temp: 3.next=null
        // cnxt: 1.next=0.next=null
        // prev: 2.next=1.next=0.next=null
        // curr: 3.next=null

        // Step 4
        // temp: null
        // cnxt: 2.next=1.next=0.next=null
        // prev: 3.next=2.next=1.next=0.next=null
        // curr: null

        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        return prev;
    }
}
