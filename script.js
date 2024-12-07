import { Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Ripple });
let slideIndex = 0;
showSlides();
const questions = [
    {
        question: "which is largest animal in the world" , 
        answer: [
            { text: "shark", correct: true},
            { text: "cow", correct: false},
            { text: "pig", correct: false},
            { text: "dog", correct: false},
        ]
    },
    {
        question: "which is largest animal in the world" , 
        answer: [
            { text: "shark", correct: true},
            { text: "cow", correct: false},
            { text: "pig", correct: false},
            { text: "dog", correct: false},
        ]
    },
    {
        question: "which is largest animal in the world" , 
        answer: [
            { text: "shark", correct: true},
            { text: "cow", correct: false},
            { text: "pig", correct: false},
            { text: "dog", correct: false},
        ]
    },
    {
        question: "which is largest animal in the world" , 
        answer: [
            { text: "shark", correct: true},
            { text: "cow", correct: false},
            { text: "pig", correct: false},
            { text: "dog", correct: false},
        ]
    }
    
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score =0;

function startQuiz(){
    currentQuestionIndex = 0;
    score =0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
        resetState();
        let currentQuestion = questions[currentQuestionIndex];
        let questionNo = currentQuestionIndex + 1;
        questionElement.innerHTML = questionNo + "." +currentQuestion.
        question;

        currentQuestion.answers.forEach(answer => {
            const button = document.createElement("button");
            button.innerHTML = answer.text;
            button.classList.add("btn");
            answerButton.appendChild(button); 
            if(answer.correct){
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click, selectAnswer")
        });
}


   function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
   }

   function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
   }
 startQuiz();
