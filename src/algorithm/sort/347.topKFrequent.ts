// 给你一个整数数组 nums 和一个整数 k ，请你返回其中出现频率前 k 高的元素。你可以按 任意顺序 返回答案。

//

// 示例 1:

// 输入: nums = [1,1,1,2,2,3], k = 2
// 输出: [1,2]
// 示例 2:

// 输入: nums = [1], k = 1
// 输出: [1]

;(() => {
    function topKFrequent(nums: number[], k: number): number[] {
        let hashTable = new Map<number, number>()
        for (let i = 0; i < nums.length; i++) {
            hashTable.set(
                nums[i],
                hashTable.has(nums[i]) ? hashTable.get(nums[i])! + 1 : 1
            )
        }
        let arr = Array.from(hashTable)
        quickSelect(arr, 0, arr.length - 1, arr.length - k)
        return arr.slice(arr.length - k).map(item => item[0])
    }
    function quickSelect(
        arr: [number, number][],
        l: number,
        r: number,
        k: number
    ) {
        if (l < r) {
            let p = partition(arr, l, r)
            if (p === k) return
            p > k
                ? quickSelect(arr, l, p - 1, k)
                : quickSelect(arr, p + 1, r, k)
        }
    }
    function partition(arr: [number, number][], l: number, r: number) {
        let random = Math.floor(Math.random() * (r - l + 1)) + l
        swap(arr, random, r)
        let more = r
        while (l < more) {
            if (arr[l][1] > arr[r][1]) {
                swap(arr, l, --more)
            } else {
                l++
            }
        }
        swap(arr, more, r)
        return more
    }
    function swap(arr: any[], i: number, j: number) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    console.log(topKFrequent([5, 3, 1, 1, 1, 3, 73, 1], 1))
})()
;(() => {
    function topKFrequent(nums: number[], k: number): number[] {
        let hashTable = new Map<number, number>()
        for (let i = 0; i < nums.length; i++) {
            hashTable.set(
                nums[i],
                hashTable.has(nums[i]) ? hashTable.get(nums[i])! + 1 : 1
            )
        }
        let buckets: number[][] = new Array(nums.length + 1)
            .fill(0)
            .map(() => new Array())
        Array.from(hashTable).forEach(item => {
            let cur = item[1]
            if (buckets[cur].length === 0) {
                buckets[cur] = []
            }
            buckets[cur].push(item[0])
        })
        let res: number[] = []
        for (let i = nums.length; i >= 0; i--) {
            if (k === 0) break
            if (buckets[i].length === 0) continue
            for (let j = 0; j < buckets[i].length; j++) {
                let num = buckets[i][j]
                res.push(num)
                k--
            }
        }
        return res
    }
    console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2))
})()
