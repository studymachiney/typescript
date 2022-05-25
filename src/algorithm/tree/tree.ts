export class TreeNode {
    constructor(
        public val: number,
        public left: TreeNode | null = null,
        public right: TreeNode | null = null
    ) {}
}

export function createTree(nums: Array<number | null>): TreeNode {
    const trees: Array<TreeNode> = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === null) continue
        let cur = new TreeNode(nums[i]!)
        trees[i] = cur
        if (i === 0) continue
        if (i & 1) {
            trees[(i - 1) >> 1]!.left = cur
        } else {
            trees[(i - 2) >> 1]!.right = cur
        }
    }
    return trees[0]
}
