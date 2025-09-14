import Phaser from "phaser";

export default class StartScene extends Phaser.Scene {
  constructor() {
    super("StartScene");
  }

  preload() {
    this.load.image("tiles", "assets/sprites/crate32.png"); // simple tile sprite
    this.load.tilemapCSV("map", "assets/sprites/grid.csv");
  }

  create() {
    const map = this.make.tilemap({ key: "map", tileWidth: 32, tileHeight: 32 });
    const tileset = map.addTilesetImage("tiles", null, 32, 32);
    this.layer = map.createLayer(0, tileset, 0, 0).setPipeline("Light2D");

    // Lights
    this.lights.enable().setAmbientColor(0x555555);
    this.offsets = [0.1, 0.3, 0.5, 0.7];
    this.lights.addLight(100, 100, 200).setColor(0xff0000).setIntensity(2.5);
    this.lights.addLight(700, 500, 200).setColor(0x00ff00).setIntensity(2.5);

    // Title
    this.add.text(400, 200, "STEM Fighting Game", {
      fontSize: "40px",
      color: "#ffffff",
      fontStyle: "bold"
    }).setOrigin(0.5);

    this.startText = this.add.text(400, 400, "Press SPACE to Start", {
      fontSize: "24px",
      color: "#00ff00"
    }).setOrigin(0.5);

    this.tweens.add({
      targets: this.startText,
      alpha: 0,
      duration: 800,
      yoyo: true,
      repeat: -1
    });

    this.input.keyboard.once("keydown-SPACE", () => {
      this.scene.start("FightScene");
    });
  }

  update() {
    this.lights.lights.forEach((currLight, index) => {
      if (index < this.offsets.length) {
        currLight.x = 400 + Math.sin(this.offsets[index]) * 1000;
        this.offsets[index] += 0.02;
      }
    });
  }
}
