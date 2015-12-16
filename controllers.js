'use strict'

/* Controllers */

var myAppControllers = angular.module('myAppControllers', []);

myAppControllers.controller('SiteListCtrl', ['$scope', 'http:',
	function($scope, $http) {
		$http.get('sites/sites.json').success(function(data) {
      		$scope.sites = data;
    });
}]);