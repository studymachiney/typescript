// 二叉树的遍历
;(() => {
    class TreeNode {
        val: number
        left: TreeNode | null
        right: TreeNode | null
        constructor(
            val?: number,
            left?: TreeNode | null,
            right?: TreeNode | null
        ) {
            this.val = val === undefined ? 0 : val
            this.left = left === undefined ? null : left
            this.right = right === undefined ? null : right
        }
    }
    // 递归遍历， 第一次访问到时输出为先序遍历，第二次访问到输出为中序遍历，第三次访问到时输出是后序遍历
    function recursion(root: TreeNode | null) {
        // 1
        if (root === null) return
        recursion(root.left)
        // 2
        recursion(root.right)
        //3
    }
    // 先序遍历
    function preOrderTraversal(root: TreeNode | null) {
        if (root === null) return
        const stack: TreeNode[] = []
        stack.push(root)
        while (stack.length !== 0) {
            root = stack.pop()!
            if (root.right !== null) {
                stack.push(root.right)
            }
            if (root.left !== null) {
                stack.push(root.left)
            }
        }
    }
    // 后序遍历
    function postOrderTraversal(root: TreeNode | null) {
        if (root === null) return
        const stack1: TreeNode[] = [],
            stack2: TreeNode[] = [] // 收集栈
        stack1.push(root)
        while (stack1.length) {
            root = stack1.pop()!
            stack2.push(root)
            if (root.left !== null) {
                stack1.push(root.left)
            }
            if (root.right !== null) {
                stack1.push(root.right)
            }
        }
        while (stack2.length !== 0) {
            console.log(stack2.pop()!.val)
        }
    }
    //中序遍历
})()
