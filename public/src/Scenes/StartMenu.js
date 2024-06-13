class StartMenu extends Phaser.Scene {
    constructor() {
        super("StartMenu");
        this.my = {background: {}};
        this.mapNum = 0;
        this.codeNum = "";
    }

    preload() {
        this.load.setPath("./assets/");
        this.load.image("background", "background.png");
    }

    create() {
        this.socket = io();


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
        const multiplayerText = this.add.text(900, 430, 'Create Lobby', {
            fontSize: '45px',
            fill: '#ffffff',
            fontFamily: 'fantasy'
        }).setOrigin(0.5);
        multiplayerText.setInteractive();
        multiplayerText.on('pointerdown', () => {
            this.mapNum = Math.round(Math.random() * 2 + 1);
            console.log(this.mapNum);
            this.codeNum = getCode(3);
            console.log("Game code: " + this.codeNum);
            this.scene.start('DriftTrack');
        });

        const joinLobbyText = this.add.text(900, 470, 'Join Lobby', {
            fontSize: '45px',
            fill: '#ffffff',
            fontFamily: 'fantasy'
        }).setOrigin(0.5);
        joinLobbyText.setInteractive();
        joinLobbyText.on('pointerdown', () => {
            let userInput = prompt("Enter game code:");

            this.socket.on('gameInformationCorrect', (roomObj) => {

                if(roomObj[userInput]){
                    console.log("Hello");
                }
                console.log("Game code: " + userInput);
                if(userInput === roomObj.code){
                    console.log("Hello");
                    this.scene.start('DriftTrack');
                }
                else{
                    console.log("No game code found");
                }
            })
        });

        // tutorial?
        const tutorialText = this.add.text(600, 430, 'tutorial', {
            fontSize: '45px',
            fill: '#ffffff',
            fontFamily: 'fantasy'
        }).setOrigin(0.5);
        tutorialText.setInteractive();
        tutorialText.on('pointerdown', () => {
            this.scene.start('DriftTrack');
        });

   }
}

function getCode(length)
{
    var result = '';
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for(var i=0; i < length; i++){
        result += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return result;
}