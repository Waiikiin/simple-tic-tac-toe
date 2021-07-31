import Game from './Game.js'
import GameView from './GameView.js'

let game = new Game();
let gameView = new GameView();
gameView.updateTurn(game);

const tiles = document.querySelectorAll(".game__board-tile");
const restart = document.querySelector(".restart")

restart.addEventListener( "click", () =>{
    onRestartClick();
})

tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
        onTileClick(tile.dataset.index);
    })
})

function onTileClick(i) {
    game.makeMove(i);
    gameView.updateBoard(game);
}

function onRestartClick() {
    game = new Game();
    gameView.updateBoard(game);
}

