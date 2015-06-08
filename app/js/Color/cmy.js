color.CMY = new function () {

	'use strict';
	
	var color = { 'c':0, 'm':0, 'y':0 };
	
	this.setc = function (_c) {
		if (!_c) { return false; } 
		else { color.c = Number(_c); }		
	};
	
	this.setm = function (_m) {
		if (!_m) { return false; } 
		else { color.m = Number(_m); }		
	};
	
	this.sety = function (_y) {
		if (!_y) { return false; } 
		else { color.y = Number(_y); }		
	};
	
	this.getcolor = function () {
		return color;
	};
	
};