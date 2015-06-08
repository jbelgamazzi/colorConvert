Validation.form.color.rgb = new function () {
	
	'use strict';
	
	this.setForm = function (rgb) {
		for (var key in rgb){
			document.getElementById(key).value = rgb[key];	
		}		
	};
	
	this.r = function () {
		var r = document.getElementById("r");
			r.addEventListener("input", function () {
				if (!r.value) {
					r.value = '';
				} else {
					if (r.value < 0) { r.value = 0; } else 
					if (r.value > 255) { r.value = 255; }
					
					color.RGB.setr(r.value);
					Convertion.color.FromRGB();
				}
			});
	};
	
	this.g = function () {
		var g = document.getElementById("g");
			g.addEventListener("input", function () {
				if (!g.value) {
					g.value = '';
				} else {
					if (g.value < 0) { g.value = 0; } else 
					if (g.value > 255) { g.value = 255; }
					
					color.RGB.setg(g.value);
					Convertion.color.FromRGB();
				}
			});
	};
	
	this.b = function () {
		var b = document.getElementById("b");
			b.addEventListener("input", function () {
				if (!b.value) {
					b.value = '';
				} else {
					if (b.value < 0) { b.value = 0; } else 
					if (b.value > 255) { b.value = 255; }
					
					color.RGB.setb(b.value);
					Convertion.color.FromRGB();
				}
			});
	};
};