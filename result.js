const submitButton = document.getElementById("submit-btn");
const username = document.getElementById("username");


submitButton.addEventListener("click", saveScore());

saveScore = score => {
    console.log("Button submitted");
    score.preventDefault();
};