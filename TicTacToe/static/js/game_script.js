const restart = document.querySelector("button");
const squares = document.getElementsByTagName("td");
var running = true;

function clearBoard(){
  console.log("Reset clicked");
  document.getElementById("winner").innerText = " --- ";
  for(var i = 0; squares.length; i++){
    squares[i].textContent = "";
  }
  running = true;
}

function hasWon(){
  var winner;
    // ROWS (3)
  if(squares[0].textContent === squares[1].textContent && squares[1].textContent === squares[2].textContent && squares[2].textContent !== ""){
    console.log(squares[0].textContent + " wins!");
    winner = squares[0].textContent;
    running = false;
  }
  if(squares[3].textContent === squares[4].textContent && squares[4].textContent === squares[5].textContent && squares[5].textContent !== ""){
    console.log(squares[3].textContent + " wins!");
    winner = squares[3].textContent;
    running = false;
  }
  if(squares[6].textContent === squares[7].textContent && squares[7].textContent === squares[8].textContent && squares[8].textContent !== ""){
    console.log(squares[6].textContent + " wins!");
    winner = squares[6].textContent;
    running = false;
  }
  //COLUMNS (3)
  if(squares[0].textContent === squares[3].textContent && squares[3].textContent === squares[6].textContent && squares[6].textContent !== ""){
    console.log(squares[0].textContent + " wins!");
    winner = squares[0].textContent;
    running = false;
  }
  if(squares[1].textContent === squares[4].textContent && squares[4].textContent === squares[7].textContent && squares[7].textContent !== ""){
    console.log(squares[1].textContent + " wins!");
    winner = squares[1].textContent;
    running = false;
  }
  if(squares[2].textContent === squares[5].textContent && squares[5].textContent === squares[8].textContent && squares[8].textContent !== ""){
    console.log(squares[2].textContent + " wins!");
    winner = squares[2].textContent;
    running = false;
  }
  //DIAGONALS (2)
  if(squares[0].textContent === squares[4].textContent && squares[4].textContent === squares[8].textContent && squares[8].textContent !== ""){
    console.log(squares[0].textContent + " wins!");
    winner = squares[0].textContent;
    running = false;
  }
  if(squares[2].textContent === squares[4].textContent && squares[4].textContent === squares[6].textContent && squares[6].textContent !== ""){
    console.log(squares[2].textContent + " wins!");
    winner = squares[2].textContent;
    running = false;
  }

  if(running === false){
    if(winner === "X" || winner === "O")
      document.getElementById("winner").innerText = winner + " wins!"
  }
}

function main(){
  var round = 0;
  restart.addEventListener("click", clearBoard);
  for(var i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
      if(round % 2 === 0){
        this.textContent = "X";
        round++;
        hasWon();
      }
      else{
        this.textContent = "O";
        round++;
        hasWon();
      }
    })
  }
}

main();
