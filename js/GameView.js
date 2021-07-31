export default class GameVeiw {
    updateBoard(game){
        this.updateTurn(game);
        const winningCombination = game.findWinningCombination();

        for (let i=0; i<game.board.length; i++){
            const tile = document.querySelector(`.game__board-tile[data-index='${i}'`);
             
            tile.classList.remove("tile-winner");
            
            let tileType = game.board[i] === 'X' ?  'tile-x' : 'tile-o';
            tile.innerHTML = `<span class="${tileType}">${game.board[i] ? game.board[i] : ""}</span>`
            
            if(winningCombination && winningCombination.includes(i)){
                tile.classList.add("tile-winner");
            }
        }
    }

    updateTurn(game){
        let playerX = document.querySelector(".game__header__player-x");
        let playerO = document.querySelector(".game__header__player-o");
        
        if (game.turn === 'X'){
            playerX.classList.add('active');
            playerO.classList.remove('active');
        }else{
            playerO.classList.add('active');
            playerX.classList.remove('active');
        }

    }
}