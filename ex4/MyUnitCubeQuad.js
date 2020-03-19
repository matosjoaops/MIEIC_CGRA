/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
        super(scene);
        this.scene = scene;
        this.Top = new MyQuad(this.scene);
        this.Bot = new MyQuad(this.scene);
        this.Lef = new MyQuad(this.scene);
        this.Rig = new MyQuad(this.scene);
        this.Fro = new MyQuad(this.scene);
        this.Bac = new MyQuad(this.scene);

        this.initMaterials();
    }
    initMaterials()
    {
        this.materials = {};

        this.materials.top = new CGFappearance(this.scene);
        this.materials.top.setAmbient(0.1, 0.1, 0.1, 1);
        this.materials.top.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materials.top.setSpecular(0.1, 0.1, 0.1, 1);
        this.materials.top.setShininess(10.0);
        this.materials.top.loadTexture('images/mineTop.png');
        this.materials.top.setTextureWrap('REPEAT','REPEAT');

        this.materials.side = new CGFappearance(this.scene);
        this.materials.side.setAmbient(0.1, 0.1, 0.1, 1);
        this.materials.side.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materials.side.setSpecular(0.1, 0.1, 0.1, 1);
        this.materials.side.setShininess(10.0);
        this.materials.side.loadTexture('images/mineSide.png');
        this.materials.side.setTextureWrap('REPEAT','REPEAT');

        this.materials.bottom = new CGFappearance(this.scene);
        this.materials.bottom.setAmbient(0.1, 0.1, 0.1, 1);
        this.materials.bottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.materials.bottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.materials.bottom.setShininess(10.0);
        this.materials.bottom.loadTexture('images/mineBottom.png');
        this.materials.bottom.setTextureWrap('REPEAT','REPEAT');
    }
    display(){
        //Top
        this.scene.pushMatrix(); {
            this.scene.translate(0,+0.5,0);
            this.scene.rotate(-90.0*Math.PI/180, 1, 0, 0);
            this.materials.top.apply();
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
            this.Top.display();
        } this.scene.popMatrix();
        //Bot
        this.scene.pushMatrix(); {
            this.scene.translate(0,-0.5,0);
            this.scene.rotate(+90.0*Math.PI/180, 1, 0, 0);
            this.materials.bottom.apply();
            this.scene.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
            this.Bot.display();
        } this.scene.popMatrix();
        //Lef
        this.scene.pushMatrix(); {
            this.scene.translate(0,0,+0.5);
            this.materials.side.apply();
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
            this.Lef.display();
        } this.scene.popMatrix();
        //Rig
        this.scene.pushMatrix(); {
            this.scene.translate(0,0,-0.5);
            this.scene.rotate(+180.0*Math.PI/180, 1, 0, 0);
            this.materials.side.apply();
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
            this.Rig.display();
        } this.scene.popMatrix();
        //Fro
        this.scene.pushMatrix(); {
            this.scene.translate(+0.5, 0, 0);
            this.scene.rotate(+90.0*Math.PI/180, 0, 1, 0);
            this.materials.side.apply();
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
            this.Fro.display();
        } this.scene.popMatrix();
        //Bac
        this.scene.pushMatrix(); {
            this.scene.translate(-0.5, 0, 0);
            this.scene.rotate(-90.0*Math.PI/180, 0, 1, 0);
            this.materials.side.apply();
            this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
            this.Fro.display();
        } this.scene.popMatrix();  
    }
}
