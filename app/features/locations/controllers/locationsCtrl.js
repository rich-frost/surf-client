'use strict';

angular.module('myApp.locations', ['ngRoute'])


.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/locations', {
    templateUrl: 'features/locations/templates/locations.html',
    controller: 'LocationsCtrl'
  });
}])

.controller('LocationsCtrl', [function() {

}]);