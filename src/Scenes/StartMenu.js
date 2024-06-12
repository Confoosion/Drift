class StartMenu extends Phaser.Scene {
    constructor() {
        super("StartMenu");
        this.my = {background: {}};
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.image("background", "background.png");
    }

    create() {
        // background
        let my = this.my;
        my.background = this.add.image(600,500, "background");

        // Add start game option this.add.text(380, 400, 'Press "S" to Start', { fontSize: '40px', fill: '#ECBB12', fontFamily: 'fantasy'}).setOrigin(0.5);
        const startGameText = this.add.text(600, 440, 'Tutorial', {
            fontSize: '50px',
            fill: '#ffffff',
            fontFamily: 'fantasy'
        }).setOrigin(0.5);
        startGameText.setInteractive();
        startGameText.on('pointerdown', () => {
            this.scene.start('DriftTrack');
        });
   }
}