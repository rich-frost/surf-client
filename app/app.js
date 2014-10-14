'use strict';


angular.module('dataRetrievers', ['ngResource']);

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.locations',
  'myApp.version',
  'ui.bootstrap',
  'dataRetrievers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/locations'});
}]);

angular.module('myApp').run(['$rootScope', 'locationsService', 
    function ($rootScope, locationsService) {
        locationsService.initialise();

//        $state.transitionTo('main.home');
    }
]);
