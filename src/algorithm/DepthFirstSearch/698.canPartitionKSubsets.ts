;(() => {
    function canPartitionKSubsets(nums: number[], k: number) {
        const all = nums.reduce((pre, cur) => pre + cur)
        
        if(all % k !== 0) {
            return false
        }
        let per = all / k
        nums.sort((a, b) => a - b)
        const len = nums.length
        if(nums[len - 1] > per) {
            return false
        }
        const dp = new Array(1 << len).fill(true)
        return dfs((1 << len) - 1, 0, nums, dp, per)
    
    }
    function dfs(s: number, p:number, nums: number[], dp: boolean[], target: number) {
        if(s === 0) {
            return true
        }
        if(!dp[s]) {
            return dp[s]
        }
        dp[s] = false
        for(let i = 0; i < nums.length; i++) {
            if(nums[i] + p > target) {
                break
            }
            if(((s >> i) & 1) !== 0) {
                if(dfs(s ^ (1 << i), (p + nums[i]) % target, nums, dp, target)) {
                    return true
                }
            }
        }
        return false
    }
})()