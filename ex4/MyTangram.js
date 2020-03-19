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
        this.materials.default.setAmbient(this.scene.ambient);
        this.materials.default.setDiffuse(this.scene.diffuse);
        this.materials.default.setSpecular(this.scene.specular);
        this.materials.default.setShininess(this.scene.shininess);
        this.materials.default.setEmission(this.scene.emission);

        const k = 2;

        this.materials.green = new CGFappearance(this.scene);
        this.materials.green.setAmbient(...this.scene.hexToRgbA(this.scene.customMaterialValues['Ambient']));
        this.materials.green.setDiffuse(...this.scene.hexToRgbA(this.scene.customMaterialValues['Diffuse']));
        this.materials.green.setSpecular(...this.scene.hexToRgbA(this.scene.customMaterialValues['Specular']));
        this.materials.green.setShininess(this.scene.customMaterialValues['Shininess']);

        this.materials.purple = new CGFappearance(this.scene);
        this.materials.purple.setAmbient(0.5/k, 0/k, 0.5/k, 1);
        this.materials.purple.setDiffuse(0.5/k, 0/k, 0.5/k, 1);
        this.materials.purple.setSpecular(0.5, 0, 0.5, 1);
    
        this.materials.red = new CGFappearance(this.scene);
        this.materials.red.setAmbient(1/k, 0/k, 0/k, 1);
        this.materials.red.setDiffuse(1/k, 0/k, 0/k, 1);
        this.materials.red.setSpecular(1, 0, 0, 1);

        this.materials.pink = new CGFappearance(this.scene);
        this.materials.pink.setAmbient(1/k, 0.70/k, 0.75/k, 1);
        this.materials.pink.setDiffuse(1/k, 0.70/k, 0.75/k, 1);
        this.materials.pink.setSpecular(1, 0.70, 0.75, 1);
        
        this.materials.yellow = new CGFappearance(this.scene);
        this.materials.yellow.setAmbient(1/k, 1/k, 0/k, 1);
        this.materials.yellow.setDiffuse(1/k, 1/k, 0/k, 1);
        this.materials.yellow.setSpecular(1, 1, 0, 1);
        
        this.materials.orange = new CGFappearance(this.scene);
        this.materials.orange.setAmbient(1/k, 0.5/k, 0/k, 1);
        this.materials.orange.setDiffuse(1/k, 0.5/k, 0/k, 1);
        this.materials.orange.setSpecular(1, 0.5, 0, 1);
        
        this.materials.blue = new CGFappearance(this.scene);
        this.materials.blue.setAmbient(0/k, 0/k, 1/k, 1);
        this.materials.blue.setDiffuse(0/k, 0/k, 1/k, 1);
        this.materials.blue.setSpecular(0, 0, 1, 1);
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
            this.child.green .display();
        } this.scene.popMatrix();
        
        //Moving purple
        this.scene.pushMatrix(); {
            this.scene.translate(-1,0,0);
            this.materials.purple.apply();
            this.child.purple.display();
        } this.scene.popMatrix();
        
        //Moving red
        this.scene.pushMatrix(); {
            this.scene.translate(1,0,0);
            this.scene.rotate(+90.0*Math.PI/180, 0, 0, 1);
            this.materials.red.apply();
            this.child.red.display();
        } this.scene.popMatrix();
        
        //Moving pink
        this.scene.pushMatrix(); {
            this.scene.translate(2,0,0);
            this.materials.pink.apply();
            this.child.pink.display();
        } this.scene.popMatrix();

        //Moving yellow
        this.scene.pushMatrix(); {
            this.scene.translate(1,-1,0);
            this.scene.rotate(Math.PI,0,1,0);
            this.materials.yellow.apply();
            this.child.yellow.display();
        } this.scene.popMatrix();
        
        //Moving orange
        this.scene.pushMatrix(); {
            this.scene.translate(-2,0,0);
            this.scene.rotate(135*Math.PI/180,0,0,1);
            this.materials.orange.apply();
            this.child.orange.display();
        } this.scene.popMatrix();

        //Moving blue
        this.scene.pushMatrix(); {
            this.scene.translate(-4.83,0,0);
            this.scene.rotate(-135*Math.PI/180,0,0,1);
            this.materials.blue.apply();
            this.child.blue.display();
        } this.scene.popMatrix();

        this.materials.default.apply();
    }
    updateGreen()
    {
        this.materials.green.setAmbient(...this.scene.hexToRgbA(this.scene.customMaterialValues['Ambient']));
        this.materials.green.setDiffuse(...this.scene.hexToRgbA(this.scene.customMaterialValues['Diffuse']));
        this.materials.green.setSpecular(...this.scene.hexToRgbA(this.scene.customMaterialValues['Specular']));
        this.materials.green.setShininess(this.scene.customMaterialValues['Shininess']);
    }
}
