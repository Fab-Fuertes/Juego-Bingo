let board = document.querySelector('.board');

function getRandom(){
    let start = document.getElementById('start').value;
    let end =document.getElementById('end').value;
    document.getElementById('number').innerHTML = 'El numero es:' + getRandomBetween(parseInt(start), parseInt(end));

}


function getRandomBetween(start, end){
    return Math.floor(Math.random()*(end-start+1)) +start;
}



let filas = document.getElementById('dimensiones').value;
let columnas = document.getElementById('dimensiones').value;

function llenarMatrizAleatoria(filas, columnas) {

    let matriz = [];
    for (let i = 0; i < filas; i++) {
      matriz[i] = [];
      for (let j = 0; j < columnas; j++) {
        matriz[i][j] = getRandomBetween(1,50); 
      }
    }
    return matriz;
}


let matrizAleatoria = llenarMatrizAleatoria(filas, columnas);


function mostrarMatrizHTML(matriz) {
    let tabla = document.getElementById('matriz1');
    tabla.innerHTML = ''; // Limpiar la tabla antes de mostrar la nueva matriz
    for (let i = 0; i < matriz.length; i++) {
      let fila = document.createElement('tr');
      for (let j = 0; j < matriz[i].length; j++) {
        let celda = document.createElement('td');
        celda.textContent = matriz[i][j];
        fila.appendChild(celda);
      }
      tabla.appendChild(fila);
    }
  }


function dibujarFichas(){
    matrizAleatoria.forEach(fila => fila.forEach(elemento => { board.innerHTML += `<div class= 'ficha'>${elemento}</div>`}))

}

mostrarMatrizHTML(matrizAleatoria);

