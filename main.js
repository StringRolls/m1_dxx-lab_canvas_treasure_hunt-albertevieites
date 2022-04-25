// main.js
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = canvas.width;
const height = canvas.height;

const player = new Character(0, 0);
const treasure = new Treasure();
// Iteration 1
function drawGrid() {
  // TODO: write the code of the function
  for (var x = 0; x < 500; x += 50) {
    for (var y = 0; y < 500; y += 50) {
      ctx.strokeRect(x + 5, y + 5, 50, 50);
    }
  }
}

function drawTreasure() {
  ctx.drawImage(treasure.img, 40, 40, 50, 50);
}

function drawPlayer() {
  ctx.drawImage(player.sprite, 100, 100, 50, 50)
}

function drawEverything() {
  drawGrid();
  drawPlayer();
  drawTreasure();
}

window.onload = ()=>drawEverything();

