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
        this.scene.translate(0,0.15,0);
        {
            //back
            this.scene.pushMatrix();
            {
                this.scene.translate(0,0.55,0);
                this.scene.scale(0.8,1,0.2);
                this.scene.translate(0,1,0);
                this.back.display();
            }
            this.scene.popMatrix();

            //seat
            this.scene.pushMatrix();
            {
                this.scene.translate(0,0.75,0.4);
                this.scene.scale(0.8,0.2,1);
                this.scene.translate(0,1,0);
                this.seat.display();
            }
            this.scene.popMatrix();

            //legs
            this.scene.pushMatrix();
            {
                this.scene.translate(0.3,0.35,0);
                this.scene.scale(0.2,1,0.2);
                this.leg.display();
                this.scene.translate(-3,0,0);
                this.leg.display();
                this.scene.translate(0,0,4);
                this.leg.display();
                this.scene.translate(3,0,0);
                this.leg.display();
            }
            this.scene.popMatrix();
        }
    }
}
