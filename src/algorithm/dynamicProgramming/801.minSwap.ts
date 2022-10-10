;(() => {
    function minSwap(nums1: number[], nums2: number[]): number {
        const n = nums1.length
        const dp = new Array(n).fill(0).map(() => new Array(2).fill(0))
        dp[0][1] = 1
        for(let i = 1; i < n; i++) {
            let a1 = nums1[i - 1], a2 = nums1[i], b1 = nums2[i - 1], b2 = nums2[i]
            if((a1 < a2 && b1 < b2) && (b1 < a2 && a1 < b2)) {
                dp[i][0] = Math.min(dp[i - 1][0], dp[i - 1][1])
                dp[i][1] = dp[i][0] + 1
            } else if(a1 < a2 && b1 < b2) {
                dp[i][0] = dp[i - 1][0]
                dp[i][1] = dp[i - 1][1] + 1
            } else {
                dp[i][0] = dp[i - 1][1]
                dp[i][1] = dp[i - 1][0] + 1
            }
        }
        return Math.min(dp[n - 1][0], dp[n - 1][1])
    };
})()
;(() => {
    function minSwap(nums1: number[], nums2: number[]): number {
        const n = nums1.length
        let a = 0, b = 1
        for(let i = 1; i < n; i++) {
            let at = a, bt = b
            a = b = n
            if(nums1[i] > nums1[i - 1] && nums2[i] > nums2[i - 1]) {
                a = Math.min(a, at)
                b = Math.min(b, bt + 1)
            }
            if(nums1[i] > nums2[i - 1] && nums2[i] > nums1[i - 1]) {
                a = Math.min(a, bt)
                b = Math.min(b, at + 1)
            }
        }
        return Math.min(a, b)
    };
})()