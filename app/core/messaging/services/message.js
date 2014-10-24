"use strict";

angular.module('messageModule').factory('message', ['$rootScope',
    function ($rootScope) {
        /** subscribe
         * Set a callback function to be called when there is a broadcast
         * on a certain topic.
         *
         * @param topic {string} The message which we are adding the callback function to
         * @param func {object} The function to be called when a broadcast is recieved
         * on the given message
         */
        var subscribe = function (message, subscribeCallback) {
            //Make sure our message is a string
            if (typeof message === 'string') {
                //begin listening on the message
                $rootScope.$on(message, function (event, data) {
                    subscribeCallback(data);
                });
            } else {
                throw new Error("topic is not a string");
            }
        };

        /** publish
         * Broadcast data on a given message
         *
         * @param message {string} The message of the data we are broadcasting
         * @param data {object} The data to be sent to the callback function
         */
        var publish = function (message, data) {
            if (typeof message === 'string') {
                $rootScope.$broadcast(message, data);
            } else {
                throw new Error("topic is not a string");
            }
        };

        return {
            subscribe: subscribe,
            publish: publish
        };
    }
]);
