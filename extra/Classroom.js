/**
 * Classroom
 * @constructor
 * @param scene - Reference to MyScene object
 */
class Classroom extends CGFobject {
	constructor(scene) {
        super(scene);

        this.tables = [

        ];
	}
	display(){
        this.scene.pushMatrix();{
            this.scene.translate(0, 0.5, 0);
            this.top.display();
        } this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(0.4, 0, 0.2);
            this.leg[0].display();
        } this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(-0.4, 0, 0.2);
            this.leg[1].display();
        } this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(0.4, 0, -0.2);
            this.leg[2].display();
        } this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(-0.4, 0, -0.2);
            this.leg[3].display();
        } this.scene.popMatrix();

    }
}

