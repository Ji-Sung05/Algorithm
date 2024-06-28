const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function find(parent, x) {
    if (parent[x] === x) return x;
    return parent[x] = find(parent, parent[x]);
}

function union(parent, rank, a, b) {
    a = find(parent, a);
    b = find(parent, b);
    if (a !== b) {
        if (rank[a] > rank[b]) {
            parent[b] = a;
        } else {
            parent[a] = b;
            if (rank[a] === rank[b]) {
                rank[b]++;
            }
        }
    }
}

function solution(input) {
    let i = 0;
    while (i < input.length) {
        const [m, n] = input[i].split(' ').map(Number);
        if (m === 0 && n === 0) break;

        const edges = [];
        let totalCost = 0;

        for (let j = 0; j < n; j++) {
            const [x, y, z] = input[i + 1 + j].split(' ').map(Number);
            edges.push([z, x, y]);
            totalCost += z;
        }

        edges.sort((a, b) => a[0] - b[0]);

        const parent = Array.from({ length: m }, (_, idx) => idx);
        const rank = Array(m).fill(0);

        let mstCost = 0;

        for (const [cost, x, y] of edges) {
            if (find(parent, x) !== find(parent, y)) {
                union(parent, rank, x, y);
                mstCost += cost;
            }
        }

        console.log(totalCost - mstCost);

        i += n + 1;
    }
}

solution(input);
