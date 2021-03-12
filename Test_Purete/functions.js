let questions = [
    {

        question: "As-tu déjà bu de l'alcool ?",
        answers: ["Oui", "Non"]

    },

    {

        question: "As-tu déjà consommé de la drogue ?",
        answers: ["Oui", "Non"]

    }
];

// Function game

const buttonStart = document.querySelector('.startTest');
buttonStart.addEventListener("click", startTest);
let next = 0;
let idFirstButton = 0;
let idSecondButton = 1;


function startTest() {

    document.getElementById('btnStart').style.display = "none";

    if (next < questions.length) {

        document.getElementById("question").innerHTML = `${questions[next]['question']} </br>
        <button id="0" class="choice" onclick="startTest()">${questions[next]['answers'][0]}</button> </br>
        <button id="${idSecondButton}" class="choice" onclick="startTest()">${questions[next]['answers'][1]}</button>`;

        idFirstButton += 2;
        idSecondButton += 2;
        next++;

        console.log(document.getElementById("0").onclick);

    } else {

        nextQuestion();
        finalScore();

    }


    /* } */
}

///////////////////////////////////////////////////////

function nextQuestion() {

    document.getElementById("question").innerHTML = `Test`

}

///////////////////////////////////////////////////////

let score = 0;


function finalScore() {

    if (document.getElementById("0").onclick === 0) {
        score = score - 10;
    } else {
        score = score + 20;
    }
    console.log("score = " + score);
    console.log(document.getElementById("0").onclick);

}