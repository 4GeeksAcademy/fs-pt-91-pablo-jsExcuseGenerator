/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateRandomNumber(maxElements) {
  return Math.floor(Math.random() * maxElements);
}

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  const excuse = document.querySelector("#excuse");

  excuse.innerHTML =
    who[generateRandomNumber(who.length)] +
    " " +
    action[generateRandomNumber(action.length)] +
    " " +
    what[generateRandomNumber(what.length)] +
    " " +
    when[generateRandomNumber(when.length)];
};
