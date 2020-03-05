/**
 * TableTop
 * @constructor
 * @param scene - Reference to MyScene object
 */
class TableTop extends MyUnitCubeQuad {
	constructor(scene) {
        super(scene);
	}
	display(){
        this.scene.pushMatrix();{
            this.scene.translate(0, 0.0035, 0);
            this.scene.scale(1, 0.007, 0.5);
            super.display();
        } this.scene.popMatrix();
    }
}

/**
 * TableLeg
 * @constructor
 * @param scene - Reference to MyScene object
 */
class TableLeg extends MyUnitCubeQuad {
	constructor(scene) {
        super(scene);
	}
	display(){
        this.scene.pushMatrix();{
            this.scene.translate(0, 0.25, 0);
            this.scene.scale(0.04, 0.5, 0.04);
            super.display();
        } this.scene.popMatrix();
    }
}

/**
 * Table
 * @constructor
 * @param scene - Reference to MyScene object
 */
class Table extends MyUnitCubeQuad {
	constructor(scene) {
        super(scene);
        this.top = new TableTop(this.scene);
        this.leg = [
            new TableLeg(this.scene),
            new TableLeg(this.scene),
            new TableLeg(this.scene),
            new TableLeg(this.scene)
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

