//seleziono lelemento dal html  1
const billAmmount = document.getElementById("bill-ammount");
const people = document.getElementById("people");
const tipButton = document.getElementById("tip-ammount");
const total = document.getElementById("total");
const tip = document.querySelectorAll(".tip"); //sono piu bottoni uso queryall
const resetButton = document.querySelector(".reset"); //solo uno uso senza all

//aggiungo un eventlistener per vedere i cambiamenti dell'utente e chiamo la funzione     3
billAmmount.addEventListener("input", billAmmountFunction);
people.addEventListener("input", peopleFunction);
tip.forEach(function (val) {
  val.addEventListener("click", valueFunction);
});
resetButton.addEventListener("click", reset);

//ne modifico il valore          2
billAmmount.value = "0.0";
people.value = "1";
tipButton.innerHTML = "$" + (0.0).toFixed(2);
total.innerHTML = "$" + (0.0).toFixed(2);

//faccio 2 funzioni inventate per usare js  4
let billAmmountJs = 0.0;
let peopleJs = 1;
let tipValueJs = 0.15;

//le funzioni
function billAmmountFunction() {
  billAmmountJs = parseFloat(billAmmount.value);
  calculateTips();
}

function peopleFunction() {
  peopleJs = parseFloat(people.value);
  calculateTips();
}

function valueFunction(event) {
  tip.forEach(function (val) {
    console.log(val);
    val.classList.remove("active-tip");
    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add("active-tip");
      tipValueJs = parseFloat(val.innerHTML) / 100;
    }
  });
  calculateTips();
}

function calculateTips() {
  if (peopleJs >= 1) {
    let tipAmmount = (billAmmountJs * tipValueJs) / peopleJs;
    let totalFinal = (billAmmountJs * tipAmmount) / peopleJs;
    tipButton.innerHTML = "$" + tipAmmount.toFixed(2);
    total.innerHTML = "$" + totalFinal.toFixed(2);
  }
}

function reset() {
  billAmmount.value = "0.0";
  billAmmountFunction();
  people.value = "1";
  peopleFunction();
}
