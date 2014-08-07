'use strict';

var myApp = angular.module('myApp.controllers', ['fhcloud']);

myApp.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
});

myApp.controller('MainCtrl', function($scope, fhcloud) {
    console.log('MainCtrl', $scope);

    $scope.uName = '';
    // add function to pass uName to cloud via
    // $fh.cloud call to controller scope
    $scope.sayHello = function(uName) {
        console.log("You typed in: ", uName);
        var reqJson = {
            "head": {},
            "payload": {
                "userInput": uName
            }
        };

        // check if uNameis defined
        if (reqJson.payload.userInput) {
            // if defined, pass uName and callback 
            // fn to fhcloud service
            fhcloud.cloud('exampleAction', reqJson, success, error);
            console.log(uName, " is sent to cloud");
        } else {
            console.log("uName:", " is not defined");
        }
    };

    // success callback function
    var success = function(res) {
        console.log("helloAction success with", res.msg);
        // if successful redirect to home
        if (res != null || undefined) {
            $scope.greeting = res.msg;
            $scope.$apply();
            console.log(res.msg);
        }
    };
    // error callback function
    var error = function(msg, err) {
        alert("fhcloud > helloAction > failed " + JSON.stringify(err));
    };

});

myApp.controller('CamCtrl', function($scope, Camera) {
    console.log('CamCtrl', $scope);

    $scope.getPhoto = function() {
        Camera.getPicture().then(function(imageURI) {
            console.log(imageURI);
            $scope.lastPhoto = imageURI;
        }, function(err) {
            console.err(err);
        }, {
            quality: 75,
            targetWidth: 320,
            targetHeight: 320,
            saveToPhotoAlbum: false
        });
    };

});