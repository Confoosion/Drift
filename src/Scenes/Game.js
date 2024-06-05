class Game extends Phaser.Scene {
    constructor() {
        super("Drift");

        this.velocity = 0;
    }

    init() {
        this.TILESIZE = 128;
        this.SCALE = 1.0;
        this.TILEWIDTH = 40;
        this.TILEHEIGHT = 30;
        this.TILEHEIGHTOFFSET = -96;
    }

    create()
    {
        this.map = this.add.tilemap("tutorial_track", this.TILESIZE, this.TILESIZE, this.TILEHEIGHT, this.TILEWIDTH);

        this.tileset = this.map.addTilesetImage("trackTileset", "track_tiles");

        this.backgroundLayer = this.map.createLayer("backgroundLayer", this.tileset, 0, this.TILEHEIGHTOFFSET);
        this.trackLayer = this.map.createLayer("trackLayer", this.tileset, 0, this.TILEHEIGHTOFFSET);


        my.sprite.player = this.physics.add.sprite(300, 500, "yellowCar").setScale(0.75); 
        // this.car1 = this.add.sprite(300, 500, "yellowCar");
        // this.car1.setScale(0.75);

        cursors = this.input.keyboard.createCursorKeys();
    }

    update()
    {
        if(cursors.up.isDown && this.velocity <= 400)
        {
            this.velocity+=7;
        }
        else
        {
            if (this.velocity >= 7)
            {
                this.velocity -= 7;
            }
        }

        if(cursors.left.isDown)
        {
            my.sprite.player.body.angularVelocity = -5*(this.velocity/10);
        }
        else if(cursors.right.isDown)
        {
            my.sprite.player.body.angularVelocity = 5*(this.velocity/10);
        }
        else
        {
            my.sprite.player.body.angularVelocity = 0;
        }

        my.sprite.player.body.velocity.x = this.velocity * Math.cos((my.sprite.player.angle-90)*0.01745);
        my.sprite.player.body.velocity.y = this.velocity * Math.sin((my.sprite.player.angle-90)*0.01745);
    }
}