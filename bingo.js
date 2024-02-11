
function getRandom(){
    let start = document.getElementById('start').value;
    let end =document.getElementById('end').value;
    document.getElementById('number').innerHTML = 'El numero es:' + getRandomBetween(parseInt(start), parseInt(end));

}


function getRandomBetween(start, end){
    return Math.floor(Math.random()*(end-start+1)) +start;
}


let numeroFicha= getRandomBetween(1, 50)

// let filas = document.getElementById('dimensiones').value;
// let columnas = document.getElementById('dimensiones').value;

// function llenarMatrizAleatoria(filas, columnas) {

//     let matriz = [];
//     for (let i = 0; i < filas; i++) {
//       matriz[i] = [];
//       for (let j = 0; j < columnas; j++) {
//         matriz[i][j] = getRandomBetween(1,50); 
//       }
//     }
//     return matriz;
// }


// let matrizAleatoria = llenarMatrizAleatoria(filas, columnas);

