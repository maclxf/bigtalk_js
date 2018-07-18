//alert(12312);不需要再有<script>标签了
require.config({
	baseUrl: "static/js/lib" ,//针对于main来说
	paths: {
		"jquery": "jquery-2.2.3.min", // 不需要.js
		"math" : "math" // 不需要.js
	}
});
require(['jquery', 'math'], function($, math) {
	alert(math.add(1, 10));
	alert(math.sumAll([1, 3, 5, 7]));
});