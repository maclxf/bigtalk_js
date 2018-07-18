//alert(12312);不需要再有<script>标签了
//http://www.requirejs.cn/docs/api.html#jsfiles
require.config({
	//针对入口页面也就是针对TestBootsrap.html来说
	//总的来说这里只要设置了baseUrl那么意味着：这里将默认加载该路径下所有的js文件（new）
	//即使是我不要path中的jquery还是能用jquery-2.2.3.min执行（new）
	//在模块中因为提前引入了jq所以不要依赖一样可以使用（new）
	baseUrl: "static/js/lib" ,

	// 关于 path 的详解
	/*requirejs.config({
	    //By default load any module IDs from js/lib
	    baseUrl: 'js/lib',
	    //except, if the module ID starts with "app",
	    //load it from the js/app directory. paths
	    //config is relative to the baseUrl, and
	    //never includes a ".js" extension since
	    //the paths config could be for a directory.
	    paths: {
	        app: '../app'
	    }
	});

	// Start the main app logic.
	requirejs(['jquery', 'canvas', 'app/sub'],
	function   ($,        canvas,   sub) {
	    //jQuery, canvas and the app/sub module are all
	    //loaded and can be used here now.
	});*/

	//https://blog.csdn.net/aitangyong/article/details/40653335
	//在path参数中，我们设置了模块名称(可以随意指定)和js文件路径的映射，
	//然后在shim参数中，指定了模块名称和它的依赖数组，上面我们的jquery插件只依赖于jquery框架。
	//通过这种方式，就可以使用requireJS完成jquery和其插件的加载，不会有全局变量污染问题。
	paths: {
		jquery: "jquery-2.2.3.min", // 不需要.js
		//bootbox: "bootbox"
	},
	urlArgs: 'ver=0.1.3',//版本控制
	shim: {
		'bootstrap.min': {
			deps: ['jquery'],
			exports: 'bm' // 这个对应下面的bm
		},
	}
});
require(['jquery', 'bootstrap.min', 'bootbox', 'bootstrap-switch.min'], function($, bm, bootbox) {

	bootbox.confirm("This is Confirm!", function() {
		bootbox.alert("This is alert!");
	});
});