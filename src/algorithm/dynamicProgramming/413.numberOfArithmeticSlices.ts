;(() => {
    function numberOfArithmeticSlices(nums: number[]): number {
        const len = nums.length
        if (len < 3) return 0
        let d = nums[0] - nums[1],
            count = 0
        let ans = 0
        for (let i = 2; i < len; i++) {
            if (nums[i - 1] - nums[i] === d) {
                count++
            } else {
                d = nums[i - 1] - nums[i]
                count = 0
            }
            ans += count
        }
        return ans
    }
})()
