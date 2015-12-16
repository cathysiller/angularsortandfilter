	var myApp = angular.module('myApp', ['ngRoute']);

	// routes

	myApp.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider.
	      when('/sites', {
	        templateUrl: 'partials/site-list.html',
	        controller: 'SiteListCtrl'
	      }).
	      when('/sites/:siteId', {
	        templateUrl: 'partials/site-detail.html',
	        controller: 'SiteDetailCtrl'
	      }).
	      otherwise({
	        redirectTo: '/sites'
	      });
	  }]);

