function solution(triangle) {
    const t = triangle.length;
    for(let i = t - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] = triangle[i][j] + Math.max(triangle[i + 1][j], triangle[i + 1][j + 1])
        }
    }
    return triangle[0][0];
}