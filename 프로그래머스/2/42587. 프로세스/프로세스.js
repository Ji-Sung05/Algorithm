function solution(priorities, location) {
    let max = Math.max(...priorities);
    let arr = Array.from(Array(priorities.length), (_, i) => i);
    let answer = 0;
    while(priorities.length != 0){
         max = Math.max(...priorities);
        
        if(priorities[0] < max){
            priorities.push(priorities.shift());
            arr.push(arr.shift());
        }else {
            answer+=1;
            priorities.shift();
            if(arr.shift() == location)
                return answer;
        }
    }
}