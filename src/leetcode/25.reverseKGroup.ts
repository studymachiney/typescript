import { ListNode } from "../algorithm/structure/ListNode";

; (() => {
    function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
        if(head === null) return null
        let p1 = head, p2 = head
        for(let i = 0; i < k; i++) {
            if(p2 === null) return head
            p2 = p2.next!
        }
        const newHead = reverse(p1, p2)
        p1.next = reverseKGroup(p2, k)
        return newHead
    }
    function reverse(p1: ListNode, p2: ListNode) {
        let pre = null, cur = p1, nxt = p1
        while(cur !== p2) {
            nxt = cur.next!
            cur.next = pre
            pre = cur
            cur = nxt
        }
        return pre
    }
})()

;(() => {
    function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
        if(head === null) return head
        let [p1, p2] = reverseKNum(head, k)
        while(p2 && p2.next) {
            const nodes = reverseKNum(p2.next, k)
            p2.next = nodes[0]
            p2 = nodes[1]
        }
        return p1
    };
    
    function reverseKNum(head: ListNode, k: number):[ListNode, ListNode | null] {
        let node: ListNode | null = head
        for(let i = 0; i < k; i++) {
            if(node) {
                node = node.next
            } else {
                return [head, null]
            }
        }
        let preNode = node
        node = head
        let nextNode: ListNode | null = null
        for(let i = 0; i < k; i++) {
            nextNode = node.next
            node.next = preNode
            preNode = node
            node = nextNode!
        }
        return [preNode!, head]
    }
})()