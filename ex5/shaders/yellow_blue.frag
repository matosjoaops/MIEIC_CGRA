#ifdef GL_ES
precision highp float;
#endif

varying vec4 coords;
uniform float timeFactor;

void main() {
    if(coords.y > 0.5){
		gl_FragColor.rgb = vec3(0.9, 0.9, 0.3);
		gl_FragColor.a = 1.0;
	}else{
		gl_FragColor.rgb = vec3(0.5, 0.5, 1.0);
		gl_FragColor.a = 1.0;
	}
}