/*
ESERCIZIO 1 - Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Stampiamo in pagina i due tiri e il risultato
*/

/*
0. richiamo gli elementi dal DOM
1. genero i numeri in due costanti separate
2. paragono i risultati 
3. dichiaro il vincitore
4. stampo in pagina il risultato
*/

//FASE PREPARATORIA

const computerResult = document.getElementById('computer');
const userResult = document.getElementById('user');
const winnerResult = document.getElementById('winner');

//genero i numeri

const computerNumber = Math.floor(Math.random() * 6) + 1;
const userNumber = Math.floor(Math.random() * 6) + 1;

