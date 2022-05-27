;(() => {
    function minNumber(nums: number[]): string {
        let arr = nums.map(num => num.toString())
        quickSort(arr, 0, arr.length - 1)
        return arr.join('')
    }
    function quickSort(strs: string[], l: number, r: number) {
        if (l >= r) return
        let random = Math.floor(Math.random() * (r - l + 1) + l)
        swap(strs, r, random)
        let less = l - 1,
            more = r,
            start = l
        while (l < more) {
            let cur = (strs[l] + strs[r]).localeCompare(strs[r] + strs[l])
            if (cur < 0) {
                swap(strs, l++, ++less)
            } else if (cur > 0) {
                swap(strs, l, --more)
            } else {
                l++
            }
        }
        console.log(strs)
        swap(strs, more, r)
        quickSort(strs, start, less)
        quickSort(strs, more + 1, r)
    }
    function swap(arr: Array<any>, i: number, j: number) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    console.log(minNumber([3, 30, 34, 5, 9]))
})()
