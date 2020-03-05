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
            this.scene.scale(1, 0.007, 0.5);
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
	}
	display(){

    }
}

