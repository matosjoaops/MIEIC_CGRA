/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;
        this.child = {
            green : new MyDiamond (this.scene),
            purple: new MyTriangleSmall(this.scene),
            red   : new MyTriangleSmall(this.scene),
            pink  : new MyTriangle(this.scene),
            yellow: new MyParallelogram(this.scene),
            orange: new MyTriangleBig(this.scene),
            blue  : new MyTriangleBig(this.scene)
        }
        this.initMaterials();
    }
    enableNormalViz(){
        for(let k of Object.keys(this.child))
            this.child[k].enableNormalViz();
    }
    disableNormalViz(){
        for(let k of Object.keys(this.child))
            this.child[k].disableNormalViz();
    }
    initMaterials(){

        this.material = new CGFappearance(this.scene);
        this.material.setAmbient(0.1, 0.1, 0.1, 1);
        this.material.setDiffuse(0.9, 0.9, 0.9, 1);
        this.material.setSpecular(0.1, 0.1, 0.1, 1);
        this.material.setShininess(10.0);
        this.material.loadTexture('images/tangram-lines.png');
        this.material.setTextureWrap('REPEAT', 'REPEAT');

    }
    display(){
        //Moving green
        this.material.apply();

        this.scene.pushMatrix(); {
            let m_trans = [ 1,  0,  0,  0,
                            0,  1,  0,  0,
                            0,  0,  1,  0,
                            0,  1,  0,  1];
            this.scene.multMatrix(m_trans);
            this.child.green .display();
        } this.scene.popMatrix();
        
        //Moving purple
        this.scene.pushMatrix(); {
            this.scene.translate(-1,0,0);
            this.child.purple.display();
        } this.scene.popMatrix();
        
        //Moving red
        this.scene.pushMatrix(); {
            this.scene.translate(1,0,0);
            this.scene.rotate(+90.0*Math.PI/180, 0, 0, 1);
            this.child.red.display();
        } this.scene.popMatrix();
        
        //Moving pink
        this.scene.pushMatrix(); {
            this.scene.translate(2,0,0);
            this.child.pink.display();
        } this.scene.popMatrix();

        //Moving yellow
        this.scene.pushMatrix(); {
            this.scene.translate(1,-1,0);
            this.scene.rotate(Math.PI,0,1,0);
            this.child.yellow.display();
        } this.scene.popMatrix();
        
        //Moving orange
        this.scene.pushMatrix(); {
            this.scene.translate(-2,0,0);
            this.scene.rotate(135*Math.PI/180,0,0,1);
            this.child.orange.display();
        } this.scene.popMatrix();

        //Moving blue
        this.scene.pushMatrix(); {
            this.scene.translate(-4.83,0,0);
            this.scene.rotate(-135*Math.PI/180,0,0,1);
            this.child.blue.display();
        } this.scene.popMatrix();
    }
}
