angular.module('sortApp', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'client'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchSites  = '';     // set the default search/filter term

  
  $scope.site = [
    { client: 'a', site: 'http://cathysiller.com/'},
    { client: 'b', site: 'http://cathysiller.com/'},
    { client: 'c', site: 'http://cathysiller.com/'},
    { client: 'd', site: 'http://cathysiller.com/'},
    { client: 'e', site: 'http://cathysiller.com/'},
    { client: 'f', site: 'http://cathysiller.com/'},
    { client: 'g', site: 'http://cathysiller.com/'},
    { client: 'h', site: 'http://cathysiller.com/'},
    { client: 'hello', site: 'http://cathysiller.com/'},
    { client: 'i', site: 'http://cathysiller.com/'},
    { client: 'j', site: 'http://cathysiller.com/'},
    { client: 'k', site: 'http://cathysiller.com/'},
    { client: 'l', site: 'http://cathysiller.com/'},
    { client: 'love', site: 'http://cathysiller.com/'},
    { client: 'lovely', site: 'http://cathysiller.com/'},

  ];


});