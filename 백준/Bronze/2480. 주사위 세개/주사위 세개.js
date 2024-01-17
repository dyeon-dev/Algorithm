const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("", function(input) {
  const [a, b, c] = input.split(" ").map(Number);
  
  if (a == b && a == c) console.log(10000 + a * 1000); 
  else if (a == b) console.log(1000 + a * 100);
  else if (b == c) console.log(1000 + b * 100);
  else if (a == c) console.log(1000 + c * 100);
  else console.log(Math.max(a, b, c) * 100);
  
  rl.close();
});
