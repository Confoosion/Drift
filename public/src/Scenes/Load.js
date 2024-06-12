class Load extends Phaser.Scene {
    constructor() {
        super("load");
    }
    
    preload()
    {
        this.load.setPath("./assets/");

        this.load.image("track_tiles", "spritesheet_tiles.png");
        this.load.tilemapTiledJSON("tutorial_track", "tutorialTrack.tmj");
        this.load.tilemapTiledJSON("track1", "level1Track.tmj");

        this.load.image("yellowCar", "car_yellow_1.png");
        this.load.image("blackCar", "car_black_1.png");


        this.load.spritesheet("SpeedBoosts", "spritesheet_tiles.png", {
            frameWidth: 128,
            frameHeight: 128
        });
    }

    create() {
        // ...and pass to the next Scene
        // this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.scene.start("StartMenu");
   }
}