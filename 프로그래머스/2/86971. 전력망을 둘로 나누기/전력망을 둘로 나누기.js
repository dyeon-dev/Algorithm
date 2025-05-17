function solution(n, wires) {
    let min = Infinity;

    // 간선을 하나씩 제거한 그래프  
    const buildGraph = (skip) => {
        const graph = Array.from({ length: n + 1 }, () => []);
        for (let i = 0; i < wires.length; i++) {
            if (i === skip) continue;
            const [a, b] = wires[i];
            graph[a].push(b);
            graph[b].push(a);
        }
        return graph;
    };

    const bfs = (graph, node) => {
        const visited = Array(n + 1).fill(false);
        const queue = [node];
        visited[node] = true;
        let cnt = 1;

        while (queue.length) {
            const n = queue.shift();
            for (let next of graph[n]) {
                if (!visited[next]) {
                    visited[next] = true;
                    queue.push(next);
                    cnt++;
                }
            }
        }

        return cnt;
    };

    for (let i = 0; i < wires.length; i++) {
        const graph = buildGraph(i);
        const team1 = bfs(graph, wires[i][0]);
        const team2 = n - team1;
        min = Math.min(min, Math.abs(team1 - team2));
    }

    return min;
}
