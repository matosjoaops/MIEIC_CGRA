/**
 * Island1
 * @constructor
 * @param scene - Reference to MyScene object
 */
class Island1 extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;

        this.table = new Table(this.scene);
        this.chair = new MyChair(this.scene);
	}
	display(){
        this.scene.pushMatrix();{
            this.scene.translate(0.51, 0, 0.26);
            this.table.display();
        } this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(0.51, 0, -0.26);
            this.table.display();
        } this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(-0.51, 0, 0.26);
            this.table.display();
        } this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(-0.51, 0, -0.26);
            this.table.display();
        } this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(0.5,-0.1,-0.6);
            this.chair.display();
        }this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(-0.5,-0.1,-0.6);
            this.chair.display();
        }this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(-0.5,-0.1,0.6);
            this.scene.rotate(Math.PI,0,1,0);
            this.chair.display();
        }this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(0.5,-0.1,0.6);
            this.scene.rotate(Math.PI,0,1,0);
            this.chair.display();
        }this.scene.popMatrix();
    }
}

/**
 * Island2
 * @constructor
 * @param scene - Reference to MyScene object
 */
class Island2 extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;

        this.table = new Table(this.scene);
        this.chair = new MyChair(this.scene);
	}
	display(){
        this.scene.pushMatrix();{
            this.scene.translate(0.51, 0, 0.26);
            this.table.display();
        } this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(0.51, 0, -0.26);
            this.table.display();
        } this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(-0.26, 0, 0);
            this.scene.rotate(90*Math.PI/180, 0, 1, 0);
            this.table.display();
        } this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(0.5,-0.1,-0.6);
            this.chair.display();
        }this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(-0.6,-0.1,0);
            this.scene.rotate(Math.PI/2,0,1,0);
            this.chair.display();
        }this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(0.5,-0.1,0.6);
            this.scene.rotate(Math.PI,0,1,0);
            this.chair.display();
        }this.scene.popMatrix();
    }
}

/**
 * Classroom
 * @constructor
 * @param scene - Reference to MyScene object
 */
class Classroom extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;

        this.island1 = new Island1(this.scene);
        this.island2 = new Island2(this.scene);
	}
	display(){
        this.scene.pushMatrix();{
            this.scene.translate(1, 0, 1.5);
            this.scene.rotate(90*Math.PI/180, 0, 1, 0);
            this.island1.display();
        } this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(3, 0, 1.5);
            this.scene.rotate(90*Math.PI/180, 0, 1, 0);
            this.island1.display();
        } this.scene.popMatrix();
        this.scene.pushMatrix();{
            this.scene.translate(1, 0, 4.5);
            this.scene.rotate(90*Math.PI/180, 0, 1, 0);
            this.island2.display();
        } this.scene.popMatrix();
    }
}

