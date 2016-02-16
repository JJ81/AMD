define(['require','exports','b'], function (require, exports, b) { // 여기서 미리 부르지 않으면 로드가 되지 않는다.
	var cssurl = require.toUrl('a.css'); // 현재 폴더를 기본으로 참조한다.
	console.log(cssurl); // ./Scripts/a.css가 출력된다.
	
	// var b = require('b'); // 이렇게 부르면 로드가 되지 않는다.
	exports.foo = function () {
		return b.test;
	}

});