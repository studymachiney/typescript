import { TreeNode } from './tree'
;(() => {
    const indexMap = new Map<number, number>()
    function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
        indexMap.clear()
        const n = preorder.length
        for (let i = 0; i < n; i++) {
            indexMap.set(inorder[i], i)
        }
        return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1)
    }
    function myBuildTree(
        preorder: number[],
        inorder: number[],
        preorder_left: number,
        preorder_right: number,
        inorder_left: number,
        inorder_right: number
    ): TreeNode | null {
        if (preorder_left > preorder_right) return null
        let preorder_root = preorder_left,
            inorder_root = indexMap.get(preorder[preorder_left])!

        const root = new TreeNode(preorder[preorder_root])
        let left_size = inorder_root - inorder_left
        root.left = myBuildTree(
            preorder,
            inorder,
            preorder_left + 1,
            preorder_left + left_size,
            inorder_left,
            inorder_root - 1
        )
        root.right = myBuildTree(
            preorder,
            inorder,
            preorder_left + left_size + 1,
            preorder_right,
            inorder_root + 1,
            inorder_right
        )
        return root
    }
})()
;(() => {
    function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
        if (preorder.length === 0) return null
        const root = new TreeNode(preorder[0]),
            stack: TreeNode[] = [root]
        let index = 0
        for (let i = 1; i < preorder.length; i++) {
            let val = preorder[i],
                node = stack[stack.length - 1]
            if (node.val !== inorder[index]) {
                node.left = new TreeNode(val)
                stack.push(node.left)
            } else {
                while (
                    stack.length &&
                    stack[stack.length - 1].val === inorder[index]
                ) {
                    node = stack.pop()!
                    index++
                }
                node.right = new TreeNode(val)
                stack.push(node.right)
            }
        }
        return root
    }
})()
