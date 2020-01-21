

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function gameLoop(delta) {
    update(delta);
    draw();
    window.requestAnimationFrame(gameLoop);
}

function update(delta) {

}

function draw() {
    ctx.fillRect(0, 0, 100, 100);
}

window.requestAnimationFrame(gameLoop);