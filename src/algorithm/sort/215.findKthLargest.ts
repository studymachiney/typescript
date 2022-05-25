// 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

// 请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。

//

// 示例 1:

// 输入: [3,2,1,5,6,4] 和 k = 2
// 输出: 5
// 示例 2:

// 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
// 输出: 4

// 快速选择，基于快速排序的选择方法
;(() => {
    function findKthLargest(nums: number[], k: number): number {
        k = nums.length - k
        let l = 0,
            r = nums.length - 1
        while (l < r) {
            let j = partition(nums, l, r)
            if (j == k) {
                break
            } else if (j < k) {
                l = j + 1
            } else {
                r = j - 1
            }
        }
        return nums[k]
    }
    function partition(nums: number[], l: number, r: number) {
        let random = Math.floor(Math.random() * (r - l + 1)) + l
        swap(nums, random, r)
        let more = r
        while (l < more) {
            if (nums[l] <= nums[r]) {
                l++
            } else if (nums[l] > nums[r]) {
                swap(nums, l, --more)
            }
        }
        swap(nums, more, r)
        return more

        // let random = Math.floor(Math.random() * (r - l + 1)) + l
        // swap(nums, random, r)
        // let less = l - 1,
        //     more = r
        // while (l < more) {
        //     if (nums[l] < nums[r]) {
        //         swap(nums, ++less, l++)
        //     } else if (nums[l] > nums[r]) {
        //         swap(nums, l, --more)
        //     } else {
        //         l++
        //     }
        // }
        // swap(nums, more, r)
        // return more
    }
    function swap(nums: number[], i: number, j: number) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
})()

// 基于堆排序的选择方法
;(() => {
    function findKthLargest(nums: number[], k: number): number {
        let heapSize = nums.length
        for (let i = heapSize - 1; i >= 0; i--) {
            heapify(nums, i, heapSize)
        }
        while (heapSize - 1 > nums.length - k) {
            swap(nums, 0, --heapSize)
            heapify(nums, 0, heapSize)
        }
        return nums[0]
    }
    function heapify(nums: number[], index: number, heapSize: number) {
        let left = index * 2 + 1
        while (left < heapSize) {
            let largest =
                left + 1 < heapSize && nums[left + 1] > nums[left]
                    ? left + 1
                    : left
            largest = nums[largest] > nums[index] ? largest : index
            if (largest === index) break
            swap(nums, index, largest)
            index = largest
            left = index * 2 + 1
        }
    }
    function swap(nums: number[], i: number, j: number) {
        let temp = nums[i]
        nums[i] = nums[j]
        nums[j] = temp
    }
    console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
})()
