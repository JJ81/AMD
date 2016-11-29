'use strict';
requirejs.config({
	baseUrl : 'Scripts',
    paths: {
        jquery : ['jQuery.3.1.1']
        ,bootstrap : ['bootstrap.3.0.0']
    },
    shim : {
    	'bootstrap' : {
    		deps: ['jquery']
    	}
    }
});