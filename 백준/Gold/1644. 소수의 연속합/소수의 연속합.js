const n = +require('fs').readFileSync('/dev/stdin')
const arr = get_primes(n)

function get_primes(num) {
    const prime = [false, false, ...Array(num - 1).fill(true)];

    for (let i = 2; i * i <= num; i += 1) {
        if (prime[i]) {
            for (let j = i * 2; j <= num; j += i) {
                prime[j] = false;
            }
        }
    }
    const primes = []
    for(let i = 2; i <= num; i++) {
        if(prime[i]) {
            primes.push(i)
        }
    }
    return primes
}

let i = 0, j = 0;
let sum = arr[i]
let cnt = 0

while(j < arr.length) {
    if(sum === n) {
        cnt++
        sum -= arr[i++]
    } else if( sum > n) {
        sum -= arr[i]
        i++
    } else {
        sum += arr[++j]
    }
}
console.log(cnt)