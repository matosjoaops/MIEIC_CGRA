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
	}
    display(){
        this.scene.pushMatrix(); {
            let m_trans = [ 1,  0,  0,  0,
                            0,  1,  0,  0,
                            0,  0,  1,  0,
                            0,  1,  0,  1];
            this.scene.multMatrix(m_trans);
            this.green .display();
        } this.scene.popMatrix();
        
        this.scene.pushMatrix(); {
            this.scene.translate(-1,0,0);
            this.purple.display();
        } this.scene.popMatrix();
        
        this.scene.pushMatrix(); {
            this.scene.translate(1,0,0);
            this.scene.rotate(+90.0*Math.PI/180, 0, 0, 1);
            this.red.display();
        } this.scene.popMatrix();
        
        this.scene.pushMatrix(); {
            this.scene.translate(2,0,0);
            this.pink.display();
        } this.scene.popMatrix();
    }
}
