function printBoard(table) {
  // console.log(table + " este no cambio")
  // console.log(table)
  const gamecontainer = document.getElementById("gamecontainer");

  gamecontainer.innerHTML = ""  
  gamecontainer.innerHTML = `
    <div>
        <button class="btn-xo" data-pos="0">${table[0]}</button>
        <button class="btn-xo" data-pos="1">${table[1]}</button>
        <button class="btn-xo" data-pos="2">${table[2]}</button>
    </div>

    <div>
        <button class="btn-xo" data-pos="3">${table[3]}</button>
        <button class="btn-xo" data-pos="4">${table[4]}</button>
        <button class="btn-xo" data-pos="5">${table[5]}</button>
    </div>

    <div>
        <button class="btn-xo" data-pos="6">${table[6]}</button>
        <button class="btn-xo" data-pos="7">${table[7]}</button>
        <button class="btn-xo" data-pos="8">${table[8]}</button>
    </div>
  `
    const buttonxo = document.querySelectorAll(".btn-xo");
    buttonxo.forEach((button) => {
      button.addEventListener("click", (event)=> {
        console.log(`click en pos ${button.dataset.pos}`);
        gameconsole.play(button.dataset.pos)
        printBoard()
      })
      } 
    )

  
  //console.log(buttonxo)


}

function printBoard(table) {
  // console.log(gameconsole.board + " este no cambio")
  // console.log(table)
  const gamecontainer = document.getElementById("gamecontainer");

  gamecontainer.innerHTML = ""  
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
        console.log(`click en pos ${button.dataset.pos}`);
        gameconsole.play(button.dataset.pos)
        printBoard()
      })
      } 
    )

  
  //console.log(buttonxo)


}