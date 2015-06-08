Convertion.color = new function (){
	
	'use strict';
	
	this.FromRGB = function (){
		
		var rgb = color.RGB.getcolor();
		var cmy = this.rgb.tocmy(rgb);
		var hsv = this.rgb.tohsv(rgb);

		Validation.form.color.cmy.setForm(cmy);
		Validation.form.color.hsv.setForm(hsv);
		
		console.log(rgb);
		console.log(hsv);
		console.log(cmy);
	};
	
	this.FromCMY = function (){
		
		var cmy = color.CMY.getcolor();
		var rgb = this.cmy.torgb(cmy);
		var hsv = this.rgb.tohsv(rgb);
		
		color.RGB.setcolor(rgb);
		
		Validation.form.color.rgb.setForm(rgb);
		Validation.form.color.hsv.setForm(hsv);
				
		console.log(rgb);
		console.log(hsv);
		console.log(cmy);
	};
	
	this.FromHSV = function (){
		
		var hsv = color.HSV.getcolor();
		var rgb = this.hsv.torgb(hsv);
		var cmy = this.rgb.tocmy(rgb);

		color.RGB.setcolor(rgb);
		
		Validation.form.color.rgb.setForm(rgb);
		Validation.form.color.cmy.setForm(cmy);
		
		console.log(rgb);
		console.log(hsv);
		console.log(cmy);
	};
	
};