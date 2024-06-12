let config = {
    parent: 'phaser-game',
    type: Phaser.CANVAS,
    render: {
        pixelArt: true  // prevent pixel art from getting blurred when scaled
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    width: 1280,
    height: 960,
    scene: [Load, StartMenu, Game, DriftTrack]
}

var cursors;
const SCALE = 1.0;
var my = {sprite: {}};

const game = new Phaser.Game(config);