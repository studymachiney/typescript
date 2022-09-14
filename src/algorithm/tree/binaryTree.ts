import { TreeNode, createTree } from '../structure/tree'

// 二叉树的遍历
;(() => {
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
        const stack: TreeNode[] = [],
            result: number[] = []
        stack.push(root)
        while (stack.length !== 0) {
            root = stack.pop()!
            result.push(root.val)
            if (root.right !== null) {
                stack.push(root.right)
            }
            if (root.left !== null) {
                stack.push(root.left)
            }
        }
        return result
    }
    // 后序遍历
    function postOrderTraversal(root: TreeNode | null) {
        if (root === null) return
        const stack1: TreeNode[] = [],
            stack2: TreeNode[] = [], // 收集栈
            result: number[] = []
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
            result.push(stack2.pop()!.val)
        }
        return result
    }
    //中序遍历
    function inOrderTraversal(root: TreeNode | null) {
        if (root === null) return
        const stack: TreeNode[] = [],
            result: number[] = []
        while (stack.length || root !== null) {
            if (root !== null) {
                stack.push(root)
                root = root.left
            } else {
                root = stack.pop()!
                result.push(root.val)
                root = root.right
            }
        }
        return result
    }
    // 层序遍历
    function levelOrder(root: TreeNode | null) {
        if (root === null) return
        const queue: TreeNode[] = [root],
            result: number[] = []
        while (queue.length) {
            let size = queue.length
            for (let i = 0; i < size; i++) {
                let cur = queue.shift()!
                result.push(cur.val)
                if (cur.left) {
                    queue.push(cur.left)
                }
                if (cur.right) {
                    queue.push(cur.right)
                }
            }
        }
        return result
    }

    let arr = [1, 2, 3, 4, 5, 6, 7, 8]
    const root = createTree(arr)
    console.log(levelOrder(root))
    console.log(preOrderTraversal(root))
    console.log(inOrderTraversal(root))
    console.log(postOrderTraversal(root))
})()
