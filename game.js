const question = document.getElementById("question");
// console.log(question.innerText);
const option = Array.from(document.getElementsByClassName("option")); // Html collection to an Array
//console.log(option);

let currentQuestion = [];
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = {};

let questions = [
    {
        question : "How old is Saffet?",
        option1 : 26,
        option2 : 23,
        option3 : 25,
        option4 : 27,
        answer : 1
    },
    {
        question : "Which city is capital city of Turkey?",
        option1: "Bitlis",
        option2: "Gumushane",
        option3: "Bayburt",
        option4: "Ankara",
        answer: 4
    },
    {
        question : "Which one is most famous dessert in Turkey?",
        option1 : "Pestil",
        option2 : "Muhallebi",
        option3 : "Baklava",
        option4 : "Sutlac",
        answer : 3
    }
]

const correctAnswerBonus = 10;
const maxQuestions = 3;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {

    if(availableQuestions.length === 0 || questionCounter >= maxQuestions){
        localStorage.setItem("lastScore", score);
        // save the score and go to result page.
        return window.location.assign('/result.html');
    }

    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    //console.log(currentQuestion);
    question.innerText = currentQuestion.question;

    option.forEach(option =>{
        const num = option.dataset["number"];
        //console.log("dataset number : ",num);
        option.innerText = currentQuestion["option"+num];
    });

    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

option.forEach( option => {

    option.addEventListener("click", choose => {
        
        if(!acceptingAnswers){
            return;
        }

        acceptingAnswers = false;

        const selectedOption = choose.target;
        console.log(selectedOption);
        const selectedAnswer = selectedOption.dataset["number"];

        //console.log(selectedAnswer, currentQuestion.answer);

        const addClass = selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

        if(addClass === "correct"){
            incrementScore(correctAnswerBonus);
        }

        selectedOption.classList.add(addClass);

        setTimeout( () => {
            selectedOption.classList.remove(addClass);
            getNewQuestion();
        }, 1000);

    });

});

incrementScore = num => {
    score += num;
    console.log(score);
}

startGame();