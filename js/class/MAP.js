/**
 * Created by Dylan on 05/10/2014.
 */

function MAP(name, sizeCanvas) {
    this.name = name;
    this.sizeCanvas = sizeCanvas;

    this.grid = {width: 0, height: 0};

    this.setGrid();
}

MAP.prototype.setGrid = function() {
    this.grid.width = Math.floor(this.sizeCanvas.width / 20);
    this.grid.height = Math.floor(this.sizeCanvas.height / 20);
};

MAP.prototype.drawGrid = function(context2d) {
    for(var x = 0; x < this.grid.width; x++)
    {
        context2d.beginPath();
        context2d.moveTo(0, x*20);
        context2d.lineTo(this.sizeCanvas.width, x*20);
        context2d.stroke();
    }

    for(var y = 0; y < this.grid.height; y++)
    {
        context2d.beginPath();
        context2d.moveTo(y*20, 0);
        context2d.lineTo(y*20, this.sizeCanvas.height);
        context2d.stroke();
    }
};
