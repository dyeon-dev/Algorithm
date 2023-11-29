// 수정.. 대체 뭐가 틀린거임?
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter input: ", function(input) {
  const n = Number(input);

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        console.log(i*j);
    }
}
  rl.close();
});
