// 1-When someone clicks button again all the parameters will be reset instead of highscore
// 2-The cumputer will generate a secret number
// 3-The user will click the check button
// if the user number will be higher than the pc number we'll have:
// - a message : too high!
// - a score : -1
// if the user number will be lower than the pc number we'll have:
// - a message : too low!
// - a score : -1
// if the user number will be correct we'll have:
// - a message : congratulations!!!
// - a score : -1 and the actual score
// highscore: actual score.. if during a game, the highscore will be higher than the previous highscore the new highscore will be replece
// highscore will be reset just if the user will refresh the page

// Secret random number
let randomNum = Math.floor(Math.random() * 20 + 1);
console.log("pc number", randomNum, typeof randomNum);
let score = 20;
let highscore = 0;

document.getElementById("check").addEventListener("click", printNum);
function printNum() {
  var userNum = parseInt(document.getElementById("guess").value);
  console.log("user number", userNum, typeof userNum);
  if (userNum === randomNum) {
    document.getElementById("message").innerHTML =
      "Congratulations!🎉 YOU WIN 🏆 ";
    document.getElementById("guessed").innerHTML = userNum;
    document.querySelector("body").style.backgroundColor = "orange";
    document.getElementById("guessed").style.width = "300px";
    if (score > highscore) {
      highscore = score;
      document.getElementById("highscore").innerHTML = highscore;
    }
  } else if (userNum > randomNum) {
    score--;
    document.getElementById("score").innerHTML = score;
    document.getElementById("message").innerHTML = "Too high! 📈";
    if (score < 1) {
      document.getElementById("message").innerHTML = "YOU LOST THE GAME! 😩";
    }
  } else if (userNum < randomNum) {
    score--;
    document.getElementById("score").innerHTML = score;
    document.getElementById("message").innerHTML = "Too low! 📉";
    if (score < 1) {
      document.getElementById("message").innerHTML = "YOU LOST THE GAME! 😩";
    }
  } else {
    document.getElementById("message").innerHTML = "No number! ⛔️";
  }
}

document.getElementById("again").addEventListener("click", resetPar);
function resetPar() {
  score = 20;
  randomNum = Math.floor(Math.random() * 20 + 1);
  console.log("pc number", randomNum, typeof randomNum);
  //   text
  document.getElementById("message").innerHTML = "Start guessing...";
  document.getElementById("score").innerHTML = "20";
  document.getElementById("guessed").innerHTML = "?";
  document.querySelector("body").style.backgroundColor = "black";
  document.getElementById("guessed").style.width = "180px";
  document.getElementById("guess").value = "";
}
