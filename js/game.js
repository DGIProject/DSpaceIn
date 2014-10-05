/**
 * Created by Dylan on 04/10/2014.
 */

var canvas, context2d;
var game;

var margin = 20;

function initializeGame() {
    game = new GAME(0, 'Test', 'canvas', {width: 500, height: 500});
}

function startGame() {
    setInterval(function() {
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
    }, 100);
}

initializeGame();
