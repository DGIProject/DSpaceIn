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

    this.createElements();
}

GAME.prototype.createElements = function() {
    this.map = new MAP('Test', {width: this.canvas.width, height: this.canvas.height});
    this.planeP = new PLANE(0, 'planeP', 0, true, {x: Math.floor(this.map.grid.width / 2), y: (this.map.grid.height - 2)});

    this.planes = [];
    this.planes.push(this.planeP);
};

GAME.prototype.drawScene = function(newBloc) {
    this.context2d.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.map.drawGrid(this.context2d, newBloc);

    for(var i = 0; i < this.planes.length; i++)
    {
        this.planes[i].drawPlane(this.context2d);
    }
};
