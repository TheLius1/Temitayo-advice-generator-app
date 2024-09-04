"use strict";
// SELECTORS
const diceBtn = document.querySelector(".dice--btn");
const adviceID = document.getElementById("adviceID");
const adviceText = document.querySelector(".adviceText");

const generateAdvice = async function () {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  const { id, advice } = data.slip;

  //   replace html text with data
  adviceID.innerHTML = id;
  adviceText.innerHTML = advice;
};
diceBtn.addEventListener("click", generateAdvice);
