;(() => {
    function replaceWords(dictionary: string[], sentence: string): string {
        const trie = new Trie()
        for (const word of dictionary) {
            let cur = trie
            for (let i = 0; i < word.length; i++) {
                const c = word[i]
                if (!cur.children.has(c)) {
                    cur.children.set(c, new Trie())
                }
                cur = cur.children.get(c)
            }
            cur.children.set('#', new Trie())
        }
        const words = sentence.split(' ')
        for (let i = 0; i < words.length; i++) {
            words[i] = findRoot(words[i], trie)
        }
        return words.join(' ')
    }
    function findRoot(word: string, trie: Trie): string {
        let root = ''
        let cur = trie
        for (let i = 0; i < word.length; i++) {
            const c = word[i]
            if (cur.children.has('#')) {
                return root
            }
            if (!cur.children.has(c)) {
                return word
            }
            root += c
            cur = cur.children.get(c)
        }
        return root
    }

    class Trie {
        public children = new Map()
        constructor() {}
    }
})()
