;(() => {
    function findCircleNum(isConnected: number[][]): number {
        let cities = isConnected.length
        const visited: boolean[] = new Array(cities).fill(false)
        let provinces = 0
        const queue: number[] = []
        for (let i = 0; i < cities; i++) {
            if (!visited[i]) {
                queue.push(i)
                while (queue.length > 0) {
                    let j = queue.shift()!
                    visited[j] = true
                    for (let k = 0; k < cities; k++) {
                        if (isConnected[j][k] === 1 && !visited[k]) {
                            queue.push(k)
                        }
                    }
                }
                provinces++
            }
        }
        return provinces
    }
})()
