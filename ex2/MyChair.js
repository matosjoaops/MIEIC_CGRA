/**
 * My Chair
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyChair extends MyUnitCubeQuad {
	constructor(scene) {
        super(scene);
        this.scene = scene;
        this.seat = new MyUnitCubeQuad(this.scene);
        this.leg = new MyUnitCubeQuad(this.scene);
        this.back = new MyUnitCubeQuad(this.scene);
    }
    display(){
        //back
        this.scene.pushMatrix();
        {
            this.scene.translate(0,0.54,0);
            this.scene.scale(1,0.5,0.2);
            this.scene.translate(0,1,0);
            this.back.display();
        }
        this.scene.popMatrix();

        //seat
        this.scene.pushMatrix();
        {
            this.scene.translate(0,0.5,0.3);
            this.scene.scale(1,0.2,0.7);
            this.scene.translate(0,1,0);
            this.seat.display();
        }
        this.scene.popMatrix();

        //legs
        
    }
}
