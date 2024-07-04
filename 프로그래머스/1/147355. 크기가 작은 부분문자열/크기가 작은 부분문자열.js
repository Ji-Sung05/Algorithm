function solution(t, p) {
    const ans = []
    let l = p.length
    for(let i = 0; i < t.length - (l - 1); i++) {
        ans.push(t.slice(i, i + l))
    }
    
    return ans.filter(a => +a <= +p).length
}