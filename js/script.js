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

//DETERMINO IL VINCITORE

//paragono i risultati

let winner = 'è un pareggio';

if (computerNumber > userNumber) {
    winner = 'vince il computer'
} else if (userNumber > computerNumber) {
    winner = 'vince l\'utente'
}

//STAMPO IN PAGINA

computerResult.innerText = computerNumber;
userResult.innerText = userNumber;
winnerResult.innerText = winner;


/*
ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/

/*
0. richiamo gli elementi dal DOM
1. Creo un array con mail valide
2. creo variabile di risultato
3. faccio inserire l'e-mail all'utente
4. controllo se è presente
5. mostro iul risultato
*/

// FASE PREPARATORIA

// Richiamo gli elemnti dal DOM
const userMail = document.getElementById('email');
const userCheck = document.getElementById('check');
const accessResult = document.getElementById('access');

//creo un array con mail valide
const allEmail = ['tom@gmail', 'luke@libero', 'otto@hotmail'];

//creo variabile di risultato
let result = 'non puoi accedere';

//FASE DI ELABORAZIONE

//chiedo all'utente la mail
userCheck.addEventListener('click', function () {

    //email utente
    const inputMail = userMail.value.trim();

    //controllo email se valida
    for (i = 0; i < allEmail.length; i++) {

        //controllo
        if (inputMail === allEmail[i]) {
            result = 'puoi accedere';
        }
    }

    //mostro il risualto in pagina
    accessResult.innerText = result;
}
)