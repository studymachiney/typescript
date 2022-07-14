;(() => {
    class WordFilter {
        trie: Trie
        weightKey: string
        constructor(words: string[]) {
            this.trie = new Trie()
            this.weightKey = '##'

            for (let i = 0; i < words.length; i++) {
                let word = words[i]
                let cur = this.trie,
                    len = word.length
                for (let j = 0; j < len; j++) {
                    let tmp = cur
                    for (let k = j; k < len; k++) {
                        let key = word.charAt(k) + '#'
                        if (!tmp.children.has(key)) {
                            tmp.children.set(key, new Trie())
                        }
                        tmp = tmp.children.get(key)!
                        tmp.weight.set(this.weightKey, i)
                    }
                    tmp = cur
                    for (let k = j; k < len; k++) {
                        const key = '#' + word.charAt(len - k - 1)
                        if (!tmp.children.has(key)) {
                            tmp.children.set(key, new Trie())
                        }
                        tmp = tmp.children.get(key)!
                        tmp.weight.set(this.weightKey, i)
                    }
                    const key = word.charAt(j) + word.charAt(len - j - 1)
                    if (!cur.children.has(key)) {
                        cur.children.set(key, new Trie())
                    }
                    cur = cur.children.get(key)!
                    cur.weight.set(this.weightKey, i)
                }
            }
        }

        f(pref: string, suff: string): number {
            let cur = this.trie
            let m = Math.max(pref.length, suff.length)
            for (let i = 0; i < m; i++) {
                let c1 = i < pref.length ? pref.charAt(i) : '#'
                let c2 =
                    i < suff.length ? suff.charAt(suff.length - 1 - i) : '#'
                const key = c1 + c2
                if (!cur.children.has(key)) {
                    return -1
                }
                cur = cur.children.get(key)!
            }
            return cur.weight.get(this.weightKey)!
        }
    }
    class Trie {
        children = new Map<string, Trie>()
        weight = new Map<string, number>()
        constructor() {}
    }
})()
