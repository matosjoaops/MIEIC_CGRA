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
        this.initMaterials();
    }
    initMaterials(){
        this.materials = {};

        this.materials.green = new CGFappearance(this.scene);
        this.materials.green.setAmbient(0, 1, 0, 1);
        this.materials.green.setDiffuse(0, 1, 0, 1);
        this.materials.green.setSpecular(0, 1, 0, 1);
        this.materials.green.setShininess(10.0);
        
        this.materials.purple = new CGFappearance(this.scene);
        this.materials.purple.setAmbient(0.5, 0, 0.5, 1);
        this.materials.purple.setDiffuse(0.5, 0, 0.5, 1);
        this.materials.purple.setSpecular(0.5, 0, 0.5, 1);
        this.materials.purple.setShininess(10.0);
    
        this.materials.red = new CGFappearance(this.scene);
        this.materials.red.setAmbient(1, 0, 0, 1);
        this.materials.red.setDiffuse(1, 0, 0, 1);
        this.materials.red.setSpecular(1, 0, 0, 1);
        this.materials.red.setShininess(10.0);

        this.materials.pink = new CGFappearance(this.scene);
        this.materials.pink.setAmbient(1, 0.70, 0.75, 1);
        this.materials.pink.setDiffuse(1, 0.70, 0.75, 1);
        this.materials.pink.setSpecular(1, 0.70, 0.75, 1);
        this.materials.pink.setShininess(10.0);
        
        this.materials.yellow = new CGFappearance(this.scene);
        this.materials.yellow.setAmbient(1, 1, 0, 1);
        this.materials.yellow.setDiffuse(1, 1, 0, 1);
        this.materials.yellow.setSpecular(1, 1, 0, 1);
        this.materials.yellow.setShininess(10.0);
        
        this.materials.orange = new CGFappearance(this.scene);
        this.materials.orange.setAmbient(1, 0.5, 0, 1);
        this.materials.orange.setDiffuse(1, 0.5, 0, 1);
        this.materials.orange.setSpecular(1, 0.5, 0, 1);
        this.materials.orange.setShininess(10.0);
        
        this.materials.blue = new CGFappearance(this.scene);
        this.materials.blue.setAmbient(0, 0, 1, 1);
        this.materials.blue.setDiffuse(0, 0, 1, 1);
        this.materials.blue.setSpecular(0, 0, 1, 1);
        this.materials.blue.setShininess(10.0);
    }
    display(){
        //Moving green
        this.scene.pushMatrix(); {
            let m_trans = [ 1,  0,  0,  0,
                            0,  1,  0,  0,
                            0,  0,  1,  0,
                            0,  1,  0,  1];
            this.scene.multMatrix(m_trans);
            this.materials.green.apply();
            this.green .display();
            this.scene.setDefaultAppearance();
        } this.scene.popMatrix();
        
        //Moving purple
        this.scene.pushMatrix(); {
            this.scene.translate(-1,0,0);
            this.materials.purple.apply();
            this.purple.display();
            this.scene.setDefaultAppearance();
        } this.scene.popMatrix();
        
        //Moving red
        this.scene.pushMatrix(); {
            this.scene.translate(1,0,0);
            this.scene.rotate(+90.0*Math.PI/180, 0, 0, 1);
            this.materials.red.apply();
            this.red.display();
            this.scene.setDefaultAppearance();
        } this.scene.popMatrix();
        
        //Moving pink
        this.scene.pushMatrix(); {
            this.scene.translate(2,0,0);
            this.materials.pink.apply();
            this.pink.display();
            this.scene.setDefaultAppearance();
        } this.scene.popMatrix();

        //Moving yellow
        this.scene.pushMatrix(); {
            this.scene.translate(1,-1,0);
            this.scene.rotate(Math.PI,0,1,0);
            this.materials.yellow.apply();
            this.yellow.display();
            this.scene.setDefaultAppearance();
        } this.scene.popMatrix();
        
        //Moving orange
        this.scene.pushMatrix(); {
            this.scene.translate(-2,0,0);
            this.scene.rotate(135*Math.PI/180,0,0,1);
            this.materials.orange.apply();
            this.orange.display();
            this.scene.setDefaultAppearance();
        } this.scene.popMatrix();

        //Moving blue
        this.scene.pushMatrix(); {
            this.scene.translate(-4.83,0,0);
            this.scene.rotate(-135*Math.PI/180,0,0,1);
            this.materials.blue.apply();
            this.blue.display();
            this.scene.setDefaultAppearance();
        } this.scene.popMatrix();
    }
}
