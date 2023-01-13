var firstName = document.getElementById("welcome").innerHTML;


function changeName(){
    var name = document.getElementById("welcome").innerHTML;
    var nextName = "Ivan";
    
    if (name != nextName) {
        document.getElementById("welcome").innerHTML = nextName;
    } else {
        document.getElementById("welcome").innerHTML = firstName;
    }
    
}

let alumnos = ["Al", "Musam", "Pablo"];
console.log(alumnos[2]);

let perro={
    nombre: "Klaus",
    raza:"Dalmata",
    edad: 2,
    owners: [
        {
            name: "Pablo"
        },
        {
            name: "Luis"
        }
    ]
}

var datosPerro = `
    <ul>
        <li>Nombre: `+perro.nombre+`</li>
        <li>Raza: `+perro.raza+`</li>
    </ul>
`;

document.getElementById("datos").innerHTML = datosPerro;

function hacerSuma(){
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    
    
    let numFinal = parseInt(num1, 10) + parseInt(num2, 10);

    document.getElementById("resul").innerHTML = numFinal;
}
function hacerResta(){
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    
    
    let numFinal = parseInt(num1, 10) - parseInt(num2, 10);

    document.getElementById("resul").innerHTML = numFinal;
}
function hacerMul(){
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    
    
    let numFinal = parseInt(num1, 10) * parseInt(num2, 10);

    document.getElementById("resul").innerHTML = numFinal;
}
function hacerDiv(){
    let num1 = document.getElementById("numero1").value;
    let num2 = document.getElementById("numero2").value;
    
    
    let numFinal = parseInt(num1, 10) / parseInt(num2, 10);

    document.getElementById("resul").innerHTML = numFinal;
}

var result = 10;

function sumaCont(){
    let num3 = Number(document.getElementById("numero3").value)
    
    result *= num3;
    document.getElementById("resul2").innerHTML = result;
}