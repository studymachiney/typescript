// 堆排序
;(() => {
    function heapSort(arr: number[]) {
        if (arr.length < 2) return
        let heapSize = arr.length
        for (let i = heapSize - 1; i >= 0; i--) {
            heapify(arr, i, heapSize)
        }
        while (heapSize > 0) {
            swap(arr, 0, --heapSize)
            heapify(arr, 0, heapSize)
        }
    }
    function heapify(arr: number[], index: number, heapSize: number) {
        let left = 2 * index + 1

        while (left < heapSize) {
            let largest =
                left + 1 < heapSize && arr[left + 1] > arr[left]
                    ? left + 1
                    : left
            largest = arr[largest] > arr[index] ? largest : index
            if (largest === index) break
            swap(arr, index, largest)
            index = largest
            left = 2 * index + 1
        }
    }
    function swap(arr: number[], i: number, j: number) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    let arr = [2, 4, 3, 7, 8, 23, 54, 66, 42]
    heapSort(arr)
    console.log(arr)
})()
// 快速排序
;(() => {
    function quickSort(arr: number[], l: number, r: number) {
        if (l < r) {
            let p = partition(arr, l, r)
            quickSort(arr, l, p[0] - 1)
            quickSort(arr, p[1] + 1, r)
        }
    }
    function partition(nums: number[], l: number, r: number) {
        let random = Math.floor(Math.random() * (r - l + 1)) + l
        swap(arr, random, r)
        let less = l - 1,
            more = r
        while (l < more) {
            if (nums[l] < nums[r]) {
                swap(nums, ++less, l++)
            } else if (nums[l] > nums[r]) {
                swap(nums, l, --more)
            } else {
                l++
            }
        }
        swap(nums, more, r)
        return [less + 1, more]
    }
    function swap(arr: number[], i: number, j: number) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    let arr = [2, 4, 3, 7, 8, 23, 54, 66, 42]
    quickSort(arr, 0, arr.length - 1)
    console.log(arr)
})()
// 基数排序
;(() => {
    function radixSort(arr: number[]) {
        let radix = 10,
            i = 0,
            j = 0
        let l = 0,
            r = arr.length - 1
        let bucket = new Array(arr.length).fill(0)
        let digit = maxbits(arr)
        for (let d = 1; d <= digit; d++) {
            let count = new Array(radix).fill(0)
            // count[i]统计第d位数为i的值出现的次数
            for (i = l; i <= r; i++) {
                j = getDigit(arr[i], d)
                count[j]++
            }
            // count[i]是第d位数为i的值在数组的结尾位置
            for (i = 1; i < radix; i++) {
                count[i] = count[i] + count[i - 1]
            }
            // 将数组按d位排好序存入bucket
            for (i = r; i >= l; i--) {
                j = getDigit(arr[i], d)
                bucket[--count[j]] = arr[i]
            }
            for (i = l, j = 0; i <= r; i++, j++) {
                arr[i] = bucket[j]
            }
        }
    }
    // 得到num第n位的值
    function getDigit(num: number, d: number) {
        return Math.floor((num / Math.pow(10, d - 1)) % 10)
    }
    // 获取数组最大值有几位数
    function maxbits(arr: number[]) {
        let digit = 1,
            base = 10
        arr.forEach(num => {
            while (num >= base) {
                digit++
                base *= 10
            }
        })
        console.log(digit)
        return digit
        // let maxNum = 0
        // arr.forEach(num => {
        //     maxNum = Math.max(maxNum, num)
        // })
        // let res = 0
        // while (maxNum !== 0) {
        //     res++
        //     maxNum = Math.floor(maxNum / 10)
        // }
        // return res
    }
    let arr = [2, 4, 3, 7, 8, 23, 54, 66, 42]
    radixSort(arr)
    console.log(arr)
})()
