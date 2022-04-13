/**
 * Definition for singly-linked list.
 */
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

const hasCycle = (head: ListNode | null): boolean => {
    const memo = new Set<ListNode>();

    while(head?.next != null) {
        if (memo.has(head))
            return true;
        memo.add(head);
        head = head.next;
    }

    return false;
};

const test1 = () => {
    const n3 = new ListNode(3);
    const n2 = new ListNode(2);
    const n0 = new ListNode(0);
    const nn4 = new ListNode(-4);

    n3.next = n2;
    n2.next = n0;
    n0.next = nn4;
    nn4.next = n2;

    console.log(hasCycle(n3));
}

const test2 = () => {
    const n1 = new ListNode(1);
    const n2 = new ListNode(2);
    
    n1.next = n2;
    n2.next = n1;

    console.log(hasCycle(n1));
}

const test3 = () => {
    const n1 = new ListNode(1);

    console.log(hasCycle(n1));
}

test1();
test2();
test3();