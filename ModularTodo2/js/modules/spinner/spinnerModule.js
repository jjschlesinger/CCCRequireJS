define(function () {
	return function(spinnerEl) {
		if(typeof spinnerEl == 'undefined')
			spinnerEl = document.getElementById("spinner");
		
		var start = function() {
			spinnerEl.style.display = "block";
		};

		var stop = function() {
			spinnerEl.style.display = "none";
		};

		return {
			start: start,
			stop: stop
		};
	};
});