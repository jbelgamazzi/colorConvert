Validation.form.color.hsv = new function () {
	
	'use strict';
	
	this.setForm = function (hsv) {
		for (var key in hsv){
			document.getElementById(key).value = hsv[key];	
		}		
	};
	
	this.h = function () {
		var h = document.getElementById("h");
			h.addEventListener("input", function () {
				if (!h.value) {
					h.value = '';
				} else {
					if (h.value < 0) { h.value = 0; } else 
					if (h.value >= 360) { h.value = 359; }
					
					color.HSV.seth(h.value);
					Convertion.color.FromHSV();
				}
			});
	};
	
	this.s = function () {
		var s = document.getElementById("s");
			s.addEventListener("input", function () {
				if (!s.value) {
					s.value = '';
				} else {
					if (s.value < 0) { s.value = 0; } else 
					if (s.value > 100) { s.value = 100; }
					
					color.HSV.sets(s.value);
					Convertion.color.FromHSV();
				}
			});
	};
	
	this.v = function () {
		var v = document.getElementById("v");
			v.addEventListener("input", function () {
				if (!v.value) {
					v.value = '';
				} else {
					if (v.value < 0) { v.value = 0; } else 
					if (v.value > 100) { v.value = 100; }
					
					color.HSV.setv(v.value);
					Convertion.color.FromHSV();
				}
			});
	};
};