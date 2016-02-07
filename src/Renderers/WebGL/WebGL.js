/**
 * @const
 * @type {number}
 */
export let DEPTH_BUFFER_BIT = 0x00000100;


/**
 * @const
 * @type {number}
 */
export let STENCIL_BUFFER_BIT = 0x00000400;


/**
 * @const
 * @type {number}
 */
export let COLOR_BUFFER_BIT = 0x00004000;


/**
 * @const
 * @type {number}
 */
export let POINTS = 0x0000;


/**
 * @const
 * @type {number}
 */
export let LINES = 0x0001;


/**
 * @const
 * @type {number}
 */
export let LINE_LOOP = 0x0002;


/**
 * @const
 * @type {number}
 */
export let LINE_STRIP = 0x0003;


/**
 * @const
 * @type {number}
 */
export let TRIANGLES = 0x0004;


/**
 * @const
 * @type {number}
 */
export let TRIANGLE_STRIP = 0x0005;


/**
 * @const
 * @type {number}
 */
export let TRIANGLE_FAN = 0x0006;


/**
 * @const
 * @type {number}
 */
export let ZERO = 0;


/**
 * @const
 * @type {number}
 */
export let ONE = 1;


/**
 * @const
 * @type {number}
 */
export let SRC_COLOR = 0x0300;


/**
 * @const
 * @type {number}
 */
export let ONE_MINUS_SRC_COLOR = 0x0301;


/**
 * @const
 * @type {number}
 */
export let SRC_ALPHA = 0x0302;


/**
 * @const
 * @type {number}
 */
export let ONE_MINUS_SRC_ALPHA = 0x0303;


/**
 * @const
 * @type {number}
 */
export let DST_ALPHA = 0x0304;


/**
 * @const
 * @type {number}
 */
export let ONE_MINUS_DST_ALPHA = 0x0305;


/**
 * @const
 * @type {number}
 */
export let DST_COLOR = 0x0306;


/**
 * @const
 * @type {number}
 */
export let ONE_MINUS_DST_COLOR = 0x0307;


/**
 * @const
 * @type {number}
 */
export let SRC_ALPHA_SATURATE = 0x0308;


/**
 * @const
 * @type {number}
 */
export let FUNC_ADD = 0x8006;


/**
 * @const
 * @type {number}
 */
export let BLEND_EQUATION = 0x8009;


/**
 * Same as BLEND_EQUATION
 * @const
 * @type {number}
 */
export let BLEND_EQUATION_RGB = 0x8009;


/**
 * @const
 * @type {number}
 */
export let BLEND_EQUATION_ALPHA = 0x883D;


/**
 * @const
 * @type {number}
 */
export let FUNC_SUBTRACT = 0x800A;


/**
 * @const
 * @type {number}
 */
export let FUNC_REVERSE_SUBTRACT = 0x800B;


/**
 * @const
 * @type {number}
 */
export let BLEND_DST_RGB = 0x80C8;


/**
 * @const
 * @type {number}
 */
export let BLEND_SRC_RGB = 0x80C9;


/**
 * @const
 * @type {number}
 */
export let BLEND_DST_ALPHA = 0x80CA;


/**
 * @const
 * @type {number}
 */
export let BLEND_SRC_ALPHA = 0x80CB;


/**
 * @const
 * @type {number}
 */
export let CONSTANT_COLOR = 0x8001;


/**
 * @const
 * @type {number}
 */
export let ONE_MINUS_CONSTANT_COLOR = 0x8002;


/**
 * @const
 * @type {number}
 */
export let CONSTANT_ALPHA = 0x8003;


/**
 * @const
 * @type {number}
 */
export let ONE_MINUS_CONSTANT_ALPHA = 0x8004;


/**
 * @const
 * @type {number}
 */
export let BLEND_COLOR = 0x8005;


/**
 * @const
 * @type {number}
 */
export let ARRAY_BUFFER = 0x8892;


/**
 * @const
 * @type {number}
 */
export let ELEMENT_ARRAY_BUFFER = 0x8893;


/**
 * @const
 * @type {number}
 */
export let ARRAY_BUFFER_BINDING = 0x8894;


/**
 * @const
 * @type {number}
 */
export let ELEMENT_ARRAY_BUFFER_BINDING = 0x8895;


/**
 * @const
 * @type {number}
 */
export let STREAM_DRAW = 0x88E0;


/**
 * @const
 * @type {number}
 */
export let STATIC_DRAW = 0x88E4;


/**
 * @const
 * @type {number}
 */
export let DYNAMIC_DRAW = 0x88E8;


/**
 * @const
 * @type {number}
 */
export let BUFFER_SIZE = 0x8764;


/**
 * @const
 * @type {number}
 */
export let BUFFER_USAGE = 0x8765;


/**
 * @const
 * @type {number}
 */
export let CURRENT_VERTEX_ATTRIB = 0x8626;


/**
 * @const
 * @type {number}
 */
export let FRONT = 0x0404;


/**
 * @const
 * @type {number}
 */
export let BACK = 0x0405;


/**
 * @const
 * @type {number}
 */
export let FRONT_AND_BACK = 0x0408;


/**
 * @const
 * @type {number}
 */
export let CULL_FACE = 0x0B44;


/**
 * @const
 * @type {number}
 */
export let BLEND = 0x0BE2;


/**
 * @const
 * @type {number}
 */
export let DITHER = 0x0BD0;


/**
 * @const
 * @type {number}
 */
export let STENCIL_TEST = 0x0B90;


/**
 * @const
 * @type {number}
 */
export let DEPTH_TEST = 0x0B71;


/**
 * @const
 * @type {number}
 */
export let SCISSOR_TEST = 0x0C11;


/**
 * @const
 * @type {number}
 */
export let POLYGON_OFFSET_FILL = 0x8037;


/**
 * @const
 * @type {number}
 */
export let SAMPLE_ALPHA_TO_COVERAGE = 0x809E;


/**
 * @const
 * @type {number}
 */
export let SAMPLE_COVERAGE = 0x80A0;


/**
 * @const
 * @type {number}
 */
export let NO_ERROR = 0;


/**
 * @const
 * @type {number}
 */
export let INVALID_ENUM = 0x0500;


/**
 * @const
 * @type {number}
 */
export let INVALID_VALUE = 0x0501;


/**
 * @const
 * @type {number}
 */
export let INVALID_OPERATION = 0x0502;


/**
 * @const
 * @type {number}
 */
export let OUT_OF_MEMORY = 0x0505;


/**
 * @const
 * @type {number}
 */
export let CW = 0x0900;


/**
 * @const
 * @type {number}
 */
export let CCW = 0x0901;


/**
 * @const
 * @type {number}
 */
export let LINE_WIDTH = 0x0B21;


/**
 * @const
 * @type {number}
 */
export let ALIASED_POINT_SIZE_RANGE = 0x846D;


/**
 * @const
 * @type {number}
 */
export let ALIASED_LINE_WIDTH_RANGE = 0x846E;


/**
 * @const
 * @type {number}
 */
export let CULL_FACE_MODE = 0x0B45;


/**
 * @const
 * @type {number}
 */
export let FRONT_FACE = 0x0B46;


/**
 * @const
 * @type {number}
 */
export let DEPTH_RANGE = 0x0B70;


/**
 * @const
 * @type {number}
 */
export let DEPTH_WRITEMASK = 0x0B72;


/**
 * @const
 * @type {number}
 */
export let DEPTH_CLEAR_VALUE = 0x0B73;


/**
 * @const
 * @type {number}
 */
export let DEPTH_FUNC = 0x0B74;


/**
 * @const
 * @type {number}
 */
export let STENCIL_CLEAR_VALUE = 0x0B91;


/**
 * @const
 * @type {number}
 */
export let STENCIL_FUNC = 0x0B92;


/**
 * @const
 * @type {number}
 */
export let STENCIL_FAIL = 0x0B94;


/**
 * @const
 * @type {number}
 */
export let STENCIL_PASS_DEPTH_FAIL = 0x0B95;


/**
 * @const
 * @type {number}
 */
export let STENCIL_PASS_DEPTH_PASS = 0x0B96;


/**
 * @const
 * @type {number}
 */
export let STENCIL_REF = 0x0B97;


/**
 * @const
 * @type {number}
 */
export let STENCIL_VALUE_MASK = 0x0B93;


/**
 * @const
 * @type {number}
 */
export let STENCIL_WRITEMASK = 0x0B98;


/**
 * @const
 * @type {number}
 */
export let STENCIL_BACK_FUNC = 0x8800;


/**
 * @const
 * @type {number}
 */
export let STENCIL_BACK_FAIL = 0x8801;


/**
 * @const
 * @type {number}
 */
export let STENCIL_BACK_PASS_DEPTH_FAIL = 0x8802;


/**
 * @const
 * @type {number}
 */
export let STENCIL_BACK_PASS_DEPTH_PASS = 0x8803;


/**
 * @const
 * @type {number}
 */
export let STENCIL_BACK_REF = 0x8CA3;


/**
 * @const
 * @type {number}
 */
export let STENCIL_BACK_VALUE_MASK = 0x8CA4;


/**
 * @const
 * @type {number}
 */
export let STENCIL_BACK_WRITEMASK = 0x8CA5;


/**
 * @const
 * @type {number}
 */
export let VIEWPORT = 0x0BA2;


/**
 * @const
 * @type {number}
 */
export let SCISSOR_BOX = 0x0C10;


/**
 * @const
 * @type {number}
 */
export let COLOR_CLEAR_VALUE = 0x0C22;


/**
 * @const
 * @type {number}
 */
export let COLOR_WRITEMASK = 0x0C23;


/**
 * @const
 * @type {number}
 */
export let UNPACK_ALIGNMENT = 0x0CF5;


/**
 * @const
 * @type {number}
 */
export let PACK_ALIGNMENT = 0x0D05;


/**
 * @const
 * @type {number}
 */
export let MAX_TEXTURE_SIZE = 0x0D33;


/**
 * @const
 * @type {number}
 */
export let MAX_VIEWPORT_DIMS = 0x0D3A;


/**
 * @const
 * @type {number}
 */
export let SUBPIXEL_BITS = 0x0D50;


/**
 * @const
 * @type {number}
 */
export let RED_BITS = 0x0D52;


/**
 * @const
 * @type {number}
 */
export let GREEN_BITS = 0x0D53;


/**
 * @const
 * @type {number}
 */
export let BLUE_BITS = 0x0D54;


/**
 * @const
 * @type {number}
 */
export let ALPHA_BITS = 0x0D55;


/**
 * @const
 * @type {number}
 */
export let DEPTH_BITS = 0x0D56;


/**
 * @const
 * @type {number}
 */
export let STENCIL_BITS = 0x0D57;


/**
 * @const
 * @type {number}
 */
export let POLYGON_OFFSET_UNITS = 0x2A00;


/**
 * @const
 * @type {number}
 */
export let POLYGON_OFFSET_FACTOR = 0x8038;


/**
 * @const
 * @type {number}
 */
export let TEXTURE_BINDING_2D = 0x8069;


/**
 * @const
 * @type {number}
 */
export let SAMPLE_BUFFERS = 0x80A8;


/**
 * @const
 * @type {number}
 */
export let SAMPLES = 0x80A9;


/**
 * @const
 * @type {number}
 */
export let SAMPLE_COVERAGE_VALUE = 0x80AA;


/**
 * @const
 * @type {number}
 */
export let SAMPLE_COVERAGE_INVERT = 0x80AB;


/**
 * @const
 * @type {number}
 */
export let COMPRESSED_TEXTURE_FORMATS = 0x86A3;


/**
 * @const
 * @type {number}
 */
export let DONT_CARE = 0x1100;


/**
 * @const
 * @type {number}
 */
export let FASTEST = 0x1101;


/**
 * @const
 * @type {number}
 */
export let NICEST = 0x1102;


/**
 * @const
 * @type {number}
 */
export let GENERATE_MIPMAP_HINT = 0x8192;


/**
 * @const
 * @type {number}
 */
export let BYTE = 0x1400;


/**
 * @const
 * @type {number}
 */
export let UNSIGNED_BYTE = 0x1401;


/**
 * @const
 * @type {number}
 */
export let SHORT = 0x1402;


/**
 * @const
 * @type {number}
 */
export let UNSIGNED_SHORT = 0x1403;


/**
 * @const
 * @type {number}
 */
export let INT = 0x1404;


/**
 * @const
 * @type {number}
 */
export let UNSIGNED_INT = 0x1405;


/**
 * @const
 * @type {number}
 */
export let FLOAT = 0x1406;


/**
 * @const
 * @type {number}
 */
export let DEPTH_COMPONENT = 0x1902;


/**
 * @const
 * @type {number}
 */
export let ALPHA = 0x1906;


/**
 * @const
 * @type {number}
 */
export let RGB = 0x1907;


/**
 * @const
 * @type {number}
 */
export let RGBA = 0x1908;


/**
 * @const
 * @type {number}
 */
export let LUMINANCE = 0x1909;


/**
 * @const
 * @type {number}
 */
export let LUMINANCE_ALPHA = 0x190A;


/**
 * @const
 * @type {number}
 */
export let UNSIGNED_SHORT_4_4_4_4 = 0x8033;


/**
 * @const
 * @type {number}
 */
export let UNSIGNED_SHORT_5_5_5_1 = 0x8034;


/**
 * @const
 * @type {number}
 */
export let UNSIGNED_SHORT_5_6_5 = 0x8363;


/**
 * @const
 * @type {number}
 */
export let FRAGMENT_SHADER = 0x8B30;


/**
 * @const
 * @type {number}
 */
export let VERTEX_SHADER = 0x8B31;


/**
 * @const
 * @type {number}
 */
export let MAX_VERTEX_ATTRIBS = 0x8869;


/**
 * @const
 * @type {number}
 */
export let MAX_VERTEX_UNIFORM_VECTORS = 0x8DFB;


/**
 * @const
 * @type {number}
 */
export let MAX_VARYING_VECTORS = 0x8DFC;


/**
 * @const
 * @type {number}
 */
export let MAX_COMBINED_TEXTURE_IMAGE_UNITS = 0x8B4D;


/**
 * @const
 * @type {number}
 */
export let MAX_VERTEX_TEXTURE_IMAGE_UNITS = 0x8B4C;


/**
 * @const
 * @type {number}
 */
export let MAX_TEXTURE_IMAGE_UNITS = 0x8872;


/**
 * @const
 * @type {number}
 */
export let MAX_FRAGMENT_UNIFORM_VECTORS = 0x8DFD;


/**
 * @const
 * @type {number}
 */
export let SHADER_TYPE = 0x8B4F;


/**
 * @const
 * @type {number}
 */
export let DELETE_STATUS = 0x8B80;


/**
 * @const
 * @type {number}
 */
export let LINK_STATUS = 0x8B82;


/**
 * @const
 * @type {number}
 */
export let VALIDATE_STATUS = 0x8B83;


/**
 * @const
 * @type {number}
 */
export let ATTACHED_SHADERS = 0x8B85;


/**
 * @const
 * @type {number}
 */
export let ACTIVE_UNIFORMS = 0x8B86;


/**
 * @const
 * @type {number}
 */
export let ACTIVE_ATTRIBUTES = 0x8B89;


/**
 * @const
 * @type {number}
 */
export let SHADING_LANGUAGE_VERSION = 0x8B8C;


/**
 * @const
 * @type {number}
 */
export let CURRENT_PROGRAM = 0x8B8D;


/**
 * @const
 * @type {number}
 */
export let NEVER = 0x0200;


/**
 * @const
 * @type {number}
 */
export let LESS = 0x0201;


/**
 * @const
 * @type {number}
 */
export let EQUAL = 0x0202;


/**
 * @const
 * @type {number}
 */
export let LEQUAL = 0x0203;


/**
 * @const
 * @type {number}
 */
export let GREATER = 0x0204;


/**
 * @const
 * @type {number}
 */
export let NOTEQUAL = 0x0205;


/**
 * @const
 * @type {number}
 */
export let GEQUAL = 0x0206;


/**
 * @const
 * @type {number}
 */
export let ALWAYS = 0x0207;


/**
 * @const
 * @type {number}
 */
export let KEEP = 0x1E00;


/**
 * @const
 * @type {number}
 */
export let REPLACE = 0x1E01;


/**
 * @const
 * @type {number}
 */
export let INCR = 0x1E02;


/**
 * @const
 * @type {number}
 */
export let DECR = 0x1E03;


/**
 * @const
 * @type {number}
 */
export let INVERT = 0x150A;


/**
 * @const
 * @type {number}
 */
export let INCR_WRAP = 0x8507;


/**
 * @const
 * @type {number}
 */
export let DECR_WRAP = 0x8508;


/**
 * @const
 * @type {number}
 */
export let VENDOR = 0x1F00;


/**
 * @const
 * @type {number}
 */
export let RENDERER = 0x1F01;


/**
 * @const
 * @type {number}
 */
export let VERSION = 0x1F02;


/**
 * @const
 * @type {number}
 */
export let NEAREST = 0x2600;


/**
 * @const
 * @type {number}
 */
export let LINEAR = 0x2601;


/**
 * @const
 * @type {number}
 */
export let NEAREST_MIPMAP_NEAREST = 0x2700;


/**
 * @const
 * @type {number}
 */
export let LINEAR_MIPMAP_NEAREST = 0x2701;


/**
 * @const
 * @type {number}
 */
export let NEAREST_MIPMAP_LINEAR = 0x2702;


/**
 * @const
 * @type {number}
 */
export let LINEAR_MIPMAP_LINEAR = 0x2703;


/**
 * @const
 * @type {number}
 */
export let TEXTURE_MAG_FILTER = 0x2800;


/**
 * @const
 * @type {number}
 */
export let TEXTURE_MIN_FILTER = 0x2801;


/**
 * @const
 * @type {number}
 */
export let TEXTURE_WRAP_S = 0x2802;


/**
 * @const
 * @type {number}
 */
export let TEXTURE_WRAP_T = 0x2803;


/**
 * @const
 * @type {number}
 */
export let TEXTURE_2D = 0x0DE1;


/**
 * @const
 * @type {number}
 */
export let TEXTURE = 0x1702;


/**
 * @const
 * @type {number}
 */
export let TEXTURE_CUBE_MAP = 0x8513;


/**
 * @const
 * @type {number}
 */
export let TEXTURE_BINDING_CUBE_MAP = 0x8514;


/**
 * @const
 * @type {number}
 */
export let TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;


/**
 * @const
 * @type {number}
 */
export let TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;


/**
 * @const
 * @type {number}
 */
export let TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;


/**
 * @const
 * @type {number}
 */
export let TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;


/**
 * @const
 * @type {number}
 */
export let TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;


/**
 * @const
 * @type {number}
 */
export let TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851A;


/**
 * @const
 * @type {number}
 */
export let MAX_CUBE_MAP_TEXTURE_SIZE = 0x851C;


/**
 * @const
 * @type {number}
 */
export let TEXTURE0 = 0x84C0;


/**
 * @const
 * @type {number}
 */
export let TEXTURE1 = 0x84C1;


/**
 * @const
 * @type {number}
 */
export let TEXTURE2 = 0x84C2;


/**
 * @const
 * @type {number}
 */
export let TEXTURE3 = 0x84C3;


/**
 * @const
 * @type {number}
 */
export let TEXTURE4 = 0x84C4;


/**
 * @const
 * @type {number}
 */
export let TEXTURE5 = 0x84C5;


/**
 * @const
 * @type {number}
 */
export let TEXTURE6 = 0x84C6;


/**
 * @const
 * @type {number}
 */
export let TEXTURE7 = 0x84C7;


/**
 * @const
 * @type {number}
 */
export let TEXTURE8 = 0x84C8;


/**
 * @const
 * @type {number}
 */
export let TEXTURE9 = 0x84C9;


/**
 * @const
 * @type {number}
 */
export let TEXTURE10 = 0x84CA;


/**
 * @const
 * @type {number}
 */
export let TEXTURE11 = 0x84CB;


/**
 * @const
 * @type {number}
 */
export let TEXTURE12 = 0x84CC;


/**
 * @const
 * @type {number}
 */
export let TEXTURE13 = 0x84CD;


/**
 * @const
 * @type {number}
 */
export let TEXTURE14 = 0x84CE;


/**
 * @const
 * @type {number}
 */
export let TEXTURE15 = 0x84CF;


/**
 * @const
 * @type {number}
 */
export let TEXTURE16 = 0x84D0;


/**
 * @const
 * @type {number}
 */
export let TEXTURE17 = 0x84D1;


/**
 * @const
 * @type {number}
 */
export let TEXTURE18 = 0x84D2;


/**
 * @const
 * @type {number}
 */
export let TEXTURE19 = 0x84D3;


/**
 * @const
 * @type {number}
 */
export let TEXTURE20 = 0x84D4;


/**
 * @const
 * @type {number}
 */
export let TEXTURE21 = 0x84D5;


/**
 * @const
 * @type {number}
 */
export let TEXTURE22 = 0x84D6;


/**
 * @const
 * @type {number}
 */
export let TEXTURE23 = 0x84D7;


/**
 * @const
 * @type {number}
 */
export let TEXTURE24 = 0x84D8;


/**
 * @const
 * @type {number}
 */
export let TEXTURE25 = 0x84D9;


/**
 * @const
 * @type {number}
 */
export let TEXTURE26 = 0x84DA;


/**
 * @const
 * @type {number}
 */
export let TEXTURE27 = 0x84DB;


/**
 * @const
 * @type {number}
 */
export let TEXTURE28 = 0x84DC;


/**
 * @const
 * @type {number}
 */
export let TEXTURE29 = 0x84DD;


/**
 * @const
 * @type {number}
 */
export let TEXTURE30 = 0x84DE;


/**
 * @const
 * @type {number}
 */
export let TEXTURE31 = 0x84DF;


/**
 * @const
 * @type {number}
 */
export let ACTIVE_TEXTURE = 0x84E0;


/**
 * @const
 * @type {number}
 */
export let REPEAT = 0x2901;


/**
 * @const
 * @type {number}
 */
export let CLAMP_TO_EDGE = 0x812F;


/**
 * @const
 * @type {number}
 */
export let MIRRORED_REPEAT = 0x8370;


/**
 * @const
 * @type {number}
 */
export let FLOAT_VEC2 = 0x8B50;


/**
 * @const
 * @type {number}
 */
export let FLOAT_VEC3 = 0x8B51;


/**
 * @const
 * @type {number}
 */
export let FLOAT_VEC4 = 0x8B52;


/**
 * @const
 * @type {number}
 */
export let INT_VEC2 = 0x8B53;


/**
 * @const
 * @type {number}
 */
export let INT_VEC3 = 0x8B54;


/**
 * @const
 * @type {number}
 */
export let INT_VEC4 = 0x8B55;


/**
 * @const
 * @type {number}
 */
export let BOOL = 0x8B56;


/**
 * @const
 * @type {number}
 */
export let BOOL_VEC2 = 0x8B57;


/**
 * @const
 * @type {number}
 */
export let BOOL_VEC3 = 0x8B58;


/**
 * @const
 * @type {number}
 */
export let BOOL_VEC4 = 0x8B59;


/**
 * @const
 * @type {number}
 */
export let FLOAT_MAT2 = 0x8B5A;


/**
 * @const
 * @type {number}
 */
export let FLOAT_MAT3 = 0x8B5B;


/**
 * @const
 * @type {number}
 */
export let FLOAT_MAT4 = 0x8B5C;


/**
 * @const
 * @type {number}
 */
export let SAMPLER_2D = 0x8B5E;


/**
 * @const
 * @type {number}
 */
export let SAMPLER_CUBE = 0x8B60;


/**
 * @const
 * @type {number}
 */
export let VERTEX_ATTRIB_ARRAY_ENABLED = 0x8622;


/**
 * @const
 * @type {number}
 */
export let VERTEX_ATTRIB_ARRAY_SIZE = 0x8623;


/**
 * @const
 * @type {number}
 */
export let VERTEX_ATTRIB_ARRAY_STRIDE = 0x8624;


/**
 * @const
 * @type {number}
 */
export let VERTEX_ATTRIB_ARRAY_TYPE = 0x8625;


/**
 * @const
 * @type {number}
 */
export let VERTEX_ATTRIB_ARRAY_NORMALIZED = 0x886A;


/**
 * @const
 * @type {number}
 */
export let VERTEX_ATTRIB_ARRAY_POINTER = 0x8645;


/**
 * @const
 * @type {number}
 */
export let VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 0x889F;


/**
 * @const
 * @type {number}
 */
export let COMPILE_STATUS = 0x8B81;


/**
 * @const
 * @type {number}
 */
export let LOW_FLOAT = 0x8DF0;


/**
 * @const
 * @type {number}
 */
export let MEDIUM_FLOAT = 0x8DF1;


/**
 * @const
 * @type {number}
 */
export let HIGH_FLOAT = 0x8DF2;


/**
 * @const
 * @type {number}
 */
export let LOW_INT = 0x8DF3;


/**
 * @const
 * @type {number}
 */
export let MEDIUM_INT = 0x8DF4;


/**
 * @const
 * @type {number}
 */
export let HIGH_INT = 0x8DF5;


/**
 * @const
 * @type {number}
 */
export let FRAMEBUFFER = 0x8D40;


/**
 * @const
 * @type {number}
 */
export let RENDERBUFFER = 0x8D41;


/**
 * @const
 * @type {number}
 */
export let RGBA4 = 0x8056;


/**
 * @const
 * @type {number}
 */
export let RGB5_A1 = 0x8057;


/**
 * @const
 * @type {number}
 */
export let RGB565 = 0x8D62;


/**
 * @const
 * @type {number}
 */
export let DEPTH_COMPONENT16 = 0x81A5;


/**
 * @const
 * @type {number}
 */
export let STENCIL_INDEX = 0x1901;


/**
 * @const
 * @type {number}
 */
export let STENCIL_INDEX8 = 0x8D48;


/**
 * @const
 * @type {number}
 */
export let DEPTH_STENCIL = 0x84F9;


/**
 * @const
 * @type {number}
 */
export let RENDERBUFFER_WIDTH = 0x8D42;


/**
 * @const
 * @type {number}
 */
export let RENDERBUFFER_HEIGHT = 0x8D43;


/**
 * @const
 * @type {number}
 */
export let RENDERBUFFER_INTERNAL_FORMAT = 0x8D44;


/**
 * @const
 * @type {number}
 */
export let RENDERBUFFER_RED_SIZE = 0x8D50;


/**
 * @const
 * @type {number}
 */
export let RENDERBUFFER_GREEN_SIZE = 0x8D51;


/**
 * @const
 * @type {number}
 */
export let RENDERBUFFER_BLUE_SIZE = 0x8D52;


/**
 * @const
 * @type {number}
 */
export let RENDERBUFFER_ALPHA_SIZE = 0x8D53;


/**
 * @const
 * @type {number}
 */
export let RENDERBUFFER_DEPTH_SIZE = 0x8D54;


/**
 * @const
 * @type {number}
 */
export let RENDERBUFFER_STENCIL_SIZE = 0x8D55;


/**
 * @const
 * @type {number}
 */
export let FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 0x8CD0;


/**
 * @const
 * @type {number}
 */
export let FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 0x8CD1;


/**
 * @const
 * @type {number}
 */
export let FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 0x8CD2;


/**
 * @const
 * @type {number}
 */
export let FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 0x8CD3;


/**
 * @const
 * @type {number}
 */
export let COLOR_ATTACHMENT0 = 0x8CE0;


/**
 * @const
 * @type {number}
 */
export let DEPTH_ATTACHMENT = 0x8D00;


/**
 * @const
 * @type {number}
 */
export let STENCIL_ATTACHMENT = 0x8D20;


/**
 * @const
 * @type {number}
 */
export let DEPTH_STENCIL_ATTACHMENT = 0x821A;


/**
 * @const
 * @type {number}
 */
export let NONE = 0;


/**
 * @const
 * @type {number}
 */
export let FRAMEBUFFER_COMPLETE = 0x8CD5;


/**
 * @const
 * @type {number}
 */
export let FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 0x8CD6;


/**
 * @const
 * @type {number}
 */
export let FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 0x8CD7;


/**
 * @const
 * @type {number}
 */
export let FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 0x8CD9;


/**
 * @const
 * @type {number}
 */
export let FRAMEBUFFER_UNSUPPORTED = 0x8CDD;


/**
 * @const
 * @type {number}
 */
export let FRAMEBUFFER_BINDING = 0x8CA6;


/**
 * @const
 * @type {number}
 */
export let RENDERBUFFER_BINDING = 0x8CA7;


/**
 * @const
 * @type {number}
 */
export let MAX_RENDERBUFFER_SIZE = 0x84E8;


/**
 * @const
 * @type {number}
 */
export let INVALID_FRAMEBUFFER_OPERATION = 0x0506;


/**
 * @const
 * @type {number}
 */
export let UNPACK_FLIP_Y_WEBGL = 0x9240;


/**
 * @const
 * @type {number}
 */
export let UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;


/**
 * @const
 * @type {number}
 */
export let CONTEXT_LOST_WEBGL = 0x9242;


/**
 * @const
 * @type {number}
 */
export let UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;


/**
 * @const
 * @type {number}
 */
export let BROWSER_DEFAULT_WEBGL = 0x9244;


/**
 * From the OES_texture_half_float extension.
 * http://www.khronos.org/registry/webgl/extensions/OES_texture_half_float/
 * @const
 * @type {number}
 */
export let HALF_FLOAT_OES = 0x8D61;


/**
 * From the OES_standard_derivatives extension.
 * http://www.khronos.org/registry/webgl/extensions/OES_standard_derivatives/
 * @const
 * @type {number}
 */
export let FRAGMENT_SHADER_DERIVATIVE_HINT_OES = 0x8B8B;


/**
 * From the OES_vertex_array_object extension.
 * http://www.khronos.org/registry/webgl/extensions/OES_vertex_array_object/
 * @const
 * @type {number}
 */
export let VERTEX_ARRAY_BINDING_OES = 0x85B5;


/**
 * From the WEBGL_debug_renderer_info extension.
 * http://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/
 * @const
 * @type {number}
 */
export let UNMASKED_VENDOR_WEBGL = 0x9245;


/**
 * From the WEBGL_debug_renderer_info extension.
 * http://www.khronos.org/registry/webgl/extensions/WEBGL_debug_renderer_info/
 * @const
 * @type {number}
 */
export let UNMASKED_RENDERER_WEBGL = 0x9246;


/**
 * From the WEBGL_compressed_texture_s3tc extension.
 * http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
 * @const
 * @type {number}
 */
export let COMPRESSED_RGB_S3TC_DXT1_EXT = 0x83F0;


/**
 * From the WEBGL_compressed_texture_s3tc extension.
 * http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
 * @const
 * @type {number}
 */
export let COMPRESSED_RGBA_S3TC_DXT1_EXT = 0x83F1;


/**
 * From the WEBGL_compressed_texture_s3tc extension.
 * http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
 * @const
 * @type {number}
 */
export let COMPRESSED_RGBA_S3TC_DXT3_EXT = 0x83F2;


/**
 * From the WEBGL_compressed_texture_s3tc extension.
 * http://www.khronos.org/registry/webgl/extensions/WEBGL_compressed_texture_s3tc/
 * @const
 * @type {number}
 */
export let COMPRESSED_RGBA_S3TC_DXT5_EXT = 0x83F3;


/**
 * From the EXT_texture_filter_anisotropic extension.
 * http://www.khronos.org/registry/webgl/extensions/EXT_texture_filter_anisotropic/
 * @const
 * @type {number}
 */
export let TEXTURE_MAX_ANISOTROPY_EXT = 0x84FE;


/**
 * From the EXT_texture_filter_anisotropic extension.
 * http://www.khronos.org/registry/webgl/extensions/EXT_texture_filter_anisotropic/
 * @const
 * @type {number}
 */
export let MAX_TEXTURE_MAX_ANISOTROPY_EXT = 0x84FF;