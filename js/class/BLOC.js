/**
 * Created by Dylan on 05/10/2014.
 */

function BLOC(id, name, texture) {
    this.id = id;
    this.name = name;
    this.texture = texture;

    this.canGo = true;

    this.position = {x: 0, y: 0};

    this.firstTime = true;
}
