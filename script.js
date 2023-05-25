console.log("Hello World!");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});

function calcFactAge(year) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - year;

  if (age >= 0) return age;
  else return `Impossible Year. Year needs to be less or equal ${currentYear}`;
}

/*const age1 = calcFactAge(2015);
console.log(age1);
console.log(calcFactAge(2020));
console.log(calcFactAge(2037));

const calcFactAge2 = (year) =>
  year <= new Date().getFullYear()
    ? new Date().getFullYear() - year
    : `Impossible year. Year needs to be less or equal ${new Date().getFullYear()}`;
console.log(calcFactAge(2015));
console.log(calcFactAge2(2037));*/

// array can mix all sorts of data
const fact = ["Lisbon is the capital of Portugal", 2015, true];
console.log(fact);
console.log(fact[0]);
console.log(fact.length);
console.log(fact[fact.length - 1]);

const [text, createdIn] = fact;
console.log(createdIn);

// ... is called threading to put the
// entire orginal array into the new one
const newFact = [...fact, "society"];
console.log(newFact);
