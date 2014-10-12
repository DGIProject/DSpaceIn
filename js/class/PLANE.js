/**
 * Created by Dylan on 04/10/2014.
 */

var DIRECTION = {
    LEFT: 1,
    RIGHT: 2,
    TOP: 3,
    BOTTOM: 4
};

function PLANE(id, name, type, isPlayer, position, infoGame) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.isPlayer = isPlayer;

    this.direction = DIRECTION.TOP;
    this.oldPos = {x: 0, y: 0};

    this.isAnimating = false;
    this.animationState = 0;

    this.isLoaded = false;

    this.loadModel(type, position, infoGame);
}

PLANE.prototype.loadModel = function(type, position, infoGame) {
    this.properties = {
        width: 40,
        height: 40,
        speed: 25, //0 - 100
        pos: {x: position.x, y: position.y}
    };

    this.properties.gap = this.properties.speed / 100;

    this.animationStateT = Math.floor(((infoGame.timeRefresh * infoGame.sizeBloc) / this.properties.gap) / (infoGame.timeRefresh * 20));

    //console.log(infoGame, this.animationStateT);

    this.isLoaded = true;

    this.test = 0;
};

PLANE.prototype.gModel = function() {
    return this.properties;
};

PLANE.prototype.drawPlane = function(context2d) {
    if(this.isLoaded)
    {
        if(this.isPlayer && this.isAnimating)
        {
            //ANIMATION
            var newGapPos = this.posGap();

            //console.log(this.test, newGapPos, this.properties.pos.y);

            context2d.drawImage(document.getElementById('space'), (newGapPos.x * 20), (newGapPos.y * 20));

            //this.isFinishedAnimation(newGapPos);

            if(this.animationState == this.animationStateT)
            {
                //END ANIMATION
                //console.log('endAnimation');

                this.isAnimating = false;
                this.animationState = 0;
            }

            this.animationState++;

            //console.log(this.animationState);
        }
        else
        {
            context2d.drawImage(document.getElementById('space'), this.properties.pos.x * 20, this.properties.pos.y * 20);
        }
    }
};

PLANE.prototype.posGap = function() {
    if (this.direction === DIRECTION.LEFT) {
        this.oldPos.x -= this.properties.gap;
    } else if (this.direction === DIRECTION.RIGHT) {
        this.oldPos.x += this.properties.gap;
    } else if (this.direction === DIRECTION.TOP) {
        this.oldPos.y -= this.properties.gap;
    } else if (this.direction === DIRECTION.BOTTOM) {
        this.oldPos.y += this.properties.gap;
    }

    return {x: this.oldPos.x, y : this.oldPos.y};
};

PLANE.prototype.movePlane = function(direction, map) {
    if(this.isLoaded)
    {
        if(this.isPlayer)
        {
            if(this.isAnimating)
            {
                return false;
            }

            var nextPos = this.nextPos(direction);

            //console.log(nextPos);

            if(nextPos.x >= 0 && nextPos.x <= map.grid.width && nextPos.y >= 0 && nextPos.y <= (map.grid.height - 2) && map.mapClass[nextPos.y][nextPos.x].canGo)
            {
                this.direction = direction;

                this.isAnimating = true;
                this.oldPos = this.properties.pos;

                //console.log(this.oldPos.y);

                this.properties.pos = nextPos;

                //console.log('nextPos' + nextPos.y);

                return true;
            }
            else
            {
                return false;
            }
        }
        else
        {
            this.properties.pos.y += 0.5;

            return true;
        }
    }
};

PLANE.prototype.nextPos = function(direction) {
    var newPos = {x: this.properties.pos.x, y: this.properties.pos.y};

    if (direction === DIRECTION.LEFT) {
        newPos.x = this.properties.pos.x - 1;
    } else if (direction === DIRECTION.RIGHT) {
        newPos.x = this.properties.pos.x + 1;
    } else if (direction === DIRECTION.TOP) {
        newPos.y = this.properties.pos.y - 1;
    } else if (direction === DIRECTION.BOTTOM) {
        newPos.y = this.properties.pos.y + 1;
    }

    return newPos;
};
