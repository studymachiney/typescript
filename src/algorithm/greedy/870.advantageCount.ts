;(() => {
    function advantageCount(nums1: number[], nums2: number[]): number[] {
        let len = nums1.length,
            ans = new Array(len).fill(0)
        nums1.sort((a, b) => a - b)
        let indexB = new Array(len).fill(0).map((item, index) => index)
        indexB.sort((a, b) => {
            if (nums2[a] > nums2[b]) return 1
            return -1
        })
        let i = 0,
            j = 0,
            k = len - 1
        while (i < len) {
            if (nums1[i] > nums2[indexB[j]]) {
                ans[indexB[j]] = nums1[i]
                j++
            } else {
                ans[indexB[k]] = nums1[i]
                k--
            }
            i++
        }
        return ans
    }
})()
;(() => {
    function advantageCount(A: number[], B: number[]): number[] {
        const sortA = A.slice().sort((a, b) => a - b),
            sortB = B.slice().sort((a, b) => a - b)
        const assigned = new Map<number, number[]>()
        for (const b of B) {
            assigned.set(b, [])
        }
        const remaining: number[] = []
        let j = 0
        for (const a of sortA) {
            if (a > sortB[j]) {
                assigned.get(sortB[j++])!.push(a)
            } else {
                remaining.push(a)
            }
        }
        const ans: number[] = new Array(B.length)
        for (let i = 0; i < B.length; i++) {
            if (assigned.get(B[i])!.length > 0) {
                ans[i] = assigned.get(B[i])!.pop()!
            } else {
                ans[i] = remaining.pop()!
            }
        }
        return ans
    }
})()
