"use strict";

/** locationsService
 * A service to query the possible surf locations
 */
angular.module('dataRetrievers').factory('locationsService', ['$q', '$resource', 'message', 'locationConsts',
    function ($q, $resource, message, locationConsts) {
        var dataReady = $q.defer();
        var airports = [];
        //var locationsResource = $resource('http://localhost:8080/surf-app-cache/Locations/All');
		var locationsResource = $resource('resources/locations.json');

        var init = function () {
            locationsResource.query(dataReady.resolve);

            message.subscribe(locationConsts.GET, function (data) {
                dataReady.promise.then(function(locations) {
					var locationData = [];
					for (var i = 0; i < locations.length; i++) {
						locationData[i] = locations[i].locationInfo;
					}
				
					message.publish(locationConsts.SEND, locationData);
                });
            });
        };

        return {
            initialise: init
        };
    }
]);
