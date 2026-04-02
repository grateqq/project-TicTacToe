const gameconsole = (()=>{
  // console.log("hola siy funcion");
  // datos
  let board = ["","","","","","","","",""]
  let players
  let turn
  let score = [0,0]
    function inicio () {
        board.forEach((item, index, arr) => {
            arr[index] = "";
        });
        // console.log(board)
        
        players = [
            { name: "jugador1", mark: "X"},
            { name: "jugador2", mark: "O"}
        ];  
        
        turn = 0
        console.log("-----------inicio")
        // console.log(board)
        
    }

    

    function resetscore() {
        inicio()
        score = [0,0]
        console.log("reset score "+ score)
    }

    
    
    function addscore () {
        score[turn] = score[turn]+1
        console.log(`score P1= ${score[0]} score P2= ${score[1]}`)
    } 
        
    // console.log(turn)

    function changeturn() {
        if (turn === 0) { turn = 1;}
        else {turn = 0;};
    }

    function masescore() {
        players[0].score = ++players[0].score
        console.log(players[0].score)
    }


    function checkwinner () {
    // Filas
        
        if (board[0] === board[1] && board[0] === board[2] && board[0] === players[turn].mark ) {
                console.log(`win ${players[turn].name} primera linea`);
                console.log(`end game`);
                addscore ()
                inicio();
                
        } 
        else if (board[3] === board[4] && board[3] === board[5] && board[3] === players[turn].mark ) {
            console.log(`win ${players[turn].name} segunda linea`);
            console.log(`end game`);
            addscore ()
            inicio();
        } 
        else if (board[6] === board[7] && board[6] === board[8] && board[6] === players[turn].mark ) {
            console.log(`win ${players[turn].name} tercera linea`);
            console.log(`end game`);
            addscore ()
            inicio();
        } 
        // COLUMNAS
        else if (board[0] === board[3] && board[0] === board[6] && board[0] === players[turn].mark ) {
            console.log(`win ${players[turn].name} priemra columna`);
            console.log(`end game`);
            addscore ()
            inicio();
        }
        else if (board[1] === board[4] && board[1] === board[7] && board[1] === players[turn].mark ) {
            console.log(`win ${players[turn].name} segunda columna`);
            console.log(`end game`);
            addscore ()
            inicio();
        }
        else if (board[2] === board[5] && board[2] === board[8] && board[2] === players[turn].mark ) {
            console.log(`win ${players[turn].name} tercera columna`);
            console.log(`end game`);
            addscore ()
            inicio();
        }
        // Diagonales
        else if (board[0] === board[4] && board[0] === board[8] && board[0] === players[turn].mark ) {
            console.log(`win ${players[turn].name} diagonal 048`);
            console.log(`end game`);
            addscore ()
            inicio();
        } 
        else if (board[2] === board[4] && board[2] === board[6] && board[2] === players[turn].mark ) {
            console.log(`win ${players[turn].name} diagonal 246`);
            console.log(`end game`);
            addscore ();
            inicio();
        } 
        // Empate
        else if (board.every(cell => cell !== "")) {
            console.log("EMPATE ---")
            inicio();
        }
        else {
            changeturn()
            console.log("end turn --------------")
        }
        
    }

    

    function play(pos) {
        console.log ("Play " + players[turn].name + " " + players[turn].mark+ " en pos " + pos)
        if (board[pos] === "") {
        board[pos] = players[turn].mark
        console.log(board)
        checkwinner()
        gameprint.tablero()
        }
        else {console.log("lugar ocupado")}
        
    }

    



 return {play,masescore,resetscore, board, inicio, players, score}


})();

// gameconsole.play(0)
// gameconsole.play(1)
// gameconsole.play(2)
// gameconsole.play(3)
// gameconsole.play(4)
// gameconsole.play(5)
const gameprint = (()=>{
    function tablero() {
    // console.log(table + " este no cambio")
    
        const gamecontainer = document.getElementById("gamecontainer");

        gamecontainer.innerHTML = `
        <div>
            <button class="btn-xo" data-pos="0">${gameconsole.board[0]}</button>
            <button class="btn-xo" data-pos="1">${gameconsole.board[1]}</button>
            <button class="btn-xo" data-pos="2">${gameconsole.board[2]}</button>
        </div>

        <div>
            <button class="btn-xo" data-pos="3">${gameconsole.board[3]}</button>
            <button class="btn-xo" data-pos="4">${gameconsole.board[4]}</button>
            <button class="btn-xo" data-pos="5">${gameconsole.board[5]}</button>
        </div>

        <div>
            <button class="btn-xo" data-pos="6">${gameconsole.board[6]}</button>
            <button class="btn-xo" data-pos="7">${gameconsole.board[7]}</button>
            <button class="btn-xo" data-pos="8">${gameconsole.board[8]}</button>
        </div>
    `
        const buttonxo = document.querySelectorAll(".btn-xo");
        buttonxo.forEach((button) => {
            button.addEventListener("click", (event)=> {
                gameconsole.play(button.dataset.pos);
                gameprint.tablero()
            })
        })
    }

    function botones () {
       const btncontainer = document.getElementById("game-btns");
       btncontainer.innerHTML = `
        <div>
        <button id="reset">reset</button>
        <button id="reset-point">reset point</button>
        </div>
       `
       const btnreset = document.getElementById("reset")
        btnreset.addEventListener("click", ()=>{
            console.log("reset ------")
            gameconsole.inicio ()
            gameprint.tablero()
       })
    }//

    function puntajes() {
        console.log(gameconsole.players)
        console.log(gameconsole.score)
        const puntos = document.getElementById("puntajes")
        puntos.innerHTML = `
            <div>
                <p> ${gameconsole.players[0].name} mark : puntaje</p>
                <p> pla</p>
            </div>

        `

    }

return {tablero, botones, puntajes}
})()
//end -----------

gameconsole.inicio ()
gameprint.tablero()
gameprint.botones()
gameprint.puntajes()








