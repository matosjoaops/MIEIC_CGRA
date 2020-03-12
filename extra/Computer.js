/**
 * DesktopScreen
 * @constructor
 * @param scene - Reference to MyScene object
 */
class DesktopScreen extends MyUnitCubeQuad {
	constructor(scene) {
        super(scene);
	}
	display(){
        //Support
        this.scene.pushMatrix();{
            this.scene.translate(0, 0.007, 0);
            this.scene.scale(0.20, 0.014, 0.08);
            super.display();
        } this.scene.popMatrix();
        //Vertical
        this.scene.pushMatrix();{
            this.scene.translate(0, 0.064, 0.006);
            this.scene.scale(0.06, 0.10, 0.01);
            super.display();
        } this.scene.popMatrix();
        //Screen
        this.scene.pushMatrix();{
            this.scene.translate(0, 0.11, 0.006);
            this.scene.rotate(-7*Math.PI/180, 1, 0, 0);
            this.scene.pushMatrix();{
                this.scene.translate(0, 0.07, 0.01);
                this.scene.pushMatrix();{
                    this.scene.translate(0, 0, 0.007);
                    this.scene.scale(0.474, 0.268, 0.014);
                    super.display();
                } this.scene.popMatrix();
                this.scene.pushMatrix();{
                    this.scene.translate(0, 0, -0.01);
                    this.scene.scale(0.18, 0.14, 0.02);
                    super.display();
                } this.scene.popMatrix();
            } this.scene.popMatrix();
        } this.scene.popMatrix();
    }
}

/**
 * Computer
 * @constructor
 * @param scene - Reference to MyScene object
 */
class Computer extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;
        this.screen = new DesktopScreen(this.scene);
	}
	display(){
        this.scene.pushMatrix();{
            this.screen.display();
        } this.scene.popMatrix();
    }
}
