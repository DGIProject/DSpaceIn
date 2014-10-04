/**
 * Created by Dylan on 04/10/2014.
 */

var canvas, context2d;
var game;

function initializeGame() {
    game = new GAME(0, 'Test', 'canvas', {width: 500, height: 500});
}

initializeGame();
