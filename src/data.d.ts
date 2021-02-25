type ATTRIB_LOCATION = number;
type UNIFORM_LOCATION = WebGLUniformLocation | null;

interface ProgramInfo {
  attribLocations: {
    vertexPosition: ATTRIB_LOCATION;
  };
  program: WebGLProgram;
  uniformLocations: {
    projectionMatrix: UNIFORM_LOCATION;
    modelViewMatrix: UNIFORM_LOCATION;
  };
  vertexInfo: {
    vertexCount: number;
  };
}

interface BufferInfo {
  position: WebGLBuffer | null;
}
