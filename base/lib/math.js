define(['jquery'], function($) {
	var add = function(x, y) {
		return x + y;
	};
	var sub = function(x, y) {
		return x - y;
	}

	var sumAll = function(arr) {
		var ret = 0
		$.each(arr, function(key, item) {
			ret = ret + item;
		});
		return ret;
	}
	return {
		add : add,
		sub : sub,
		sumAll: sumAll
	}
});