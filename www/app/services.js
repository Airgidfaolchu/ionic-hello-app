'use strict';

var myApp = angular.module('myApp.services', []);

myApp.factory('Camera', ['$q',
    function($q) {

        return {
            getPicture: function(options) {
                var q = $q.defer();

                navigator.camera.getPicture(function(result) {
                    // Add changes here
                    q.resolve(result);
                }, function(err) {
                    q.reject(err);
                }, options);

                return q.promise;
            }
        }
    }
])