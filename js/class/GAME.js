/**
 * Created by Dylan on 04/10/2014.
 */

function GAME(id, name, canvasId, sizeCanvas) {
    this.id = id;
    this.name = name;

    this.canvas = document.getElementById(canvasId);
    this.canvas.width = sizeCanvas.width;
    this.canvas.height = sizeCanvas.height;

    this.planeProbability = 1; // valeur entre 1-10

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
    if (newBloc)
    {
        var newPlane = new PLANE(1,'name',0,false,{x: Math.floor(Math.random()*20+1) , y: 0 });
        this.planes.push(newPlane);
    }
    this.map.drawGrid(this.context2d, newBloc);
    this.planes[0].drawPlane(this.context2d)

    //this.context2d.save();
    //this.context2d.rotate(1);

    for(var i = 1; i < this.planes.length; i++)
    {
        this.planes[i].drawPlane(this.context2d)
        this.planes[i].movePlane()
    }

   // this.context2d.restore();

};