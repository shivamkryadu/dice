var randomNum1 = Math.floor(Math.random() * 6) + 1;
console.log(randomNum1);

var randomDiceimg1 = "dice" + randomNum1 + ".png";

var randomImagesrc1 = "images/" + randomDiceimg1;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImagesrc1);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
console.log(randomNum2);

var randomDiceimg2 = "dice" + randomNum2 + ".png";

var randomImagesrc2 = "images/" + randomDiceimg2;

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImagesrc2);

if (randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins 🚩";
} else if (randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "Draw! 🙅";
}
