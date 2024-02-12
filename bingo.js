
function getRandom(){
    document.getElementById('number').innerHTML = 'El numero es:' + getRandomBetween(parseInt(1), parseInt(50));
    let turnos= +1;

}



function getRandomBetween(start, end){
    return Math.floor(Math.random()*(end-start+1)) +start;
}

const tamanoTres = document.getElementById('tamano-tres');

tamanoTres.addEventListener('click', () => {
    let hide = document.getElementById('grid-container1');
    currentDisplay = hide.style.display;

    if (currentDisplay === 'none') {
        hide.style.display = 'block';
    } else {
        hide.style.display = 'none';
    }
});