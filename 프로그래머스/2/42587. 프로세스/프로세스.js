function solution(priorities, location) {
    const arr = Array.from(Array(priorities.length), (_, i) => i);
    
    let max = 0;
    let answer = 0;
    while(priorities.length !== 0) {
        max = Math.max(...priorities);
        if(priorities[0] < max) {
            priorities.push(priorities.shift())
            arr.push(arr.shift());
        } else {
            answer++;
            priorities.shift();
            if(arr.shift() === location) return answer;
        }
    }
}