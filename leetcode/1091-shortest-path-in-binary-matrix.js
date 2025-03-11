/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    let m = grid.length;
    let n = grid[0].length;

    // 시작점이 막혀있으면 도달 불가능
    if (grid[0][0] === 1 || grid[m - 1][n - 1] === 1) return -1;

    // 방문 여부 배열
    const visited = Array.from({ length: m }, () => Array(n).fill(false));

    // 8방향 이동 (상, 하, 좌, 우, 대각선 4개 포함)
    let directions = [
        [0, 1], [0, -1], [1, 0], [-1, 0],  // 상하좌우
        [1, 1], [1, -1], [-1, 1], [-1, -1] // 대각선 4개
    ];

    function bfs() {
        let q = [[0, 0, 1]]; // (x, y, distance)
        visited[0][0] = true;

        while (q.length > 0) {
            let [row, col, dist] = q.shift();

            // 도착하면 거리 반환
            if (row === m - 1 && col === n - 1) return dist;

            for (let [dx, dy] of directions) {
                let nx = row + dx;
                let ny = col + dy;

                if (nx >= 0 && ny >= 0 && nx < m && ny < n && !visited[nx][ny] && grid[nx][ny] === 0) {
                    visited[nx][ny] = true;
                    q.push([nx, ny, dist + 1]); // 거리 증가
                }
            }
        }

        return -1; // 도착점까지 못 간 경우
    }

    return bfs();
};
