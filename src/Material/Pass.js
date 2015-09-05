goog.provide('Lemon.Pass');
goog.provide('Lemon.PassParameter');
goog.require('Lemon.Program');
goog.require('Lemon.StateBlock');
goog.require('Lemon.Type');

/**
 * A pass parameter.
 * @constructor
 * @param {string} name Name to assign.
 * @param {Lemon.Type} type Element's type.
 * @param {Array.<number>|number|boolean|Lemon.Texture|Float32Array} value Element's value.
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.PassParameter = function( name, type, value )
{
    /**
    * Name.
    * @type {string}
    * @public
    */
    this.name = name;

    /**
    * Type.
    * @type {Lemon.Type}
    * @public
    */
    this.type = type;

    /**
    * Value.
    * @type {Array.<number>|number|boolean|Lemon.Texture|Float32Array}
    * @public
    */
    this.value = value;
};

/**
 * A pass.
 * @constructor
 * @extends {Lemon.StateBlock}
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.Pass = function()
{
    Lemon.StateBlock.call(this);

    /**
    * Parameters: elements to send to the GPU.
    * @type {Array.<Lemon.PassParameter>}
    * @private
    */
    this.parameters = [];
};
goog.inherits(Lemon.Pass, Lemon.StateBlock);

/**
 * Add a parameter to the material.
 * @param {string} name Parameter's name.
 * @param {Lemon.Type} type Parameter's type.
 * @param {Array.<number>|number|boolean|Lemon.Texture|Float32Array} value Parameter's value. 
 */
Lemon.Pass.prototype.add = function( name, type, value ) 
{
    // A value with this name already exist? We erase previous data …
    for( var i = 0; i < this.parameters.length; i++ )
    {
        if( this.parameters[i].name == name )
        {
            this.parameters[i].value = value; 
            this.parameters[i].type  = type; 
            return;
        }
    }

    // … otherwise we create a new one.
	this.parameters.push(new Lemon.PassParameter(name, type, value));
};

/**
 * Set parameter's value.
 * @param {string} name Parameter's name.
 * @param {Array.<number>|number|boolean|Lemon.Texture|Float32Array} value Parameter's value.
 */
Lemon.Pass.prototype.set = function( name, value ) 
{
    for( var i = 0; i < this.parameters.length; i++ )
    {
        if( this.parameters[i].name == name )
        {
            this.parameters[i].value = value; 
            break;
        }
    }
};

/**
 * Return an array with all material's parameters.
 * @return {Array.<Lemon.PassParameter>} An array of PassParameter.
 */
Lemon.Pass.prototype.getParameters = function() 
{
    return this.parameters;
};
