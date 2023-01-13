let preguntas = [
    {
        titulo: "Que es HTML",
        respuestas: [
            {
                titulo: "No existe",
                isCorrect: false,
            },
            {
                titulo: "Lenguaje de programacion",
                isCorrect: false,
            },
            {
                titulo: "Un lenguaje de marcas",
                isCorrect: true,
            },
            {
                titulo: "Si",
                isCorrect: false,
            }
        ],
        titulo: "Que es java",
        respuestas: [
            {
                titulo: "No existe",
                isCorrect: false,
            },
            {
                titulo: "Lenguaje de programacion",
                isCorrect: true,
            },
            {
                titulo: "Un lenguaje de marcas",
                isCorrect: false,
            },
            {
                titulo: "Un te",
                isCorrect: false,
            }
        ],
        titulo: "Cuanto es 4 + 5",
        respuestas: [
            {
                titulo: "20",
                isCorrect: false,
            },
            {
                titulo: "1/4",
                isCorrect: true,
            },
            {
                titulo: "1",
                isCorrect: false,
            },
            {
                titulo: "9",
                isCorrect: true,
            }
        ]
    }
]


let pos = 0;
let isAnswered = false;
let correctAnswers = 0;

function inicQuiz() {

    document.getElementById("pregunta").innerHTML = preguntas[pos].titulo;

    let buttons = ``

    preguntas[pos].respuestas.forEach((respuesta, index) => {
        buttons += `<button id = "btn` + index + `"onclick="checkCorrect(` + index + `)" class="w-full bg-slate-100 text-start p-2 mt-2">` + respuesta.titulo + `</button>`
    })

    document.getElementById("respuestas").innerHTML = buttons
}

function siguientePreg() {
    if(preguntas.length == pos + 1){
        showResults();
    
    } else {
        pos++;
        isAnswered = false;
        inicQuiz();
    }
    
}

function checkCorrect(buttonNum) {
    let idBtn = "btn" + buttonNum

    if (!isAnswered) {
        if (preguntas[pos].respuestas[buttonNum].isCorrect) {
            console.log("Correct")
            document.getElementById(idBtn).className = "w-full bg-green-500 text-start p-2 mt-2"
            correctAnswers++;
        } else {
            console.log("Not Correct")
            document.getElementById(idBtn).className = "w-full bg-red-500 text-start p-2 mt-2"
            //  document.getElementById(idBtn).classList.replace("bg-slate-100", "bg-red-500")
            
            let index = preguntas[pos].respuestas.findIndex(respuesta => respuesta.isCorrect == true)
            let puff = "btn" + index
            document.getElementById(puff).className = "w-full bg-green-500 text-start p-2 mt-2"
        }

        isAnswered = true
    }


}

function showResults(){
    document.getElementById("game").classList.add("hidden")
    document.getElementById("game").classList.remove("hidden")

    document.getElementById("result").innerHTML = correctAnswers + " de " + preguntas.length
}

inicQuiz();