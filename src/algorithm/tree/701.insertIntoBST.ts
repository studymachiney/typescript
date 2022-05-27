import { createTree, getTreeVal, TreeNode } from './tree'

function insertIntoBST(root: TreeNode | null, val: number): TreeNode {
    if (root === null) return new TreeNode(val)
    let node = root
    while (node) {
        if (node.val > val) {
            if (node.left === null) {
                node.left = new TreeNode(val)
                break
            } else {
                node = node.left
            }
        } else {
            if (node.right === null) {
                node.right = new TreeNode(val)
                break
            } else {
                node = node.right
            }
        }
    }
    return root
}
let tree = createTree([4, 2, 7, 1, 3])

console.log(getTreeVal(insertIntoBST(tree, 5)!))
