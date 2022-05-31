import { TreeNode } from '../tree/tree'
;(() => {
    function generateTrees(n: number): Array<TreeNode | null> {
        return getTree(1, n)
    }
    function getTree(l: number, h: number): Array<TreeNode | null> {
        if (l > h) return [null]
        const res: TreeNode[] = []
        for (let i = l; i <= h; i++) {
            let left = getTree(l, i - 1),
                right = getTree(i + 1, h)
            left.forEach(lNode => {
                right.forEach(rNode => {
                    let root = new TreeNode(i)
                    res.push(root)
                    root.left = lNode
                    root.right = rNode
                })
            })
        }
        return res
    }
})()
