attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform float timeFactor;

uniform sampler2D uSampler2;
uniform float normScale;

void main() {

	vec4 color = texture2D(uSampler2,aTextureCoord);

	float height_increase = color.r;

	vec2 deltaXY = aTextureCoord + sin(timeFactor * vec2(0.07,0.07)) + 1.0;
	deltaXY.x = 0.0;
	deltaXY.y = 0.0; 

	vec3 inc_vec = vec3(deltaXY,height_increase);

	vec3 final_position = aVertexPosition + inc_vec*0.07;

	gl_Position = uPMatrix * uMVMatrix * vec4(final_position, 1.0);

	vTextureCoord = aTextureCoord;
}
