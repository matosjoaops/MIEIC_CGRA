/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;
        this.Top = new MyQuad(this.scene);
        this.Bot = new MyQuad(this.scene);
        this.Lef = new MyQuad(this.scene);
        this.Rig = new MyQuad(this.scene);
        this.Fro = new MyQuad(this.scene);
        this.Bac = new MyQuad(this.scene);
    }
    display(){
        //Top
        this.scene.pushMatrix(); {
            this.scene.translate(0,+0.5,0);
            this.scene.rotate(-90.0*Math.PI/180, 1, 0, 0);
            this.Top.display();
        } this.scene.popMatrix();
        //Bot
        this.scene.pushMatrix(); {
            this.scene.translate(0,-0.5,0);
            this.scene.rotate(+90.0*Math.PI/180, 1, 0, 0);
            this.Bot.display();
        } this.scene.popMatrix();
        //Lef
        this.scene.pushMatrix(); {
            this.scene.translate(0,0,+0.5);
            this.Lef.display();
        } this.scene.popMatrix();
        //Rig
        this.scene.pushMatrix(); {
            this.scene.translate(0,0,-0.5);
            this.scene.rotate(+180.0*Math.PI/180, 1, 0, 0);
            this.Rig.display();
        } this.scene.popMatrix();
        //Fro
        this.scene.pushMatrix(); {
            this.scene.translate(+0.5, 0, 0);
            this.scene.rotate(+90.0*Math.PI/180, 0, 1, 0);
            this.Fro.display();
        } this.scene.popMatrix();
        //Bac
        this.scene.pushMatrix(); {
            this.scene.translate(-0.5, 0, 0);
            this.scene.rotate(-90.0*Math.PI/180, 0, 1, 0);
            this.Fro.display();
        } this.scene.popMatrix();      
    }
}
