const againBtn = document.getElementById("again-btn");
const showAnswer = document.getElementById("show-answer");
const guessNumberInput = document.getElementById("guess-number");
const checkBtn = document.getElementById("check-btn");
const showStatus = document.getElementById("show-status");
const showTotal = document.getElementById("show-total");
const showRecord = document.getElementById("show-record");

const randomNumber = Math.trunc(Math.random() * 20);

checkBtn.addEventListener("click", () => {
  const userNumber = guessNumberInput.value;
  showTotal.textContent--;
  if (userNumber >= 1 || userNumber < 20) {
    if (userNumber < randomNumber) {
      showStatus.textContent = "Too Low";
    } else if (userNumber > randomNumber) {
      showStatus.textContent = "Too High";
    } else {
      showStatus.textContent = "You Win !";
      showAnswer.textContent = randomNumber;
      document.body.classList.add("bg-success");
      showRecord.textContent = showTotal.textContent;
    }
  } else {
    showStatus.textContent = "Please enter a number from 1 to 20";
  }
  guessNumberInput.value = "";
});

againBtn.addEventListener("click", () => {
  showStatus.textContent = "Start gaming...";
  document.body.classList.remove("bg-success");
  guessNumberInput.value = "";
  showAnswer.textContent = "?";

  showTotal.textContent = 20;
  randomNumber = Math.trunc(Math.random() * 20);
});
