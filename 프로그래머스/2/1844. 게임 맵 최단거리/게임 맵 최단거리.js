function bfs(maps, visited, M, N) {
    const heap = [];
    heap.push([0, 0]);
    visited[0][0] = 1;
    const dx = [-1, 0, 1, 0];
    const dy = [0, 1, 0, -1];
    
    while(heap.length !== 0) {
        const [x, y] = heap.shift();
        for(let i = 0; i < 4; i++) {
            const [nx, ny] = [dx[i] + x, dy[i] + y];
            if(nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
            if(!visited[nx][ny] && maps[nx][ny] === 1) {
                visited[nx][ny] = visited[x][y] + 1;
                heap.push([nx, ny]);
            }
        }
    }
    return visited;
}

function solution(maps) {
    const N = maps[0].length;
    const M = maps.length;
    const visited = Array.from(Array(M), () => Array(N).fill(0));
    const d = bfs(maps, visited, M, N);
    if(d[M-1][N-1] === 0){
        return -1;
    } else {
        return d[M-1][N-1];
    }
}