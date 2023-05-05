
// Select The Elements 
const gameBoard = document.querySelector(".gameboard")
const gameInfo = document.querySelector(".info")
 let filledSquares = 0;
let firstPlayer = "cross"
gameInfo.textContent = `${firstPlayer} Play first`
// Make Empty Array Eo insert The square Board in it
let startCells = [ "", "", "",
                  "", "", "",
                    "", "" ,""]

function creatBoard (){
   
    startCells.forEach((cell,index)=>{
        let cellEle = document.createElement("div")
        cellEle.id = index
        cellEle.classList.add("square")
        cellEle.addEventListener("click",startPlay)    
        gameBoard.appendChild(cellEle)
    })
}
creatBoard()

function startPlay(e){
    //  increment the filledSquares variable.
    filledSquares++

 let goDisplay = document.createElement("div")
 goDisplay.classList.add(firstPlayer)
 e.target.append(goDisplay)
 firstPlayer = firstPlayer === "cross" ? "circle" : "cross"
 gameInfo.textContent = `it is Now ${firstPlayer} turn. `
 e.target.removeEventListener("click",startPlay)
checkWinner()
}

let allSquare = document.querySelectorAll(".square");

function checkWinner(){
    const winningArr = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ];
    // Check if All Square are Full 
    if(filledSquares == 9){
         gameBoard.style.opacity=.2
         gameInfo.textContent = "No Body Wins"
    }


    let croossWins = false;
    let circleWins = false;

    winningArr.forEach(array => {
        croossWins = array.every(cell => {
            return allSquare[cell].firstChild?.classList.contains("cross");
        })

        if (croossWins) {
            gameInfo.textContent = "Cross Wins";
            // Function to Styling The Winner
            if( gameInfo.textContent == "Cross Wins"){
                           crossWinsStyling()
            }
            allSquare.forEach(square => {
                square.replaceWith(square.cloneNode(true));
            })
            return
        }
    })

    winningArr.forEach(array => {
        circleWins = array.every(cell => {
            return allSquare[cell].firstChild?.classList.contains("circle");
        });
        if (circleWins) {
            gameInfo.textContent = "Circle Wins";
            // Function to Styling The Winner
            if(gameInfo.textContent == "Circle Wins"){
                circleWinsStyling()
            }
            allSquare.forEach(square => {
                square.replaceWith(square.cloneNode(true));
            });
            return;
        }
    });
}

function retunTheGame(){
    document.querySelector(".return-btn").addEventListener("click",()=>{
        window.location.reload();
    })
}

retunTheGame()

function crossWinsStyling(){
                gameBoard.style.opacity=.2
                let infoBox =document.querySelector(".info")
                infoBox.style.backgroundColor ="#FF5722"               
                infoBox.style.color ="#fff"  
}
function circleWinsStyling(){
                gameBoard.style.opacity=.2
                let infoBox =document.querySelector(".info")
                infoBox.style.backgroundColor ="#2196F3"               
                infoBox.style.color ="#fff"  
}
