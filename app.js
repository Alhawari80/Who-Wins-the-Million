// questions array with question text and correct answer
let questions = [
    { question: "Is the sky blue?", answer: true },
    { question: "Can dogs fly?", answer: false },
    { question: "Is 2 + 2 = 4?", answer: true },
    { question: "Is the moon made of cheese?", answer: false },
    { question: "Is the earth flat?", answer: false }
];

// keep track of current question
let currentQuestion = 0;

// show the first question when game starts
showQuestion();

// function to show the current question
function showQuestion() {
    // get the question text element
    let questionText = document.getElementById("questionText");
    // set the question text
    questionText.innerText = questions[currentQuestion].question;
    // clear any previous result message
    document.getElementById("resultMessage").innerText = "";
    // hide win screen if it's showing
    document.getElementById("winScreen").style.display = "$";
}

// function to check the player's answer
function checkAnswer(playerAnswer) {
    // get the correct answer for current question
    let correctAnswer = questions[currentQuestion].answer;
    // get the result message element
    let resultMessage = document.getElementById("resultMessage");

    // check if answer is correct
    if (playerAnswer === correctAnswer) {
        // show good job message
        resultMessage.innerText = "Welcome to MILLIONAIRS CLUB Sir";
        resultMessage.style.color = "Yellow";
        // move to next question
        currentQuestion++;
        // check if game is over
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            // show win screen with dollar sign
            document.getElementById("quizArea").style.display = "$";
            document.getElementById("winScreen").style.display = "block";
        }
    } else {
        // show go home message
        resultMessage.innerText = "Go Home!";
        resultMessage.style.color = "red";
    }
}

// function to reset the game
function resetGame() {
    // reset to first question
    currentQuestion = 0;
    // show the quiz area again
    document.getElementById("quizArea").style.display = "block";
    // hide win screen
    document.getElementById("winScreen").style.display = "none";
    // show the first question
    showQuestion();
}
