'use strict';

angular.module('myApp.locations', ['ngRoute'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/locations', {
    templateUrl: 'features/locations/templates/locations.html',
    controller: 'LocationsCtrl'
  });
}])

.controller('LocationsCtrl', ['$scope', 'message', 'locationConsts', 
	function($scope, message, locationConsts) {
		
		var locations = [];
		
        message.subscribe(locationConsts.SEND, function (data) {
			$scope.locations = data;
        });
		
		//request location data
		message.publish(locationConsts.GET, null);
		
}]);