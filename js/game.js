/**
 * Created by Dylan on 04/10/2014.
 */

var canvas, context2d;
var game;

var tabKeys = [];

var margin = 20;

function initializeGame() {
    game = new GAME(0, 'Test', 'canvas', {width: 500, height: 500});
}

function startGame() {
    document.onkeydown = function(e) {
        var code = e.keyCode;

        if(tabKeys.indexOf(code) < 0)
        {
            tabKeys.push(code);
        }
    };

    document.onkeyup = function(e) {
        var code = e.keyCode;
        var index = tabKeys.indexOf(code);

        if(index >= 0)
        {
            tabKeys.splice(index, 1);
        }
    };

    setInterval(function() {
        for(var i = 0; i < tabKeys.length; i++)
        {
            switch(tabKeys[i]) {
                case 37 :
                    game.planes[0].movePlane(DIRECTION.LEFT, game.map);
                    break;
                case 39 :
                    game.planes[0].movePlane(DIRECTION.RIGHT, game.map);
                    break;
                case 38 :
                    game.planes[0].movePlane(DIRECTION.TOP, game.map);
                    break;
                case 40 :
                    game.planes[0].movePlane(DIRECTION.BOTTOM, game.map);
                    break;
                default :
                    console.log('notGameKey');
            }
        }

        if(margin == 20)
        {
            margin = 0;

            game.drawScene(true);
        }
        else
        {
            game.drawScene(false);
        }

        margin += 1;
    }, 20);
}

initializeGame();
