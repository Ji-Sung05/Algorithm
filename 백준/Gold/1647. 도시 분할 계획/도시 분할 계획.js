const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [nm, ...rest] = input;
const [n, m] = nm.split(' ').map(v => +v);
costs = rest.map(line => line.split(' ').map(v => +v));

solution(n, costs);

function find(parent, x) {
	if(parent[x] === x)
		return x
	return parent[x] = find(parent, parent[x])
}

function compare(parent, a, b) {
	a = find(parent, a)
	b = find(parent, b)
	return a === b
}

function union(parent, a, b) {
	a = find(parent, a)
	b = find(parent, b)
	if(a < b)
		parent[b] = a
	else
		parent[a] = b
}

function solution(n, costs) {
	let answer = 0
	const sortedCosts = costs.sort((a, b) => a[2] - b[2])
	const parent = Array.from({ length: n }, (_, i) => i)
	let last = 0;
	for(const [a, b, cost] of sortedCosts) {
		if(!compare(parent, a, b)) {
			answer += cost;
      last = cost;
			union(parent, a, b)
		}
	}
	console.log(answer-last);
}