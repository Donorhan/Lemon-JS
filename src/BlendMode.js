goog.provide('Lemon.BlendMode');

/**
 * Blending.
 * @constructor
 * @param {Lemon.BlendMode.Mode=} mode Mode to use, preset values.
 * @author Donovan ORHAN <dono.orhan@gmail.com>
 */
Lemon.BlendMode = function( mode ) 
{
    /**
    * Source blending factor for the alpha channel.
    * @type {Lemon.BlendMode.Factor}
    * @public
    */
    this.alphaSourceFactor = Lemon.BlendMode.Factor.One;

    /**
    * Destination blending factor for the alpha channel.
    * @type {Lemon.BlendMode.Factor}
    * @public
    */
    this.alphaDestinationFactor = Lemon.BlendMode.Factor.OneMinusSourceAlpha;

    /**
    * Blending equation for the alpha channel.
    * @type {Lemon.BlendMode.Equation}
    * @public
    */
    this.alphaEquation = Lemon.BlendMode.Equation.Add;

    /**
    * Blending color (source).
    * @type {Lemon.BlendMode.Factor}
    * @public
    */
    this.colorSourceFactor = Lemon.BlendMode.Factor.SourceAlpha;

    /**
    * Blending color (destination).
    * @type {Lemon.BlendMode.Factor}
    * @public
    */
    this.colorDestinationFactor = Lemon.BlendMode.Factor.OneMinusSourceAlpha;

    /**
    * Equation to use on source and destination color.
    * @type {Lemon.BlendMode.Equation}
    * @public
    */    
    this.colorEquation = Lemon.BlendMode.Equation.Add;

    if( mode )
    	this.setMode(mode);
};

/**
 * Default modes availables.
 * @enum {number}.
 */
Lemon.BlendMode.Mode = { Alpha : 0, Add : 1, Multiply : 2, None : 3 };

/**
 * Blend factors.
 * @enum {number}.
 */
Lemon.BlendMode.Factor = {  DestinationAlpha            : 0, 
                            DestinationColor            : 1,
                            One                         : 2, 
                            OneMinusDestinationAlpha    : 3, 
                            OneMinusDestinationColor    : 4, 
                            OneMinusSourceAlpha         : 5, 
                            OneMinusSourceColor         : 6,
                            SourceAlpha                 : 7, 
                            SourceColor                 : 8,
                            Zero                        : 9 
                         };

/**
 * Blend equations.
 * @enum {number}.
 */
Lemon.BlendMode.Equation = { Add: 0, Subtract: 1 };

/**
 * Set blending mode to use: this method erase the previous configuration, be careful.
 * @param {Lemon.BlendMode.Mode=} mode Mode to use, preset values.
 */
Lemon.BlendMode.prototype.setMode = function( mode ) 
{
	switch(mode)
	{
		case Lemon.BlendMode.Mode.Alpha:
		{
			this.colorSourceFactor 		= Lemon.BlendMode.Factor.SourceAlpha;
			this.colorDestinationFactor = Lemon.BlendMode.Factor.OneMinusSourceAlpha;
			this.colorEquation			= Lemon.BlendMode.Equation.Add;
			this.alphaSourceFactor 		= Lemon.BlendMode.Factor.One;
			this.alphaDestinationFactor = Lemon.BlendMode.Factor.OneMinusSourceAlpha;
			this.alphaEquation 			= Lemon.BlendMode.Equation.Add;
			break;
		}
		case Lemon.BlendMode.Mode.Add:
		{
			this.colorSourceFactor 		= Lemon.BlendMode.Factor.SourceAlpha;
			this.colorDestinationFactor = Lemon.BlendMode.Factor.One;
			this.colorEquation			= Lemon.BlendMode.Equation.Add;
			this.alphaSourceFactor 		= Lemon.BlendMode.Factor.One;
			this.alphaDestinationFactor = Lemon.BlendMode.Factor.One;
			this.alphaEquation 			= Lemon.BlendMode.Equation.Add;
			break;
		}
		case Lemon.BlendMode.Mode.Multiply:
		{
			this.colorSourceFactor 		= Lemon.BlendMode.Factor.DestinationColor;
			this.colorDestinationFactor = Lemon.BlendMode.Factor.One;
			this.colorEquation			= Lemon.BlendMode.Equation.Add;
    		this.alphaSourceFactor 		= Lemon.BlendMode.Factor.One;
    		this.alphaDestinationFactor = Lemon.BlendMode.Factor.OneMinusSourceAlpha;
   			this.alphaEquation 			= Lemon.BlendMode.Equation.Add;
			break;
		}
		default:
		case Lemon.BlendMode.Mode.None:
		{
			this.colorSourceFactor 		= Lemon.BlendMode.Factor.One;
			this.colorDestinationFactor = Lemon.BlendMode.Factor.Zero;
			this.colorEquation			= Lemon.BlendMode.Equation.Add;
    		this.alphaSourceFactor 		= Lemon.BlendMode.Factor.One;
    		this.alphaDestinationFactor = Lemon.BlendMode.Factor.OneMinusSourceAlpha;
   			this.alphaEquation 			= Lemon.BlendMode.Equation.Add;
			break;
		}
	}
};

/**
 * Check if the given BlendMode instance is equal to this one.
 * @param {Lemon.BlendMode} blendMode A BlendMode instance.
 * @return {boolean} True if the two blend mode are equals, otherwise false.
 */
Lemon.BlendMode.prototype.isEqual = function( blendMode ) 
{
    return (this.alphaSourceFactor          == blendMode.alphaSourceFactor      &&
            this.alphaDestinationFactor     == blendMode.alphaDestinationFactor && 
            this.alphaEquation              == blendMode.alphaEquation          &&
            this.colorSourceFactor          == blendMode.colorSourceFactor      &&
            this.colorDestinationFactor     == blendMode.colorDestinationFactor &&
            this.colorEquation              == blendMode.colorEquation);
};
