// Tikeshwar Deep

var first = Math.random();
var second = Math.random();

first = first * 6;
second = second * 6;

first = Math.floor(first) + 1;
second = Math.floor(second) + 1;

function test() {
   var userName = document.getElementById('a').value;
   var userName2 = document.getElementById('b').value;
  if(a===b){second=first;}
  if (first > second) {
    document.querySelector("user1").innerHTML =""+ userName +" , You are Lucky than your friend  "+userName2+" ";
  }

  if (second > first) {
    document.getElementById("user1").innerHTML=""+userName+" , Your friend " + userName2 + " is more lucky than you. ";
  }

  if (first===second) {
    document.getElementById("user1").innerHTML=""+userName+" , You and Your friend " + userName2 + ", both are Lucky. ";
  }

  document.querySelector("h1").innerHTML = "Refresh to Check your Luck Again.";
  document.getElementsByTagName("input")[0].classList.add("visible");
  document.getElementsByTagName("input")[1].classList.add("visible");
  document.querySelector("button").classList.add("visible");
  document.getElementById("play").innerHTML = " "+ userName +" ";
  document.getElementById("play2").innerHTML = " "+ userName2 +" ";
  document.getElementById("player").classList.remove("visible");
  document.getElementById("player2").classList.remove("visible");
  document.getElementsByTagName("img")[1].setAttribute("src", "img/dice" + second + ".png");
  document.getElementsByTagName("img")[0].setAttribute("src", "img/dice" + first + ".png");

}
