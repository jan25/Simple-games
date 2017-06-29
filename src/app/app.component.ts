import { Component, Input } from '@angular/core';

import { GameTile } from './game-tile.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  gameOverMsgs: string[];
  gameOverMsg: string;

  tiles: GameTile[];

  gameOver: boolean;

  winner: number;

  imgPathPrefix = '../assets/img/';
  checkImg = this.imgPathPrefix + 'check.png';
  crossImg = this.imgPathPrefix + 'cross.png';

  constructor() {
    this.gameOverMsgs = ['You win!!', 'You Lose :(', 'Its a TIE'];
    this.init();
  }

  init() {
    this.tiles = [];
    for (var i = 0; i < 3; ++i) {
      for (var j = 0; j < 3; ++j) {
        var tile = new GameTile();
        tile.x = i;
        tile.y = j;
        this.tiles.push(tile);
      }
    }
    this.gameOver = false;
    this.winner = 0;
    this.gameOverMsg = '';
  }

  playAgain() {
    this.init();
  }

  onSelect(tile: GameTile) {
    if (!this.gameOver && !tile.used) {
      tile.used = true;
      tile.imgSrc = this.checkImg;
      tile.mark = 1;
      this.checkForWinner();

      if (!this.gameOver) this.randomMove();
      this.checkForWinner();

      if (!this.gameOver) this.checkBoardFull();
    }
  }

  checkForWinner() {
    var diag1Count = 0;
    var diag2Count = 0;
    for (var i = 0; i < 3; ++i) {
      var row = this.tiles.filter(tile => tile.x === i);
      var rowCount = row.reduce(function(a: number, b: GameTile) {
        return a + b.mark;
      }, 0);
      this.announceIfWinner(rowCount);

      var col = this.tiles.filter(tile => tile.y === i);
      var colCount = col.reduce(function(a: number, b: GameTile) {
        return a + b.mark;
      }, 0);
      this.announceIfWinner(colCount);

      diag1Count += this.tiles.find(tile => tile.x === i && tile.y === i).mark;

      switch(i) {
        case 0:
          diag2Count += this.tiles[2].mark;
          break;
        case 1:
          diag2Count += this.tiles[4].mark;
          break;
        case 2:
          diag2Count += this.tiles[6].mark;
          break;
      }
    }
    this.announceIfWinner(diag1Count);
    this.announceIfWinner(diag2Count);
  }

  checkBoardFull() {
    var boardFull = true;
    for (var tile of this.tiles) {
      if (!tile.used) {
        boardFull = false;
        break;
      }
    }
    if (boardFull) {
      this.gameOver = true;
      this.gameOverMsg = this.gameOverMsgs[2];
    }
  }

  announceIfWinner(count: number) {
    if (this.gameOver) return;

    if (count === 3) {
      this.gameOver = true;
      this.winner = 1;
      this.gameOverMsg = this.gameOverMsgs[0];
    } else if (count === -3) {
      this.gameOver = true;
      this.winner = -1;
      this.gameOverMsg = this.gameOverMsgs[1];
    }
  }

  showMsg() {

  }

  randomMove() {
    for (var tile of this.tiles) {
      if (!tile.used) {
        tile.used = true;
        tile.imgSrc = this.crossImg;
        tile.mark = -1;
        break;
      }
    }
  }

}


