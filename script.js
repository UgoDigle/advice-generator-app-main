"use strict";

const diceBtn = document.querySelector(".btn");
const adviceNumber = document.querySelector(".advice_id");
const adviceText = document.querySelector(".advice_text");
const apiUrl = "https://api.adviceslip.com/advice";

diceBtn.addEventListener("click", () => {
  fetch(apiUrl, {cache: "no-cache"})
    .then((response) => response.json())
    .then((response) => {
      let data = response.slip;
      let dataId = data.id;
      let dataAdvice = data.advice;
      adviceNumber.innerHTML = `${dataId}`;
      adviceText.innerHTML = dataAdvice;
    });
});