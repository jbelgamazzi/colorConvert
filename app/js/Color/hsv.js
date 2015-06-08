color.HSV = new function () {

	'use strict';
	
	var color = { 'h':0, 's':0, 'v':0 };
	
	this.seth = function (_h) {
		if (!_h) { return false; } 
		else { color.h = Number(_h); }		
	};
	
	this.sets = function (_s) {
		if (!_s) { return false; } 
		else { color.s = Number(_s); }		
	};
	
	this.setv = function (_v) {
		if (!_v) { return false; } 
		else { color.v = Number(_v); }		
	};
	
	this.getcolor = function () {
		return color;
	};
	
};