function solution(park, routes) {
  const N = park.length;
  const M = park[0].length;

  // 시작 좌표 설정
  let start;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (park[i][j] == "S") start = [i, j];
    }
  }
  const directions={
      E:[0,1],
      W:[0,-1],
      S:[1,0],
      N:[-1,0]
  }
  
  for(route of routes) {
      let [d, n] = route.split(" ")
      let num = parseInt(n);
      let [nx, ny]=start;
      let step=0;
      while(step<num) {
        nx+=directions[d][0]
        ny+=directions[d][1]
        if(nx<0 || ny<0 || nx>=N || ny>=M || park[nx][ny]=='X') break;
        step++;
      }
      if(step==num) start=[nx, ny]
  }
  return start;
}