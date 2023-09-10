// 수정.. 대체 뭐가 틀린거임?
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter input: ", function(input) {
  const n = Number(input);
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  console.log(sum);
  // 등차수열의 합:console.log(n*(n+1)/2);
  rl.close();
});
