/**
 * Created by Dylan on 04/10/2014.
 */

var DIRECTION = {
    LEFT: 1,
    RIGHT: 2,
    TOP: 3,
    BOTTOM: 4
};

function PLANE(id, name, type, isPlayer, position) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.isPlayer = isPlayer;

    this.isLoaded = false;

    this.loadModel(type, position);
}

PLANE.prototype.loadModel = function(type, position) {
    this.properties = {
        width: 40,
        height: 40,
        speed: 0.5,
        pos: {x: (position.x - (this.width / 2)), y: (position.y - (this.height / 2))}
    };

    this.isLoaded = true;
};

PLANE.prototype.gModel = function() {
    return this.properties;
};

PLANE.prototype.drawPlane = function(context2d, direction) {
    if(this.isLoaded)
    {
        if(this.isPlayer)
        {
            //ANIMATION
        }

        context2d.drawImage(document.getElementById('space'), this.properties.pos.x, this.properties.pos.y);
    }
};

PLANE.prototype.animationMove = function(context2d, direction) {

};

PLANE.prototype.movePlane = function(direction) {
    if(this.isLoaded)
    {
        if(this.isPlayer)
        {
            this.properties.pos = this.nextPos(direction);
        }
        else
        {
            this.properties.pos.x += 0.5;
        }
    }
}

PLANE.prototype.nextPos = function(direction) {
    var newPos = {x: 0, y: 0};

    if (direction === DIRECTION.LEFT) {
        newPos.x = this.properties.pos.x - 0.5;
    } else if (direction === DIRECTION.RIGHT) {
        newPos.x = this.properties.pos.x + 0.5;
    } else if (direction === DIRECTION.TOP) {
        newPos.y = this.properties.pos.y - 0.5;
    } else if (direction === DIRECTION.BOTTOM) {
        newPos.y = this.properties.pos.y + 0.5;
    }

    return newPos;
};
