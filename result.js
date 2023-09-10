const submitButton = document.getElementById("submit-btn");
const username = document.getElementById("username");
const score = document.getElementById("result");
const lastScore = JSON.parse(localStorage.getItem("lastScore"));

score.innerText = `Your Score ${lastScore}!`;
//console.log(lastScore);

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
//console.log(highScores);

username.addEventListener('keyup', ()=> {
    //console.log(username.value);
    if(!username.value){
        submitButton.classList.add("submit-btn-notAllowed");
        submitButton.classList.remove("submit-btn");
        submitButton.disabled = true;
    }
    else{
        submitButton.classList.remove("submit-btn-notAllowed");
        submitButton.classList.add("submit-btn");
        submitButton.disabled = false;
    }
    
});


saveScore = save => {
    console.log("Button submitted");
    save.preventDefault();

    let scoreRecords = {
        score: lastScore,
        //score: Math.floor(Math.random()*100),
        name : username.value
    };

    highScores.push(scoreRecords);

    highScores.sort(function(a, b){
        return b.score - a.score
    });

    if(highScores.length > 5){
        highScores.pop();
    }

    localStorage.setItem("highScores", JSON.stringify(highScores));

    console.log(highScores);

    window.location.assign("/index.html");

};
