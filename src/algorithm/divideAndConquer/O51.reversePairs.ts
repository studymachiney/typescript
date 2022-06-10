;(() => {
    function reversePairs(nums: number[]): number {
        const len = nums.length
        const temp: number[] = new Array(len).fill(0)
        return mergeSort(nums, temp, 0, len - 1)
    }
    function mergeSort(
        nums: number[],
        temp: number[],
        left: number,
        right: number
    ): number {
        if (left >= right) {
            return 0
        }
        let mid = left + Math.floor((right - left) / 2)
        let res =
            mergeSort(nums, temp, left, mid) +
            mergeSort(nums, temp, mid + 1, right)
        let i = left,
            j = mid + 1
        for (let k = left; k <= right; k++) {
            temp[k] = nums[k]
        }
        for (let k = left; k <= right; k++) {
            if (i === mid + 1) {
                nums[k] = temp[j++]
            } else if (j === right + 1 || temp[i] <= temp[j]) {
                nums[k] = temp[i++]
            } else {
                nums[k] = temp[j++]
                res += mid - i + 1
            }
        }
        return res
    }
    console.log(reversePairs([7, 5, 6, 4]))
})()
