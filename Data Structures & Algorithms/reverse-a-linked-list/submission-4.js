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
     * Time: O(n) and Space: O(1)
     * 
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        //0.next=1.next=null

        //temp: 1.next=null
        //cnxt: null
        //prev: 0.next=null
        //curr: 1.next=null

        //temp: null
        //cnxt: 0.next=null
        //prev: 1.next=0.next=null
        //curr: null

        let prev = null;
        let curr = head;

        while(curr){
            let temp = curr.next;
            curr.next = prev;
            prev      = curr;
            curr      = temp
        }

        return prev;
    }
}
