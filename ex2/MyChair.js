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
            this.scene.translate(0,1,0);
            this.scene.scale()
        }
        
    }
}
