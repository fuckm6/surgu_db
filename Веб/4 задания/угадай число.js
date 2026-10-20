
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const secret = Math.floor(Math.random() * 10) + 1;


function check(guess) {
  if (guess === secret) {
    return "Угадал!";
  } else if (guess < secret) {
    return "Загаданное число больше";
  } else {
    return "Загаданное число меньше";
  }
}


function ask() {
  rl.question("Введите число от 1 до 10: ", function (answer) {
    const guess = Number(answer);
    console.log(check(guess));

    if (guess === secret) {
      rl.close(); 
    } else {
      ask();
    }
  });
}

ask();