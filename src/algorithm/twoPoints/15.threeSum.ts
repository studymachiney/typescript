;(() => {
    function threeSum(nums: number[]): number[][] {
        nums.sort((a, b) => a - b)
        return nSumTarget(nums, 3, 0, 0)
    }
    
    function nSumTarget(nums: number[], n: number, start: number, target: number) {
        const len = nums.length
        const res: number[][] = []
        if(n < 2 || len < n) {
            return res
        }
        if(n === 2) {
            let low = start, high = len - 1
            while(low < high) {
                let sum = nums[low] + nums[high]
                let left = nums[low], right = nums[high]
                if(sum < target) {
                    while(low < high && nums[low] === left) low++
                } else if(sum > target) {
                    while(low < high && nums[high] === right) high--
                } else {
                    res.push([left, right])
                    while(low < high && nums[low] === left) low++
                    while(low < high && nums[high] === right) high--
                }
            }
        } else {
            for(let i = start; i < len; i++) {
                const sub = nSumTarget(nums, n - 1, i + 1, target - nums[i])
                sub.forEach(arr => {
                    arr.push(nums[i])
                    res.push(arr)
                })
                while(i < len - 1 && nums[i] === nums[i + 1]) i++
            }
        }
        return res
    }
})()