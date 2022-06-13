;(() => {
    function ladderLength(
        beginWord: string,
        endWord: string,
        wordList: string[]
    ): number {
        const wordSet = new Set(wordList)
        const queue: [string, number][] = []
        queue.push([beginWord, 1])

        while (queue.length) {
            const [word, level] = queue.shift()!
            if (word === endWord) {
                return level
            }
            for (let i = 0; i < word.length; i++) {
                for (let j = 'a'.charCodeAt(0); j <= 'z'.charCodeAt(0); j++) {
                    const newWord =
                        word.slice(0, i) +
                        String.fromCharCode(j) +
                        word.slice(i + 1)
                    if (wordSet.has(newWord)) {
                        queue.push([newWord, level + 1])
                        wordSet.delete(newWord)
                    }
                }
            }
        }
        return 0
    }
    let beginWord = 'hit',
        endWord = 'cog',
        wordList = ['hot', 'dot', 'dog', 'lot', 'log', 'cog']
    console.log(ladderLength(beginWord, endWord, wordList))
})()
;(() => {
    function ladderLength(
        beginWord: string,
        endWord: string,
        wordList: string[]
    ): number {
        const wordSet = new Set(wordList)
        if (!wordSet.has(endWord)) {
            return 0
        }
        let beginSet = new Set<string>(),
            endSet = new Set<string>()
        beginSet.add(beginWord)
        endSet.add(endWord)

        let n = 1
        while (beginSet.size > 0) {
            const nextBegins = new Set<string>()
            if (beginSet.size > endSet.size) {
                let q = beginSet
                beginSet = endSet
                endSet = q
            }
            for (const str of beginSet) {
                for (let i = 0; i < str.length; i++) {
                    for (
                        let j = 'a'.charCodeAt(0);
                        j <= 'z'.charCodeAt(0);
                        j++
                    ) {
                        let newWord =
                            str.slice(0, i) +
                            String.fromCharCode(j) +
                            str.slice(i + 1)
                        if (endSet.has(newWord)) {
                            return n + 1
                        }
                        if (wordSet.has(newWord)) {
                            nextBegins.add(newWord)
                            wordSet.delete(newWord)
                        }
                    }
                }
            }
            beginSet = nextBegins
            n++
        }
        return 0
    }
})()
