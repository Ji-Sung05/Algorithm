function bfs(src, graph, n) {
    const visited = Array.from(Array(n + 1), () => false);
    const q = [];
    q.push(src);
    visited[src] = true;
    let ans = 0;
    while(q.length !== 0) {
        
        let a = q.shift();
        for(const dest of graph[a]) {
            if(!visited[dest]) {
                ans++;
                q.push(dest);
                visited[dest] = true;
            }
        }
    }
    return ans;
}

function solution(n, results) {
    const graph1 = Array.from(Array(n + 1), () => []);
    const graph2 = Array.from(Array(n + 1), () => []);
    let arr = [];
    let brr = [];
    for(const [a, b] of results) {
        graph1[a].push(b);
        graph2[b].push(a);
    }
    for(let i = 1; i <= n; i++) {
        arr.push(bfs(i, graph1, n));
        brr.push(bfs(i, graph2, n));
    }
    const answer = [];
    for(let i = 0; i < n; i++) {
        answer[i] = arr[i] + brr[i];
    }
    let t = n - 1;
    return answer.filter((v) => v === t).length;
}