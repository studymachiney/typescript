export class TreeNode {
    constructor(
        public val: number,
        public left: TreeNode | null = null,
        public right: TreeNode | null = null
    ) {}
}

export function createTree(nums: Array<number | null>): TreeNode {
    if (nums.length === 0) throw new Error('nums.length must be greater than 0')
    if (nums[0] === null) throw new Error('nums[0] must be TreeNode type')
    const trees: Array<TreeNode> = []
    let root = new TreeNode(nums[0]!),
        i = 1,
        n = nums.length
    trees.push(root)
    while (trees.length) {
        let node = trees.shift()!
        for (let j = 1; j <= 2 && i < n; i++, j++) {
            if (nums[i] === null && j === 1) {
                node.left = null
            } else if (nums[i] === null && j === 2) {
                node.right = null
            } else if (j === 1) {
                node.left = new TreeNode(nums[i]!)
                trees.push(node.left)
            } else {
                node.right = new TreeNode(nums[i]!)
                trees.push(node.right)
            }
        }
    }
    return root
}

export function getTreeVal(root: TreeNode): Array<number | null> {
    let queue: Array<TreeNode | null> = [root],
        res: Array<number | null> = []
    while (queue.length) {
        let size = queue.length
        for (let i = 0; i < size; i++) {
            let node = <TreeNode | null>queue.shift()
            if(node === null) {
                res.push(null)
                continue
            }
            res.push(node.val)
            queue.push(node.left)
            queue.push(node.right)

        }
    }
    while(res.at(-1) === null) res.pop()
    return res
}