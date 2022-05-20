// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。

// 要求时间复杂度为O(n)。

//

// 示例1:

// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

;(() => {
    class Status {
        lSum: number
        rSum: number
        mSum: number
        iSum: number
        constructor(l: number, r: number, m: number, i: number) {
            this.lSum = l
            this.rSum = r
            this.mSum = m
            this.iSum = i
        }
    }
    function pushUp(l: Status, r: Status) {
        const iSum = l.iSum + r.iSum
        const lSum = Math.max(l.lSum, l.iSum + r.lSum)
        const rSum = Math.max(r.rSum, r.iSum + l.rSum)
        const mSum = Math.max(Math.max(l.mSum, r.mSum), l.rSum + r.lSum)
        return new Status(lSum, rSum, mSum, iSum)
    }
    function getInfo(a: number[], l: number, r: number): Status {
        if (l === r) {
            return new Status(a[l], a[l], a[l], a[l])
        }
        const m = (l + r) >> 1
        const lSub = getInfo(a, l, m)
        const rSub = getInfo(a, m + 1, r)
        return pushUp(lSub, rSub)
    }
    function maxSubArray(nums: number[]) {
        return getInfo(nums, 0, nums.length - 1).mSum
    }
    console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))
})()
