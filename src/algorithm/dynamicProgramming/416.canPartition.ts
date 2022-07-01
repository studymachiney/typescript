;(() => {
    function canPartition(nums: number[]): boolean {
        let sum = nums.reduce((pre, cur) => pre + cur)
        if (sum % 2 !== 0) {
            return false
        }
        sum = sum / 2
        const len = nums.length
        const dp: boolean[][] = new Array(len + 1)
            .fill(0)
            .map(() => new Array(sum + 1).fill(false))
        for (let i = 0; i <= len; i++) {
            dp[i][0] = true
        }
        for (let i = 1; i <= len; i++) {
            for (let j = 1; j <= sum; j++) {
                if (j - nums[i - 1] < 0) {
                    dp[i][j] = dp[i - 1][j]
                } else {
                    dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]
                }
            }
        }
        return dp[len][sum]
    }
})()
;() => {
    function canPartition(nums: number[]): boolean {
        let sum = nums.reduce((pre, cur) => pre + cur)
        if (sum % 2 !== 0) {
            return false
        }
        sum = sum / 2
        const len = nums.length
        const dp: boolean[] = new Array(sum + 1).fill(false)
        dp[0] = true
        for (let i = 1; i <= len; i++) {
            for (let j = sum; j >= 0; j--) {
                dp[j] = dp[j] || dp[j - nums[i - 1]]
            }
        }
        return dp[sum]
    }
}
