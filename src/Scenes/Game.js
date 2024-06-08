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
        this.wall = this.map.addTilesetImage("wallTileset", "track_tiles");

        this.backgroundLayer = this.map.createLayer("backgroundLayer", this.tileset, 0, this.TILEHEIGHTOFFSET);
        this.trackLayer = this.map.createLayer("trackLayer", this.tileset, 0, this.TILEHEIGHTOFFSET);
        this.wallLayer = this.map.createLayer("wallLayer", this.wall, 0, 0);
        this.wallLayer.setCollisionByProperty({
            collides: true
        });

        my.sprite.player = this.physics.add.sprite(300, 500, "yellowCar").setScale(0.75); 
        const radius = my.sprite.player.height * 0.25;
        my.sprite.player.body.setCircle(radius, 4, radius);

        this.physics.add.collider(my.sprite.player, this.wallLayer);

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
        let angle = 0;
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

        // my.sprite.player.angle = my.sprite.player.body.angularVelocity;
        my.sprite.player.body.velocity.x = this.velocity * Math.cos((my.sprite.player.angle-90)*0.01745);
        my.sprite.player.body.velocity.y = this.velocity * Math.sin((my.sprite.player.angle-90)*0.01745);
        // this.physics.velocityFromRotation(my.sprite.player.rotation, this.velocity, my.sprite.player.body.velocity);
        // this.car1.body.velocity.x = this.velocity * Math.cos((this.car1.angle-90)*0.01745);
        // this.car1.body.velocity.y = this.velocity * Math.sin((this.car1.angle-90)*0.01745);
    }
}