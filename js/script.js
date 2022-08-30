let a = document.querySelector("#input1");
let b = document.querySelector("#input2");
const btn = document.getElementById("btn");
const resetBtn = document.getElementById("resetBtn");
const screen = document.getElementById("screenValue");

// Function to find account diversity grade
let accountDiversityGrade;
function loanDiversity(totalAccounts, loanTypeCount) {
  // CASE A
  if (totalAccounts > 20 && loanTypeCount === 4) {
    accountDiversityGrade = "A"; // user 1
  } else if (totalAccounts < 20 && loanTypeCount === 4) {
    accountDiversityGrade = "A"; // user 2
    //
    // CASE B
  } else if (totalAccounts < 10 && loanTypeCount === 3) {
    accountDiversityGrade = "B"; // user 3
  } else if (totalAccounts > 10 && loanTypeCount === 3) {
    accountDiversityGrade = "B"; // user 4
    //
    // CASE C
  } else if (totalAccounts === 5 && loanTypeCount === 2) {
    accountDiversityGrade = "C"; // user 5
  } else if (totalAccounts > 5 && loanTypeCount === 2) {
    accountDiversityGrade = "C"; // user 6
  } else if (totalAccounts < 5 && loanTypeCount === 2) {
    accountDiversityGrade = "C"; // user 7
    //
    // CASE D
  } else if (totalAccounts > 0 && loanTypeCount === 1) {
    accountDiversityGrade = "D"; // user 8
    //  CASE N/A
  } else {
    accountDiversityGrade = "N/A"; // user 9
  }
  return accountDiversityGrade;
}

function clear() {
  (a.value = ""), (b.value = "");
}

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (a.value === "" || b.value === "") {
    alert("Enter all values");
    return;
  }
  screen.innerHTML = loanDiversity(+a.value, +b.value);
  clear();
});
resetBtn.addEventListener("click", function () {
  screen.innerHTML = "-";
  clear();
});
