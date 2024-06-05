class Load extends Phaser.Scene {
    constructor() {
        super("load");
    }
    
    preload()
    {
        this.load.setPath("./assets/");

        this.load.image("track_tiles", "spritesheet_tiles.png");
        this.load.tilemapTiledJSON("tutorial_track", "tutorialTrack.tmj");

        this.load.image("yellowCar", "car_yellow_1.png");
    }

    create() {
        // ...and pass to the next Scene
        // this.game.physics.startSystem(Phaser.Physics.P2JS);
        this.scene.start("Drift");
   }
}