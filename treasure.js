class Treasure {
  constructor(row, col){
    this.row = row;
    this.col = col;
    this.img = new Image();
    this.img.src = "./images/treasure.png";
  }
  setRandomPosition(col, row){
    return Math.floor(Math.random())
  }
}

