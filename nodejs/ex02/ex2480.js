// 수정해야함.... 동작하는데 왜 자꾸 틀렸대?
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter time in HH MM format: ", function(input) {
    const [a, b] = input.split(' ').map(Number);
    
    let totalMinutes = a * 60 + b;
    const c = Number(rl.question("Enter the time to add in minutes: "));
    
    totalMinutes += c;
    
    // Ensure totalMinutes is positive and less than 1440 (24 hours)
    totalMinutes = totalMinutes % 1440;

    const hour = parseInt(totalMinutes / 60);
    const min = totalMinutes % 60;
    
    console.log(hour + " " + min);
  
    rl.close();
});
