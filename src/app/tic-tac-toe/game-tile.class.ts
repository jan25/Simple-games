
export class GameTile {

    // if this tile already selected
    used = false;

    // for static images for cross/check
    imgSrc = '';

    // 1 or -1 for myTurn and MachineTurn
    mark = 0;

    // co-ordinates for this tile
    x = 0;
    y = 0;

}