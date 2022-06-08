
;(() => {
    function permutation(s: string): string[] {
        const rec: string[] = [],
            len = s.length,
            vis: boolean[] = []
        const arr = Array.from(s).sort(),
            perm: string[] = []
        const backtrack = (
            arr: string[],
            i: number,
            n: number,
            perm: string[]
        ) => {
            if (i === n) {
                rec.push(perm.toString())
                return
            }
            for (let j = 0; j < n; j++) {
                if (vis[j] || (j > 0 && !vis[j - 1] && arr[j - 1] === arr[j])) {
                    continue
                }
                vis[j] = true
                perm.push(arr[j])
                backtrack(arr, i + 1, n, perm)
                perm.pop()
                vis[j] = false
            }
        }
        backtrack(arr, 0, len, perm)
        const size = rec.length,
            recArr = new Array(size).fill(0)
        for (let i = 0; i < size; i++) {
            recArr[i] = rec[i].split(',').join('')
        }
        return recArr
    }
    console.log(permutation('abc'))
})()
;(() => {
    function permutation(s: string): string[] {
        const ret: string[] = []
        const arr: string[] = Array.from(s).sort()
        do {
            ret.push(arr.join(''))
        } while(nextPermutation(arr))
        const size = ret.length, retArr = new Array(size).fill(0)
        for(let i = 0; i < size; i++) {
            retArr[i] = ret[i]
        }
        return retArr
    }
    function nextPermutation(arr: string[]) {
        let i = arr.length - 2
        while (i >= 0 && arr[i] >= arr[i + 1]) {
            i--
        }
        if (i < 0) {
            return false
        }
        let j = arr.length - 1
        while (j >= 0 && arr[i] >= arr[j]) {
            j--
        }
        swap(arr, i, j)
        reverse(arr, i+1)
        return true
    }
    function swap(arr: Array<any>, i: number, j: number) {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    function reverse(arr:string[], start:number) {
        let left = start, right = arr.length - 1
        while(left < right) {
            swap(arr, left, right)
            left++
            right--
        }
    }
    console.log(permutation('abc'))
})()
