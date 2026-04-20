class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
    

        this.sKey = null;
        this.fKey = null;
        this.aKey = null;
        this.dKey = null;


    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
       
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability
        //right arms
        let rightArmXOffset = 80;
        let rightArmYOffset = 40;

        //left arms
        let leftArmXOffset = -80;
        let leftArmYOffset = 40;

        //eyes
        let eyeOffSetX = 0;
        let eyeOffSetY = -30;

        //anntenas
        let anntenasXOffSet = 40;
        let anntenasYOffSet = -80;

        //legs
        let legsOffSetX = 65;
        let legsOffSetY = 120;

        //mouth
        let mouthOffSetX = 0;
        let mouthOffSetY = 40;

        //fang
        let fangOffSetX = 0;
        let fangOffSetY = 40;

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.

        //body
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        //arms
        my.sprite.rightHand = this.add.sprite(this.bodyX+rightArmXOffset, this.bodyY+rightArmYOffset, "monsterParts", "arm_blueA.png");
        my.sprite.leftHand = this.add.sprite(this.bodyX+leftArmXOffset, this.bodyY+leftArmYOffset, "monsterParts", "arm_blueB.png");
        my.sprite.leftHand.flipX = true;
        //eye
        my.sprite.eye = this.add.sprite(this.bodyX + eyeOffSetX, this.bodyY + eyeOffSetY, "monsterParts", "eye_yellow.png");
        //annenta
        my.sprite.annenta = this.add.sprite(this.bodyX + anntenasXOffSet, this.bodyY + anntenasYOffSet, "monsterParts", "detail_blue_antenna_small.png");
        my.sprite.leftAnnenta = this.add.sprite(this.bodyX - anntenasXOffSet, this.bodyY + anntenasYOffSet, "monsterParts", "detail_blue_antenna_small.png");
        my.sprite.leftAnnenta.flipX = true;
        //legs
        my.sprite.rightLeg = this.add.sprite(this.bodyX + legsOffSetX, this.bodyY + legsOffSetY, "monsterParts", "leg_whiteD.png");
        my.sprite.leftLeg = this.add.sprite(this.bodyX - legsOffSetX, this.bodyY + legsOffSetY, "monsterParts", "leg_whiteD.png");
        my.sprite.leftLeg.flipX = true;
        //mouth
        my.sprite.mouth = this.add.sprite(this.bodyX + mouthOffSetX, this.bodyY + mouthOffSetY, "monsterParts", "mouth_closed_happy.png");
        //fang
        my.sprite.fang = this.add.sprite(this.bodyX + fangOffSetX, this.bodyY + fangOffSetY, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fang.visible = false;


        //smile
        this.sKey = this.input.keyboard.addKey('S');
        this.sKey.on('down', (key,event) =>{
            my.sprite.mouth.visible = true;
            my.sprite.fang.visible = false;
        });
        //fangs
        this.fKey = this.input.keyboard.addKey('F');
        this.fKey.on('down', (key,event) =>{
            my.sprite.mouth.visible = false;
            my.sprite.fang.visible = true;
        });
        //movement
        this.aKey = this.input.keyboard.addKey('A');
        this.dKey = this.input.keyboard.addKey('D');



    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        let speed = 5;
        

        if (this.aKey.isDown) {
        for (let part in my.sprite) {
            my.sprite[part].x -= speed;
            }
        }

        if (this.dKey.isDown) {
        for (let part in my.sprite) {
            my.sprite[part].x += speed;
            }
        }

       
    }

}