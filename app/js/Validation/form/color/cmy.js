Validation.form.color.cmy = new function () {
	
	'use strict';
	
	this.setForm = function (cmy) {
		for (var key in cmy){
			document.getElementById(key).value = cmy[key];	
		}		
	};
	
	this.c = function () {
		var c = document.getElementById("c");
			c.addEventListener("input", function () {
				if (!c.value) {
					c.value = '';
				} else {
					if (c.value < 0) { c.value = 0; } else 
					if (c.value > 1) { c.value = 1; }
					
					color.CMY.setc(c.value);
					Convertion.color.FromCMY();
				}
			});
	};
	
	this.m = function () {
		var m = document.getElementById("m");
			m.addEventListener("input", function () {
				if (!m.value) {
					m.value = '';
				} else {
					if (m.value < 0) { m.value = 0; } else 
					if (m.value > 1) { m.value = 1; }
					
					color.CMY.setm(m.value);
					Convertion.color.FromCMY();
				}
			});
	};
	
	this.y = function () {
		var y = document.getElementById("y");
			y.addEventListener("input", function () {
				if (!y.value) {
					y.value = '';
				} else {
					if (y.value < 0) { y.value = 0; } else 
					if (y.value > 1) { y.value = 1; }
					
					color.CMY.sety(y.value);
					Convertion.color.FromCMY();
				}
			});
	};
};