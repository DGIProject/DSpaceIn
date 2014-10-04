/**
 * Created by Dylan on 04/10/2014.
 */

function GAME(id, name, canvasId, sizeCanvas) {
    this.id = id;
    this.name = name;

    this.canvas = document.getElementById(canvasId);
    this.canvas.width = sizeCanvas.width;
    this.canvas.height = sizeCanvas.height;

    this.context2d = this.canvas.getContext('2d');

    this.grid = {width: 0, height: 0};

    this.setGrid();
}

GAME.prototype.setGrid = function() {
    this.grid.width = Math.floor(this.canvas.width / 20);
    this.grid.height = Math.floor(this.canvas.height / 20);
};

GAME.prototype.drawGrid = function() {
    for(var x = 0; x < this.grid.width; x++)
    {
        this.context2d.beginPath();
        this.context2d.moveTo(0, x*20);
        this.context2d.lineTo(this.canvas.width, x*20);
        this.context2d.stroke();
    }

    for(var y = 0; y < this.grid.height; y++)
    {
        this.context2d.beginPath();
        this.context2d.moveTo(y*20, 0);
        this.context2d.lineTo(y*20, this.canvas.height);
        this.context2d.stroke();
    }
};
