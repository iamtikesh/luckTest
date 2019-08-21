// var userName=document.getElementsById("name");

var first = Math.random();
var second = Math.random();

first = first * 6;
second = second * 6;

first = Math.floor(first) + 1;
second = Math.floor(second) + 1;

function test() {
   var userName = document.getElementById('a').value;
  if (first > second) {
    document.querySelector("h1").innerHTML = "" + userName + " ! You are Lucky ";
  }

  if (second >= first) {
    document.querySelector("h1").innerHTML = "" + userName + " ! You are UnLucky ";
  }

  document.querySelector("input").classList.add("visible");
  document.querySelector("button").classList.add("visible");
  document.getElementById("play").innerHTML = " "+ userName +" !";
  document.getElementById("player").classList.remove("visible");
  document.getElementById("player2").classList.remove("visible");
  document.getElementsByTagName("img")[1].setAttribute("src", "img/dice" + second + ".png");
  document.getElementsByTagName("img")[0].setAttribute("src", "img/dice" + first + ".png");
  document.getElementById("refresh-me").classList.remove("visible");
}
