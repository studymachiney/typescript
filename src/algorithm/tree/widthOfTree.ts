// 求一棵二叉树的宽度（不统计null节点）
import { createTree, TreeNode } from './tree'
;(() => {
    function widthOfBinaryTree(root: TreeNode): number {
        if (root === null) return 0
        const queue: TreeNode[] = [root],
            levelMap = new Map<TreeNode, number>()
        let curLevel = 1,
            curLevelNodes = 0,
            max = 0
        levelMap.set(root, 1)
        while (queue.length) {
            let cur = queue.shift()!
            let curNodeLevel = levelMap.get(cur)!
            if (curNodeLevel === curLevel) {
                curLevelNodes++
            } else {
                max = Math.max(max, curLevelNodes)
                curLevel++
                curLevelNodes = 1
            }

            if (cur.left) {
                levelMap.set(cur.left, curNodeLevel + 1)
                queue.push(cur.left)
            }
            if (cur.right) {
                levelMap.set(cur.right, curNodeLevel + 1)
                queue.push(cur.right)
            }
        }
        max = Math.max(max, curLevelNodes)
        return max
    }
    const root = createTree([1, 3, 2, 5, 3, null, 9])
    console.log(widthOfBinaryTree(root))
})()
;(() => {
    function widthOfBinaryTree(root: TreeNode): number {
        if (root === null) return 0
        let curend: TreeNode | null = root,
            nextend: TreeNode | null = null,
            max = 0,
            curLevelNodes = 0
        const queue: TreeNode[] = [root]
        while (queue.length) {
            let node = queue.shift()!
            curLevelNodes++
            if (node.left) {
                nextend = node.left
                queue.push(node.left)
            }
            if (node.right) {
                nextend = node.right
                queue.push(node.right)
            }
            if (node === curend) {
                max = Math.max(max, curLevelNodes)
                curend = nextend
                nextend = null
                curLevelNodes = 0
            }
        }
        return max
    }
    const root = createTree([1, 3, 2, 5, 3, null, 9])
    console.log(widthOfBinaryTree(root))
})()