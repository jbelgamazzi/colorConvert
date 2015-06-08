Convertion.color.hsv = new function () {
	
	'use strict';

	/**
	 * @mthod <Public> orgb
	 * Converte hsv para rgb utilizando a formula de 
	 * conversao http://en.wikipedia.org/wiki/HSL_and_HSV
	 * @apram <Object> hsv
	 * @return <Object> rgb
	 */
	this.torgb = function (hsv) {
		
		var h = (hsv.h / 360),
			s = (hsv.s / 100),
			v = (hsv.v / 100),
			r, g, b;
		
		if (s == 0) {			
			r = v;
			g = v;
			b = v;			
		} else {			
			var _i = Math.floor(h * 6);
			var _j = h * 6 - _i;
			var _k = v * (1 - s);
			var _l = v * (1 - _j * s); 
			var _m = v * (1 - (1 - _j) * s); 
			
			switch (_i % 6) {
				case 0: r =  v; g = _m; b = _k; break;
				case 1: r = _l; g =  v; b = _k; break;
				case 2: r = _k; g =  v; b = _m; break;
				case 3: r = _k; g = _l; b =  v; break;
				case 4: r = _m; g = _k; b =  v; break;
				case 5: r =  v; g = _k; b = _l; break;
			}
		}
		
		r = Math.floor(r *= 255);
		g = Math.floor(g *= 255);
		b = Math.floor(b *= 255);
		
		return {'r':r, 'g':g, 'b':b};		
		
	};
};
	