import Cannon from './Cannon.js';
import Vector2f from './core/Vector2f.js';

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let cannon = new Cannon(new Vector2f(300, 350), new Vector2f(160*0.9, 170*0.9));

ctx.fillCircle = function(x, y, radius) {
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, Math.PI*2, false);
	ctx.fill();
}

canvas.onmousedown = function() {
    cannon.launch();
};

Math.toRadians = function(angle) {
    return angle * Math.PI / 180;
}

Math.toDegrees = function(angle) {
    return angle * 180 / Math.PI;
}

function gameLoop(delta) {
    update(delta);
    draw();
    window.requestAnimationFrame(gameLoop);
}

function update(delta) {
    cannon.update(delta);
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cannon.draw(ctx);
}

window.requestAnimationFrame(gameLoop);