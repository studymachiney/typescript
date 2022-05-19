//快速选择，基于快速排序的选择方法
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
    console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
})()

;(() => {
    function findKthLargest(nums: number[], k: number) {
        let heapSize = nums.length
        buildMaxHeap(nums, heapSize)
        for(let i = nums.length - 1; i >= nums.length - k + 1; i--) {
            swap(nums, 0, i)
            heapSize--
            maxHeapify(nums, 0, heapSize)
        }
        return nums[0]
    }
    function buildMaxHeap(nums: number[], heapSize: number) {
        for (let i = Math.floor(heapSize / 2); i >= 0; --i) {
            maxHeapify(nums, i, heapSize)
        }
    }
    function maxHeapify(nums: number[], i: number, heapSize: number) {
        let l = i * 2 + 1,
            r = i * 2 + 2,
            largest = i
        if (l < heapSize && nums[l] > nums[largest]) {
            largest = l
        }
        if (r < heapSize && nums[r] > nums[largest]) {
            largest = r
        }
        if (largest !== i) {
            swap(nums, i, largest)
            maxHeapify(nums, largest, heapSize)
        }
    }
    console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2))
})()

function swap(nums: number[], i: number, j: number) {
    let temp = nums[i]
    nums[i] = nums[j]
    nums[j] = temp
}
