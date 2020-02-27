/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;
        this.green  = new MyDiamond (this.scene);
        this.purple = new MyTriangleSmall(this.scene);
        this.red = new MyTriangleSmall(this.scene);
        this.pink = new MyTriangle(this.scene);
        this.yellow = new MyParallelogram(this.scene);
        this.orange = new MyTriangleBig(this.scene);
        this.blue = new MyTriangleBig(this.scene);
	}
    display(){
        //Moving green
        this.scene.pushMatrix(); {
            let m_trans = [ 1,  0,  0,  0,
                            0,  1,  0,  0,
                            0,  0,  1,  0,
                            0,  1,  0,  1];
            this.scene.multMatrix(m_trans);
            this.green .display();
        } this.scene.popMatrix();
        
        //Moving purple
        this.scene.pushMatrix(); {
            this.scene.translate(-1,0,0);
            this.purple.display();
        } this.scene.popMatrix();
        
        //Moving red
        this.scene.pushMatrix(); {
            this.scene.translate(1,0,0);
            this.scene.rotate(+90.0*Math.PI/180, 0, 0, 1);
            this.red.display();
        } this.scene.popMatrix();
        
        //Moving pink
        this.scene.pushMatrix(); {
            this.scene.translate(2,0,0);
            this.pink.display();
        } this.scene.popMatrix();

        //Moving yellow
        this.scene.pushMatrix(); {
            this.scene.translate(1,-1,0);
            this.scene.rotate(Math.PI,0,1,0);
            this.yellow.display();
        } this.scene.popMatrix();
        
        //Moving orange
        this.scene.pushMatrix(); {
            this.scene.translate(-2,0,0);
            this.scene.rotate(135*Math.PI/180,0,0,1);
            this.orange.display();
        } this.scene.popMatrix();

        //Moving blue
        this.scene.pushMatrix(); {
            this.scene.translate(-4.83,0,0);
            this.scene.rotate(-135*Math.PI/180,0,0,1);
            this.blue.display();
        } this.scene.popMatrix();
    }
}
