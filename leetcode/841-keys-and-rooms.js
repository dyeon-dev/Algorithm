/**
 * @param {number[][]} rooms
 * @return {boolean}
 */

// dfs
var canVisitAllRooms = function(rooms) {
    let visited = new Set(); // O(1);
    // let visited = []; // O(N);
    function dfs(v) {
        visited.add(v);
        for(next of rooms[v]) {
            if(!visited.has(next)) {
                dfs(next);
            } 
        }
    }
    dfs(0);
    return visited.size==rooms.length;
};

// bfs
var canVisitAllRooms = function(rooms) {
    let visited = new Set(); // O(1);
    let q = [0]; // 시작 0번방
    while(q.length>0) {
        let v = q.shift();
        visited.add(v);
        for(next of rooms[v]) {
            if(!visited.has(next)) {
                q.push(next);
            } 
        }
    }
    return visited.size==rooms.length;
};
