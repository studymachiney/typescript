;(() => {
    function kSimilarity(s1: string, s2: string): number {
        const len = s1.length
        const queue: [string, number][] = []
        const visit = new Set<string>()
        queue.push([s1, 0])
        visit.add(s1)
        let step = 0
        while(queue.length) {
            const size = queue.length
            for(let i = 0; i < size; i++) {
                let [cur, pos] = queue.shift()!
                if(cur === s2) {
                    return step
                }
                while(pos < len && cur[pos] === s2[pos]) {
                    pos++
                }
                for(let j = pos + 1; j < len; j++) {
                    if(s2[j] === cur[j]) {
                        continue
                    }
                    if(s2[pos] === cur[j]) {
                        const next = swap(cur, pos, j)
                        if(!visit.has(next)) {
                            visit.add(next)
                            queue.push([next, pos + 1])
                        }
                    }
                }
            }
            step++
        }
        return step
    }
    function swap(cur: string, i: number, j: number) {
        const arr = [...cur]
        const c = arr[i]
        arr[i] = arr[j]
        arr[j] = c
        return arr.join('')
    }
})()

;(() => {
    function kSimilarity(s1: string, s2: string): number {
        let str1 = '', str2 = ''
        for(let i = 0; i < s1.length; i++) {
            if(s1[i] !== s2[i]) {
                str1 += s1[i]
                str2 += s2[i]
            }
        }
        if(str1.length === 0) {
            return 0
        }
        let ans = str1.length - 1
        const dfs = (pos: number, cost: number, len: number, str1: string, str2: string) => {
            if(cost > ans) {
                return 
            }
            while(pos < str1.length && str1[pos] === str2[pos]) {
                pos++
            }
            if(pos === str1.length) {
                ans = Math.min(ans, cost)
                return
            }
            if(cost + minSwap(str1, str2, pos) >= ans) {
                return
            }
            for(let i = pos + 1; i < str1.length; i++) {
                if(str1[i] === str2[pos]) {
                    const str1Next = swap(str1, i, pos)
                    dfs(pos + 1, cost + 1, len, str1Next, str2)
                }
            }
        }
        dfs(0, 0, str1.length, str1, str2)
        return ans 
    }
    function minSwap (s1: string, s2:string, pos:number) {
        let tot = 0;
        for (let i = pos; i < s1.length; i++) {
            tot += s1[i] !== s2[i] ? 1 : 0;
        }
        return Math.floor((tot + 1) / 2);
    }
    function swap(cur: string, i: number, j: number) {
        const arr = [...cur]
        const c = arr[i]
        arr[i] = arr[j]
        arr[j] = c
        return arr.join('')
    }
})()
;(() => {

})()