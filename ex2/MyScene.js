/**
* MyScene
* @constructor
*/
class MyScene extends CGFscene {
    constructor() {
        super();
    }
    init(application) {
        super.init(application);
        this.initCameras();
        this.initLights();

        //Background color
        this.gl.clearColor(0.0, 0.0, 0.0, 1.0); //indica qual a cor a usar para limpar o ecra, nao o esta a limpar neste momento!

        this.gl.clearDepth(100.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.gl.enable(this.gl.CULL_FACE);
        this.gl.depthFunc(this.gl.LEQUAL);

        //Initialize scene objects
        this.axis = new CGFaxis(this);
        this.diamond  = new MyDiamond (this);
        this.triangle = new MyTriangle(this);
        this.yellow = new MyParallelogram(this);
        this.orange = new MyTriangleBig(this);
        this.blue = new MyTriangleBig(this);
        this.smallTriangle = new MyTriangleSmall(this);

        //Objects connected to MyInterface
        this.displayAxis     = true;
        this.displayDiamond  = true;
        this.displayTriangle = false;
        this.displayYellow = true;
        this.displayTriangleSmall = false;
        this.displayOrange = true;
        this.displayBlue = true;
        
        this.scaleFactor = 1;
    }
    initLights() {
        this.lights[0].setPosition(15, 2, 5, 1);
        this.lights[0].setDiffuse(1.0, 1.0, 1.0, 1.0);
        this.lights[0].enable();
        this.lights[0].update();
    }
    initCameras() {
        this.camera = new CGFcamera(0.4, 0.1, 500, vec3.fromValues(0, 0, 30), vec3.fromValues(0, 0, 0));
    }
    setDefaultAppearance() {
        this.setAmbient(0.2, 0.4, 0.8, 1.0);
        this.setDiffuse(0.2, 0.4, 0.8, 1.0);
        this.setSpecular(0.2, 0.4, 0.8, 1.0);
        this.setShininess(10.0);
    }
    display() {
        // ---- BEGIN Background, camera and axis setup
        // Clear image and depth buffer everytime we update the scene
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
        // Initialize Model-View matrix as identity (no transformation
        this.updateProjectionMatrix();
        this.loadIdentity();
        // Apply transformations corresponding to the camera position relative to the origin
        this.applyViewMatrix();
        
        // Draw axis
        if (this.displayAxis)
            this.axis.display();

        this.setDefaultAppearance();

        var sca = [this.scaleFactor, 0.0, 0.0, 0.0,
                    0.0, this.scaleFactor, 0.0, 0.0,
                    0.0, 0.0, this.scaleFactor, 0.0,
                    0.0, 0.0, 0.0, 1.0];

        this.multMatrix(sca);

        

        // ---- BEGIN Primitive drawing section

        this.pushMatrix(); {
            let m_trans = [ 1,  0,  0,  0,
                            0,  1,  0,  0,
                            0,  0,  1,  0,
                            0,  1,  0,  1];
            this.multMatrix(m_trans);
            if(this.displayDiamond ) this.diamond .display();
        } this.popMatrix();
        
        if(this.displayTriangle) this.triangle.display();
        if(this.displayYellow) this.yellow.display();
        if(this.displayOrange) this.orange.display();
        if(this.displayTriangleSmall) this.smallTriangle.display();

        // ---- END Primitive drawing section
    }
}
