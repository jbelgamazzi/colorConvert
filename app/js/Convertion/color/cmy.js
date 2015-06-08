Convertion.color.cmy = new function () {
	
	'use strict';
	
	/**
	 * @mthod <Public> torgb
	 * Converte cmy para rgb utilizando a formula de 
	 * conversao r,g,b = (1 - c,m,y) * 255
	 * @apram <Object> cmy
	 * @return <Object> rgb
	 */
	this.torgb = function (cmy) {
		
		var r = Math.ceil( (1 - cmy.c) * 255 ),
			g = Math.ceil( (1 - cmy.m) * 255 ),
			b = Math.ceil( (1 - cmy.y) * 255 );
		
		return { 'r':r, 'g':g, 'b':b };
	};
	
};