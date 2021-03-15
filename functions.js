let questions = [
    {

        question: "As-tu déjà bu de l'alcool ?",
        answers: ["Oui", "Non"]

    },

    {

        question: "As-tu déjà consommé de la drogue ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "As-tu déjà été complice de vente de fausse drogue ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "As-tu déjà vomi à cause de l'alcool ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "As-tu déjà vomi à cause d'une chicha ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "As-tu déjà vomi plus de 2 fois dans la même soirée ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "As-tu déjà eu des relations sexuelles ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "As-tu déjà eu des relations sexuelles anales ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "Aimes-tu le sexe anale ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "Es-tu gay ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "As-tu déjà regardé la catégorie porno 'gay' ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "As-tu déjà regardé la catégorie porno 'granny' ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "As-tu déjà payé pour du sexe ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "As-tu déjà fait attendre tes amis pour du sexe ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "As-tu déjà tripoté quelqu'un avec son consentement ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "As-tu déjà tripoté quelqu'un sans son consentement ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "As-tu déjà été tripoté par un inconnu sans ton consentement ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "As-tu déjà saigné du nez après une droite bien placé ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "T'es-tu déjà déféquer dessus au cours des 5 dernière années ?",
        answers: ["Oui", "Non"]

    },
    {

        question: "As-tu menti durant ce test ?",
        answers: ["Oui", "Non"]

    },
];

console.log(questions);

// Function game

const buttonStart = document.querySelector('.startTest');
buttonStart.addEventListener("click", startTest);
var next = 0;
var firstButton = 0;
var secondButton = 1;
let score = 0;


function startTest() {

    document.getElementById('btnStart').style.display = "none";

    if (next < questions.length) {

        document.getElementById("question").innerHTML = `${questions[next]['question']} </br>
        <button id="${firstButton}" class="choiceYes" onclick="startTest()">${questions[next]['answers'][0]}</button> </br>
        <button id="${secondButton}" class="choiceNo" onclick="startTest()">${questions[next]['answers'][1]}</button>`;

        let idFirstButton = document.getElementById(firstButton).id;
        let idSecondButton = document.getElementById(secondButton).id;
        const answerYes = document.querySelector('.choiceYes');
        const answerNo = document.querySelector('.choiceNo');
        answerYes.addEventListener("click", scoreYes);
        answerNo.addEventListener("click", scoreNo);
        
        /////////////////////////////////////////////////////////////////

        // Function if user click on button Yes

        function scoreYes() {

            if (idFirstButton == 0) {
                score = score - 100;
            } else if (idFirstButton == 2) {
                score = score - 200;
            } else if (idFirstButton == 4) {
                score = score - 250;
            } else if (idFirstButton == 6) {
                score = score - 300;
            } else if (idFirstButton == 8) {
                score = score - 100;
            } else if (idFirstButton == 10) {
                score = score - 400;
            } else if (idFirstButton == 12) {
                score = score - 200;
            } else if (idFirstButton == 14) {
                score = score - 500;
            } else if (idFirstButton == 16) {
                score = score - 1000;
            } else if (idFirstButton == 18) {
                score = score - 0;
            } else if (idFirstButton == 20) {
                score = score - 0;
            } else if (idFirstButton == 22) {
                score = score - 1500;
            } else if (idFirstButton == 24) {
                score = score - 500;
            } else if (idFirstButton == 26) {
                score = score - 100;
            } else if (idFirstButton == 28) {
                score = score - 100;
            } else if (idFirstButton == 30) {
                score = score - 1500;
            } else if (idFirstButton == 32) {
                score = score - 500;
                alert("Quelle indignité ...");
            } else if (idFirstButton == 34) {
                score = score - 500;
            } else if (idFirstButton == 36) {
                score = score - 3000;
                alert("C'EST GAME !");
            } else if (idFirstButton == 38) {
                score = score - 5000;
                
            }

            console.log(score);

        }

        /////////////////////////////////////////////////////////////////

        // Function if user click on button No

        function scoreNo() {

            if (idSecondButton == 1) {
                score = score + 100;
            } else if (idSecondButton == 3) {
                score = score + 300;
            } else if (idSecondButton == 5) {
                score = score + 10;
            } else if (idSecondButton == 7) {
                score = score + 200;
            } else if (idSecondButton == 9) {
                score = score + 10;
            } else if (idSecondButton == 11) {
                score = score + 100;
            } else if (idSecondButton == 13) {
                score = score + 500;
            } else if (idSecondButton == 15) {
                score = score + 500;
            } else if (idSecondButton == 17) {
                score = score + 100;
            } else if (idSecondButton == 19) {
                score = score + 0;
            } else if (idSecondButton == 21) {
                score = score + 0;
            } else if (idSecondButton == 23) {
                score = score + 10;
            } else if (idSecondButton == 25) {
                score = score + 100;
            } else if (idSecondButton == 27) {
                score = score + 10;
            } else if (idSecondButton == 29) {
                score = score + 200;
            } else if (idSecondButton == 31) {
                score = score + 100;
            } else if (idSecondButton == 33) {
                score = score + 100;
            } else if (idSecondButton == 35) {
                score = score + 200;
            } else if (idSecondButton == 37) {
                score = score + 100;
            } else if (idSecondButton == 39) {
                score = score + 0;
            }

            console.log(score);

        }
        /* console.log(score); */

        firstButton += 2;
        secondButton += 2;
        next++;

    } else {

        finalScore();

    }

}

///////////////////////////////////////////////////////

// Function display final score

function finalScore() {

    document.getElementById("question").innerHTML = `Ton score est de ${score} </br>`;

}

///////////////////////////////////////////////////////




