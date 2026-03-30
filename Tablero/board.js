console.log("hola")
let board = [0,0,0,0,0,0,0,0,0]
console.log(board)

function resetboar() {
  board = [0,0,0,0,0,0,0,0,0]
}

function playone (posicion) {
board[posicion]=1
console.log(board)
}

function playtwo(posicion) {
board[posicion]=2
console.log(board)
}
//ronda1


function checkwin (board) {
  // ===== FILAS =====
  // Primera linea
  if (board[0] === board[1] && board[0] === board[2] && board[0] === 1) {
  console.log("win player1 primera linea")  
  }
  else if (board[0] === board[1] && board[0] === board[2] && board[0] === 2) {
  console.log("win player2 primera linea")  
  }
  //segunda linea
  else if (board[3] === board[4] && board[3] === board[5] && board[3] === 1) {
    console.log("win player1 segunda linea") 
  }
  else if (board[3] === board[4] && board[3] === board[5] && board[3] === 2) {
    console.log("win player2 segunda linea") 
  }
  //tercera linea
  else if (board[6] === board[7] && board[6] === board[8] && board[6] === 1) {
    console.log("win player1 tercera linea") 
  }
  else if (board[6] === board[7] && board[6] === board[8] && board[6] === 2) {
    console.log("win player2 segunda linea") }

    // ===== COLUMNAS =====
  // Primera columna (índices 0,3,6)
  else if (board[0] === board[3] && board[0] === board[6] && board[0] === 1) {
      console.log("win player1 primera columna");
  } else if (board[0] === board[3] && board[0] === board[6] && board[0] === 2) {
      console.log("win player2 primera columna");
  }
  // Segunda columna (índices 1,4,7)
  else if (board[1] === board[4] && board[1] === board[7] && board[1] === 1) {
      console.log("win player1 segunda columna");
  } else if (board[1] === board[4] && board[1] === board[7] && board[1] === 2) {
      console.log("win player2 segunda columna");
  }
  // Tercera columna (índices 2,5,8)
  else if (board[2] === board[5] && board[2] === board[8] && board[2] === 1) {
      console.log("win player1 tercera columna");
  } else if (board[2] === board[5] && board[2] === board[8] && board[2] === 2) {
      console.log("win player2 tercera columna");
  }
        // ===== DIAGONALES =====
    // Diagonal principal (índices 0,4,8)
    else if (board[0] === board[4] && board[0] === board[8] && board[0] === 1) {
        console.log("win player1 diagonal principal");
    } else if (board[0] === board[4] && board[0] === board[8] && board[0] === 2) {
        console.log("win player2 diagonal principal");
    }
    // Diagonal secundaria (índices 2,4,6)
    else if (board[2] === board[4] && board[2] === board[6] && board[2] === 1) {
        console.log("win player1 diagonal secundaria");
    } else if (board[2] === board[4] && board[2] === board[6] && board[2] === 2) {
        console.log("win player2 diagonal secundaria");
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

playone (0)
playone (1)
playone (2)
checkwin (board)
resetboar() 