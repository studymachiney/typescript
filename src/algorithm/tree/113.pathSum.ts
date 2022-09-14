import { createTree, TreeNode } from '../structure/tree'
;(() => {
    let path:number[] = []
    let ret:number[][] = []
    function pathSum(root: TreeNode | null, target: number): number[][] {
        path = []
        ret = []
        if (root === null) return []
        dfs(root, target)
        return ret
    }
    function dfs(root: TreeNode | null, target: number):void {
        if (root === null) return
        path.push(root.val)
        if(root.left === null && root.right === null && target === 0) {
            ret.push(path)
        }
        dfs(root.left, target)
        dfs(root.right, target)
        path.pop()
    }

    let arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]
    let trees: TreeNode = createTree(arr)
    console.log(pathSum(trees, 22))
})()
;(() => {
    function pathSum(root: TreeNode | null, targetSum: number): number[][] {
        if (root === null) return []
        const queue_node: TreeNode[] = [],
            queue_val: number[] = [],
            res: number[][] = [],
            map = new Map<TreeNode, TreeNode>()
        queue_node.unshift(root)
        queue_val.unshift(0)
        while (queue_node.length) {
            let node = queue_node.pop()!
            let sum = queue_val.pop()! + node.val
            console.log(node.val, sum)
            if (node.left === null && node.right === null) {
                if (sum === targetSum) {
                    res.push(getPath(node, map))
                } else {
                    continue
                }
            }
            if (node.left) {
                queue_node.unshift(node.left)
                queue_val.unshift(sum)
                map.set(node.left, node)
            }
            if (node.right) {
                queue_node.unshift(node.right)
                queue_val.unshift(sum)
                map.set(node.right, node)
            }
        }
        return res
    }
    function getPath(root: TreeNode | undefined, map: Map<TreeNode, TreeNode>) {
        let res: number[] = []
        while (root !== undefined) {
            res.unshift(root.val)
            root = map.get(root)
        }
        return res
    }
    let arr = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, 5, 1]
    let trees: TreeNode = createTree(arr)
    console.log(pathSum(trees, 22))
})()
