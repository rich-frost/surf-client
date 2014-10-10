'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('myApp.view1'));

  describe('view1 controller', function(){

	  var ctrl, scope;
	  // inject the $controller and $rootScope services
	  // in the beforeEach block
	  beforeEach(inject(function($controller, $rootScope) {
		// Create a new scope that's a child of the $rootScope
		scope = $rootScope.$new();
		// Create the controller
		ctrl = $controller('View1Ctrl', {
		  $scope: scope
		});
	  }));
  
    it('should be defined', inject(function($controller) {
      //spec body
      expect(ctrl).toBeDefined();
	  expect(scope.location).toBeDefined();
    }));

    it('should default your location to Woolacombe', inject(function($controller) {
		expect(scope.location).toEqual("Woolacombe");
    }));
	
  });
});