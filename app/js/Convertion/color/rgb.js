Convertion.color.rgb = new function () {
	
	'use strict';
	
	/**
	 * @mthod <Public> tohsv
	 * Converte rgb para hsv utilizando a formula de 
	 * conversao http://en.wikipedia.org/wiki/HSL_and_HSV
	 * @apram <Object> rgb
	 * @return <Object> hsv
	 */
	this.tohsv = function (rgb) {
		
		var r = (rgb.r / 255), g = (rgb.g / 255), b = (rgb.b / 255),
			rgbmax = Math.max(r, g, b), rgbmin = Math.min(r, g, b),
			delta  = rgbmax - rgbmin, h,s, v = rgbmax;
								
			if (delta == 0) { 
				h = 0; 
			} else if (rgbmax == r) { 
				h  = (g - b);
				h /= delta;
				h %= 6; 
			} else if (rgbmax == g) { 
				h  = (b - r);
				h /= delta;
				h += 2; 
			} else {
				h  = (r - g);
				h /= delta;
				h += 4; 
			}
			
			h *= 60;
		
			if (h < 0) { h += 360; }
			
			if (delta == 0) {
				s = 0;
			} else {
				s = delta / v;
			}
			
			s *= 100; v *= 100;
			
			h = Number(h.toFixed());
			s = Number(s.toFixed());
			v = Number(v.toFixed());
			
			return { 'h':h, 's':s, 'v':v };
	};
	
	
	/**
	 * @mthod <Public> rgbtocmy
	 * Converte rgb paara cmy utilizando a formula de 
	 * conversao c,m,y = 1 - (r,g,b / 255)
	 * @apram <Object> rgb
	 * @return <Object> cmy
	 */
	this.tocmy = function (rgb) {
		
		var c = 1 - (rgb.r / 255),
		    m = 1 - (rgb.g / 255),
		    y = 1 - (rgb.b / 255);
		
		return { 'c':c, 'm':m, 'y':y };
	};
};