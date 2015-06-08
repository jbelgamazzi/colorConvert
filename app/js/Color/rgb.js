color.RGB = new function () {
	
	'use strict';
	
	var color = { 'r':0, 'g':0, 'b':0 };
	
	this.setr = function (_r) {
		if (!_r) { return false; } 
		else { color.r = Number(_r); }		
	};
		
	this.setg = function (_g) {
		if (!_g) { return false; } 
		else { color.g = Number(_g); }		
	};
	
	this.setb = function (_b) {
		if (!_b) { return false; } 
		else { color.b = Number(_b); }		
	};
	
	this.getcolor = function () {
		return color;
	};
	
	this.setcolor = function (rgb) {
		
		if ((!rgb.r && rgb.r != 0) || (!rgb.g && rgb.g != 0) || (!rgb.b && rgb.b != 0)) {
			console.log("ERROR in setcolor(RGB)");
			return false;
		}
		
		this.setr(rgb.r);
		this.setg(rgb.g);
		this.setb(rgb.b);
	};
	
};