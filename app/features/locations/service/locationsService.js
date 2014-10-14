"use strict";

/** locationsService
 * A service to query the possible surf locations
 */
angular.module('dataRetrievers').factory('locationsService', ['$q', '$resource',
    function ($q, $resource) {
        var dataReady = $q.defer();
        var airports = [];
        var locationsResource = $resource('http://localhost:8080/surf-app-cache/Locations/All');

        var init = function () {
            locationsResource.query(dataReady.resolve);

            //message.subscribe(airportConsts.GET, function (data) {
                dataReady.promise.then(function(locations) {
					console.log(locations);
                    //message.publish(airportConsts.SEND, airports);
                });
            //});
        };

        return {
            initialise: init
        };
    }
]);
