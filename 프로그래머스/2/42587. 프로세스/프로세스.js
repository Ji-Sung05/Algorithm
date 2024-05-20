function solution(priorities, location) {
    let queue = priorities.map((priority, index) => [priority, index]);
    let executionOrder = 0;

    while (queue.length > 0) {
        let currentProcess = queue.shift();
        if (queue.some(process => process[0] > currentProcess[0])) {
            queue.push(currentProcess);
        } else {
            executionOrder++;
            if (currentProcess[1] === location) {
                return executionOrder;
            }
        }
    }
}