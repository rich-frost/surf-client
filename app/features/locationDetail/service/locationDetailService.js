"use strict";

/** locationDetailsService
 * A service to query a surf locations data
 */
angular.module('dataRetrievers').factory('locationDetailsService', ['$q', '$resource', 'message', 'locationConsts',
    function ($q, $resource, message, locationConsts) {
        var dataReady = $q.defer();
        var airports = [];

		var locationsResource = $resource('resources/locationData.json');

        var init = function () {
            locationsResource.query(dataReady.resolve);

            message.subscribe(locationConsts.GET_LOCATION_DETAILS, function (data) {
                dataReady.promise.then(function(locations) {
					var locationData = [];
					for (var i = 0; i < locations.length; i++) {
						locationData[i] = locations[i].locationInfo;
					}
				
					message.publish(locationConsts.RETRIEVED_LOCATION_DETAILS, locationData);
                });
            });
        };

        return {
            initialise: init
        };
    }
]);
