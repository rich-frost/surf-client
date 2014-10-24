'use strict';

angular.module('myApp.locationDetail', ['ngRoute'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/location/:NAME', {
    templateUrl: 'features/locationDetail/templates/locationDetail.html',
    controller: 'LocationDetailCtrl'
  });
}])

.controller('LocationDetailCtrl', ['$scope', '$stateParams', 'message', 'locationConsts', 
	function($scope, $stateParams, message, locationConsts) {
		
		var locations = [];
		
        message.subscribe(locationConsts.RETRIEVED_LOCATION_DETAILS, function (data) {
			$scope.locations = data;
        });
		
		//request location data
		message.publish(locationConsts.GET_LOCATION_DETAILS, $stateParams.NAME);
		
}]);