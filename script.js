const boardgame = (()=> {
  let board = [0,0,0,0,0,0,0,0,0]

function resetboar() {
  board = [0,0,0,0,0,0,0,0,0]
}

function playone (posicion) {
board[posicion]=1
}

function playtwo(posicion) {
board[posicion]=2

}

function playturn (turno,pos) {
  board[pos] = turno
}
//ronda1


function checkwin () {
  // ===== FILAS =====
  // Primera linea
  if (board[0] === board[1] && board[0] === board[2] && board[0] === 1) {
  console.log("win player1 primera linea")  
  console.log(board)
  }
  else if (board[0] === board[1] && board[0] === board[2] && board[0] === 2) {
  console.log("win player2 primera linea")
  console.log(board)
  }
  //segunda linea
  else if (board[3] === board[4] && board[3] === board[5] && board[3] === 1) {
    console.log("win player1 segunda linea") 
    console.log(board)
  }
  else if (board[3] === board[4] && board[3] === board[5] && board[3] === 2) {
    console.log("win player2 segunda linea") 
    console.log(board)
  }
  //tercera linea
  else if (board[6] === board[7] && board[6] === board[8] && board[6] === 1) {
    console.log("win player1 tercera linea") 
    console.log(board)
  }
  else if (board[6] === board[7] && board[6] === board[8] && board[6] === 2) {
    console.log("win player2 segunda linea") 
  console.log(board)}

    // ===== COLUMNAS =====
  // Primera columna (índices 0,3,6)
  else if (board[0] === board[3] && board[0] === board[6] && board[0] === 1) {
      console.log("win player1 primera columna");
      console.log(board)
  } else if (board[0] === board[3] && board[0] === board[6] && board[0] === 2) {
      console.log("win player2 primera columna");
      console.log(board)
  }
  // Segunda columna (índices 1,4,7)
  else if (board[1] === board[4] && board[1] === board[7] && board[1] === 1) {
      console.log("win player1 segunda columna");
      console.log(board)
  } else if (board[1] === board[4] && board[1] === board[7] && board[1] === 2) {
      console.log("win player2 segunda columna");
      console.log(board)
  }
  // Tercera columna (índices 2,5,8)
  else if (board[2] === board[5] && board[2] === board[8] && board[2] === 1) {
      console.log("win player1 tercera columna");
      console.log(board)
  } else if (board[2] === board[5] && board[2] === board[8] && board[2] === 2) {
      console.log("win player2 tercera columna");
      console.log(board)
  }
        // ===== DIAGONALES =====
    // Diagonal principal (índices 0,4,8)
    else if (board[0] === board[4] && board[0] === board[8] && board[0] === 1) {
        console.log("win player1 diagonal principal");
        console.log(board)
    } else if (board[0] === board[4] && board[0] === board[8] && board[0] === 2) {
        console.log("win player2 diagonal principal");
        console.log(board)
    }
    // Diagonal secundaria (índices 2,4,6)
    else if (board[2] === board[4] && board[2] === board[6] && board[2] === 1) {
        console.log("win player1 diagonal secundaria");
        console.log(board)
    } else if (board[2] === board[4] && board[2] === board[6] && board[2] === 2) {
        console.log("win player2 diagonal secundaria");
        console.log(board)
    }
}

function testwiner () {
console.log("========== FILAS ==========");

console.log("\nR1 - Primera fila Player 1");
board = [1,1,1,0,0,0,0,0,0];
console.log(board);
checkwin(board);

console.log("\nR2 - Primera fila Player 2");
board = [2,2,2,0,0,0,0,0,0];
console.log(board);
checkwin(board);

console.log("\nR3 - Segunda fila Player 1");
board = [0,0,0,1,1,1,0,0,0];
console.log(board);
checkwin(board);

console.log("\nR4 - Segunda fila Player 2");
board = [0,0,0,2,2,2,0,0,0];
console.log(board);
checkwin(board);

console.log("\nR5 - Tercera fila Player 1");
board = [0,0,0,0,0,0,1,1,1];
console.log(board);
checkwin(board);

console.log("\nR6 - Tercera fila Player 2");
board = [0,0,0,0,0,0,2,2,2];
console.log(board);
checkwin(board);

console.log("\n========== COLUMNAS ==========");

console.log("\nR7 - Primera columna Player 1");
board = [1,0,0,1,0,0,1,0,0];
console.log(board);
checkwin(board);

console.log("\nR8 - Primera columna Player 2");
board = [2,0,0,2,0,0,2,0,0];
console.log(board);
checkwin(board);

console.log("\nR9 - Segunda columna Player 1");
board = [0,1,0,0,1,0,0,1,0];
console.log(board);
checkwin(board);

console.log("\nR10 - Segunda columna Player 2");
board = [0,2,0,0,2,0,0,2,0];
console.log(board);
checkwin(board);

console.log("\nR11 - Tercera columna Player 1");
board = [0,0,1,0,0,1,0,0,1];
console.log(board);
checkwin(board);

console.log("\nR12 - Tercera columna Player 2");
board = [0,0,2,0,0,2,0,0,2];
console.log(board);
checkwin(board);

console.log("\n========== DIAGONALES ==========");

console.log("\nR13 - Diagonal principal Player 1");
board = [1,0,0,0,1,0,0,0,1];
console.log(board);
checkwin(board);

console.log("\nR14 - Diagonal principal Player 2");
board = [2,0,0,0,2,0,0,0,2];
console.log(board);
checkwin(board);

console.log("\nR15 - Diagonal secundaria Player 1");
board = [0,0,1,0,1,0,1,0,0];
console.log(board);
checkwin(board);

console.log("\nR16 - Diagonal secundaria Player 2");
board = [0,0,2,0,2,0,2,0,0];
console.log(board);
checkwin(board);

console.log("\n========== SIN GANADOR ==========");

console.log("\nR17 - Tablero sin ganador");
board = [1,2,1,1,2,2,2,1,0];
console.log(board);
checkwin(board);

console.log("\nR18 - Tablero vacío");
board = [0,0,0,0,0,0,0,0,0];
console.log(board);
checkwin(board);
} // 

function printBoard() {
  console.log(board)
}
return {playone, playtwo, checkwin, resetboar,testwiner, printBoard, playturn}
}) ()
// boardgame.playone (0)
// boardgame.playone (1)
// boardgame.playone (2)
// boardgame.checkwin()
// boardgame.resetboar() 
// boardgame.testwiner()

// const btncero = document.getElementById("btn0");
// btncero.addEventListener("click", ()=>{
//   console.log("click 0")
//   console.log(btncero.dataset.pos + "poss")
//   console.log(btncero.dataset.mark + "mark")
//   if (btncero.dataset.mark === "0") {
//       console.log("consicion true")
//       btncero.innerHTML = "1";
//       btncero.dataset.mark = "1";
//   } else {console.log("condicion false")}
//     boardgame.playone (btncero.dataset.pos)
// boardgame.printBoard()

// })
// console.log(btncero); // boton
// console.log(btncero.dataset.pos) // 0 
// boardgame.playone (btncero.dataset.pos)

// btncero.innerHTML = "1"

boardgame.checkwin()

// function (mark, poss) { 
//   // Pone una en poss la mark
// }
 let turno = 1
  function changeturn () {
    if (turno === 1) {
      turno = 2;
    } else {turno = 1} 
  }

  function printmark (pos,mark) {
    console.log("-DATA")
    console.log(mark + " mark")
    console.log(pos + " pos")
          
    boardgame.playturn(mark,pos)
    boardgame.printBoard()
    changeturn ()
  }
 printmark (0,turno)
 printmark (1,turno)
 printmark (2,turno)
 printmark (3,turno)
 printmark (4,turno)
const btncero = document.getElementById("btn0");
btncero.addEventListener("click", ()=>{
 
  console.log("click 0")
  console.log(btncero.dataset.pos + "poss")
  console.log(btncero.dataset.mark + "mark")
  if (btncero.dataset.mark === "0") {
      console.log("consicion true")
      btncero.innerHTML = "1";
      btncero.dataset.mark = "1";
  } else {console.log("condicion false")}
    boardgame.playone (btncero.dataset.pos)
boardgame.printBoard()

})




