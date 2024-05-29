function solution(n, computers) {
    let answer = 0;
    let visited = [false];
    
    function bfs(i) {
        let q = [];
        q.push(i);
        visited[i] = true;
        while(q.length !== 0) {
            const j = q.shift();
            for(let l = 0; l < computers[j].length; l++) {
                if(computers[j][l] === 1 && !visited[l]) {
                    q.push(l);
                    bfs(l);
                }
            }
        }
    }
    for(let i = 0; i < computers.length; i++) {
        if(!visited[i]) {
            bfs(i);
            answer++;
        }
    }
    return answer;
}