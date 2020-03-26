#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;
uniform float timeFactor;

uniform float normScale;
varying vec4 coords;

void main() {
	vec4 vertex=vec4(aVertexPosition+aVertexNormal*normScale*0.1, 1.0);

    vec3 offset = vec3(1.0,0.0,0.0)*normScale*sin(timeFactor);

	gl_Position = uPMatrix * uMVMatrix * (vertex + vec4(offset, 1.0));

	coords=gl_Position/10.0;
}
