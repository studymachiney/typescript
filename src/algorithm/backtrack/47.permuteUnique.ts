;(() => {
    function permuteUnique(nums: number[]): number[][] {
        const ans: number[][] = []
        const vis: boolean[] = new Array(nums.length).fill(false)
        nums.sort((a, b) => a - b)
        backtrack(nums, vis, 0, [], ans)
        return ans
    }
    function backtrack(
        nums: number[],
        vis: boolean[],
        idx: number,
        perm: number[],
        ans: number[][]
    ) {
        if (idx === nums.length) {
            ans.push(perm.slice())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
                continue
            }
            perm.push(nums[i])
            vis[i] = true
            backtrack(nums, vis, idx + 1, perm, ans)
            vis[i] = false
            perm.pop()
        }
    }
})()
