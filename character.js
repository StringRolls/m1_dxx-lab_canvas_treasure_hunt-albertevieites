class Character {
  constructor(col, row) {
    this.col = col;
    this.row = row;
    
    this.upImg = new Image();
    this.upImg.src = "./images/character-up.png";

    this.rightImg = new Image();
    this.rightImg.src = "./images/character-right.png";

    this.downImg = new Image();
    this.downImg.src = "./images/character-down.png";

    this.leftImg = new Image();
    this.leftImg.src = "./images/character-left.png";

    this.sprite = this.downImg
  }

  moveUp(params) {
    this.row -= 1;
    this.sprite = this.upImg
  }
  moveRight(params) {
    this.col += 1;
    this.sprite = this.rightImg
  }
  moveDown(params) {
    this.row += 1;
    this.sprite = this.downImg
  }
  moveLeft(params) {
    this.col -= 1;
    this.sprite = this.leftImg
  }
}
