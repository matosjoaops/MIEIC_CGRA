/**
 * Classroom
 * @constructor
 * @param scene - Reference to MyScene object
 */
class Classroom extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;

        this.table = new Table(this.scene);
        this.chair = new MyChair(this.scene);
	}
	display(){
        this.scene.pushMatrix();{
            this.scene.translate(0.6, 0, 1);
            this.scene.rotate(90*Math.PI/180, 0, 1, 0);
            this.table.display();
        } this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(0.6, 0, 2.02);
            this.scene.rotate(90*Math.PI/180, 0, 1, 0);
            this.table.display();
        } this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(1.12, 0, 1);
            this.scene.rotate(90*Math.PI/180, 0, 1, 0);
            this.table.display();
        } this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(1.12, 0, 2.02);
            this.scene.rotate(90*Math.PI/180, 0, 1, 0);
            this.table.display();
        } this.scene.popMatrix();
    }
}

