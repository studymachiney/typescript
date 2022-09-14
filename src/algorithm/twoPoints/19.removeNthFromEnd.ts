import { ListNode } from "../structure/ListNode"

;(() => {
    function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
        let dummy = new ListNode(-1)
        dummy.next = head
        let x = findFromEnd(dummy, n + 1)
        x.next = x.next!.next
        return dummy.next
    };
    
    function findFromEnd(head: ListNode, k: number): ListNode {
        let p1 = head
        for(let i = 0; i < k; i++)  {
            p1 = p1.next!
        }
        let p2 = head
        while(p1 !== null) {
            p2 = p2.next!
            p1 = p1.next!
        }
        return p2
    }
})()