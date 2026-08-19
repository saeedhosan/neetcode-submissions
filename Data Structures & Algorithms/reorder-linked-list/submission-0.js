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
        // Find middle
        let slow = head;
        let fast = head.next;

        while (fast && fast.next) {
            slow = slow.next;
            fast = fast.next.next;
        }

        // Split the list
        let second = slow.next;
        slow.next = null;

        // Reverse second half
        let previous = null;

        while (second) {
            const current = second.next;

            second.next = previous;

            previous = second;
            second = current;
        }

        // previous = head of reversed second half
        second = previous;

        // Merge two halves
        let first = head;

        while (second) {
            const firstNext = first.next;
            const secondNext = second.next;

            first.next = second;
            second.next = firstNext;

            first = firstNext;
            second = secondNext;
        }
    }
}
