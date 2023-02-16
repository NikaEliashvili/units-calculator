const convertBtn = document.querySelector(".convert-btn");
const convertBtnDiv = document.querySelector("#convert-btn-div");
let inputEl = document.querySelector(".input-box");
const metersToFeet = document.getElementById("metersToFeet");
const litersToGallons = document.getElementById("litersToGallons");
const kilogramsToPounds = document.getElementById("kilogramsToPounds");
let num;
/*
1 meter = 3.28084 feet
1 liter = 0.264172 gallon
1 kilogram = 2.20462 pound
*/

convertBtnDiv.addEventListener("click", function () {
  convertBtnDiv.innerHTML =
    '<button class="convert-btn hover">Convert</button>';
  setTimeout(function () {
    convertBtnDiv.innerHTML = '<button class="convert-btn">Convert</button>';
  }, 100);
  if (inputEl.value) {
    num = inputEl.value;
    metersToFeet.textContent = `${num} Meters = ${(num * 3.28084).toFixed(
      3
    )} Feets | ${num} Feets = ${(num / 3.28084).toFixed(3)} Meters `;
    litersToGallons.textContent = `${num} Liters = ${(num * 0.264172).toFixed(
      3
    )} Gallons | ${num} Gallons = ${(num / 0.264172).toFixed(3)} mMters `;
    kilogramsToPounds.textContent = `${num} Kilos = ${(num * 2.20462).toFixed(
      3
    )} Pounds | ${num} Pounds = ${(num / 2.20462).toFixed(3)} Kilos `;
  }
  inputEl.value = "";
});
