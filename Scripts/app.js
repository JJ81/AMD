requirejs.config({
	/*
		js파일을 찾는 경로를 설정한다.
		만약 설정이 없다면, require.js가 로드된 html페이지의 위치가 기본이다.
		data-main 속성을 사용하면 해당 위치가 기본url이 될 것이다.
		RequireJS 스크립트는 크로스 도메인에서도 잘 로딩된다.
	*/
	baseUrl: './Scripts',
	/*
		/ 혹은 http:과 같이 url 프로토콜이 아니라면
		baseUrl + path의 조합으로 해당 위치에서 스크립트를 찾는다.
		path세팅에 '.js'는 자동으로 붙기 때문에 생략한다.
		CDN에서 로그를 실패할 경우가 발생하기 때문에 아래와 같이 로컬 위치도 잡아준다.
	*/
	paths : {
		// 배열에서 첫번째 로딩이 실패하면 뒤에 있는 배열의 파일 로딩을 시도한다. .js는 반드시 제거해야 한다.
		jquery : ['//cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0-beta1/jquery.min','jquery.3.0.0.beta1'],
		bootstrap : ['//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.0/js/bootstrap.min','bootstrap.3.0.0.min'],
		test_a: 'a',
		lifeTooShort: 'lifeIsTooShort'
		// bootstrap_popover : ['bootstrap-popover.2.0.1'] // 3.0이상의 버전에서는 popover관련 스크립트를 따로 부를 필요가 없다.
	},
	/*
		RequireJS 2.1.10에서는 다른 스크립트에서 찾은 멀티 모듈 설정을 허용한다.
		기념이 좀 어렵다. 이런 뭐지?
		map config는 1:1 모듈 아이디 관계, bundle config는 멀티 모듈 아이디를 선정하여 버튼 모듈 아이디를 만든다?

	*/
	bundle : {
		primary : [], // 배열에 있는 설정된 것들이 primary 모듈 아이디로 로딩되어 사용할 수 있다?
		secondary: []
	},
	/*
		The other important thing to note is the use of “shim” – 
		where we are telling RequireJS that Bootstrap has a dependency 
		on jQuery so it must load jQuery first. Shim is used to configure 
		the dependencies and exports for older, traditional “browser globals” scripts 
		that do not use define() to declare the dependencies and set a module value.

		@ 의존성과 모듈 값을 설정 및 선언하는 define()을 사용하지 못하는 환경에서 설정한다.
	*/
	shim: { // 부트스트랩은 제이쿼리에 의존한다. 그래서 jquery먼저 로딩읋 해야 한다. order! 옵션은 예전버전에서만 가능한 것 같다.
		bootstrap: {
			deps: ['jquery'],
			exports: 'bootstrap' // 로딩된 후에 모듈값으로서 글로벌로 bootstrap을 사용한다.
		} // bootstrap이 로딩되기 전에 deps 부분이 로딩된다.
		// bootstrap_popover: {deps: ['bootstrap']} // popover를 사용하기 위해서는 bootstrap이 먼저 로드되어야 한다.
	},
	/*
		지난 버전과 호환을 가져야 할 경우 중요한 기능이다. 멀티 버전을 지원해야 할 경우
	*/
	map: {
		'newmodule': {
			'foo' : 'foo1.2'
		},
		'oldmodule' : {
			'foo' : 'foo1.0'
		}
	},
	config: {

	},
	packages: {

	},
	waitSeconds: 100 // 이게 정확히 무엇을 뜻하는건가? 모듈이 로드되는 시간에는 영향을 미치지 않는 듯하다.
});


// 이 콜백 함수는 모든 의존성 라이브러리 파일이 로드된 후에 실행된다.
// 인자의 순서와 앞의 파일 로드 배열 순서는 반드시 맞추어 주어야 한다.
requirejs(['jquery', 'bootstrap', 'test_a', 'lifeTooShort'], 
	function ($, undefined, a) {


		$(".modal-btn").bind("click", function () {
			$('#myModal').modal();	
		});
		
		/*
			만약 당신이 부트스트랩 버전이 4.0.0-beta 혹은 최신 버전이라면 툴팁에 대한 에러가 발생할 수 있다.
		*/
		$('[data-toggle="tooltip"]').tooltip({
			trigger: 'hover focus'
		});
		
		$('[data-toggle="popover"]').popover();


		console.log( a.foo() );



});