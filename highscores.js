const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const highScoreList = document.getElementById("highscoreList");
console.log("highScores",highScores);

highScores.map(score => {
    console.log(score);
    const newScoreItem = document.createElement("li");
    newScoreItem.innerText = `${score.name}: ${score.score}`;
    highScoreList.appendChild(newScoreItem);
});


