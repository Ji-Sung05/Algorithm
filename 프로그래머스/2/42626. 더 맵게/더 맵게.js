class MinHeap {
    constructor() {
        this.heap = [null];
    }    
    
    push(value) {
        this.heap.push(value);
        
        let currentIndex = this.heap.length - 1;
        let parentIndex = Math.floor(currentIndex / 2);
        
        while(parentIndex !== 0 && this.heap[parentIndex] > value) {
            this._swap(parentIndex, currentIndex);
            currentIndex = parentIndex;
            parentIndex = Math.floor(currentIndex / 2);
        }
    }
    
    pop() {
        if(this.is_empty()) return;
        if(this.heap.length === 2) return this.heap.pop();
        
        const value = this.heap[1];
        this.heap[1] = this.heap.pop();
        
        let currentIndex = 1;
        let leftIndex = 2;
        let rightIndex = 3;
        
        while(
            (this.heap[leftIndex] && this.heap[leftIndex] < this.heap[currentIndex]) ||
            (this.heap[rightIndex] && this.heap[rightIndex] < this.heap[currentIndex])
        ) {
            if(this.heap[leftIndex] === undefined) {
                this._swap(rightIndex, currentIndex);
            } else if(this.heap[rightIndex] === undefined) {
                this._swap(leftIndex, currentIndex);
            } else if(this.heap[leftIndex] > this.heap[rightIndex]) {
                this._swap(rightIndex, currentIndex);
                currentIndex = rightIndex;
            } else if(this.heap[leftIndex] <= this.heap[rightIndex]) {
                this._swap(leftIndex, currentIndex);
                currentIndex = leftIndex;
            }
            leftIndex = 2 * currentIndex;
            rightIndex = 2 * currentIndex + 1;
            }
        return value;
    }
    
    _swap(a, b) {
        [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
    }
    
    is_empty() {
        return this.heap.length === 1;
    }
}

function solution(scoville, K) {
    const heap = new MinHeap();
    for(let i = 0; i < scoville.length; i++) {
        heap.push(scoville[i]);
    }
    
    let answer = 0;
    while(heap.heap[1] < K) {
        if(heap.is_empty() || heap.heap.length === 2) return -1;
        let sum = 0;
        let a = heap.pop();
        let b = heap.pop();
        sum = a + (b * 2);
        heap.push(sum);
        answer++;
    }
    return answer;
}