// 这里我也可以不引入jquery，只要保证在main中它优先于math加载即可
// 这里写入只是表达一个在模块中也可以通过加载依赖其他模块
define(function() {
	function add(x, y) {
		alert($('#rep').text());
		return x + y;
	};

	function sub(x, y) {
		return x - y;
	};

	function sumAll(arr) {
		var ret = 0
		$.each(arr, function(key, item) {
			ret = ret + item;
		});
		return ret;
	};

	return {
		add : add,
		sub : sub,
		sumAll: sumAll
	}
});