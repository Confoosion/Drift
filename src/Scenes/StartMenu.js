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

        // single-player
        const singlePlayerText = this.add.text(300, 430, 'single-player', {
            fontSize: '45px',
            fill: '#ffffff',
            fontFamily: 'fantasy'
        }).setOrigin(0.5);
        singlePlayerText.setInteractive();
        singlePlayerText.on('pointerdown', () => {
            this.scene.start('DriftTrack');
        });

        // multiplayer 
        const multiplayerText = this.add.text(900, 430, 'multiplayer', {
            fontSize: '45px',
            fill: '#ffffff',
            fontFamily: 'fantasy'
        }).setOrigin(0.5);
        multiplayerText.setInteractive();
        multiplayerText.on('pointerdown', () => {
            this.scene.start('DriftTrack');
        });

        // tutorial?
        const tutorialText = this.add.text(600, 430, 'tutorial', {
            fontSize: '45px',
            fill: '#ffffff',
            fontFamily: 'fantasy'
        }).setOrigin(0.5);
        tutorialText.setInteractive();
        tutorialText.on('pointerdown', () => {
            this.scene.start('Drift_Tutorial');
        });

   }
}