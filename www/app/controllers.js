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
            fhcloud.cloud('hello', reqJson, success, error);
            console.log(uName, " is sent to cloud");
        } else {
            console.log("uName:", " is not defined");
        }
    };

    // success callback function
    var success = function(res) {
        console.log("hello success with", res.msg);
        // if successful redirect to home
        if (res != null || undefined) {
            $scope.greeting = res.msg;
            $scope.$apply();
            console.log(res.msg);
        }
    };
    // error callback function
    var error = function(msg, err) {
        alert("fhcloud > hello > failed " + JSON.stringify(err));
    };

});
myApp.controller('CamCtrl', function($scope, Camera) {
    console.log('CamCtrl', $scope);
    //chacking if running on mobile device or desktop browser
    var app = document.URL.indexOf('http://') === -1 && document.URL.indexOf('https://') === -1;
    if (app) {
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

        }
    } else { //Take photo using HTML5 video capture in desktop browsers - for demo and testing purposes
        console.log('You are using a Desktop browser, therefore a HTML5 camera function is called');
        $scope.fakePhoto = function() {

            var streaming = false,
                video = document.querySelector('#video'),
                canvas = document.querySelector('#canvas'),
                takeBtn = document.querySelector('#takeBtn'),
                width = 320,
                height = 0;

                video.style.display = "block";
                takeBtn.style.display = "block";
                canvas.style.display = "none";

            navigator.getMedia = (navigator.getUserMedia ||
                navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia ||
                navigator.msGetUserMedia);

            navigator.getMedia({
                    video: true,
                    audio: false
                },
                function(stream) {
                    if (navigator.mozGetUserMedia) {
                        video.mozSrcObject = stream;
                    } else {
                        var vendorURL = window.URL || window.webkitURL;
                        video.src = vendorURL.createObjectURL(stream);
                    }
                    video.play();
                },
                function(err) {
                    console.log("An error occured! " + err);
                }
            );

            video.addEventListener('canplay', function(ev) {
                if (!streaming) {
                    height = video.videoHeight / (video.videoWidth / width);
                    video.setAttribute('width', width);
                    video.setAttribute('height', height);
                    canvas.setAttribute('width', width);
                    canvas.setAttribute('height', height);
                    streaming = true;
                }
            }, false);

            function takepicture() {
                canvas.width = width;
                canvas.height = height;
                canvas.getContext('2d').drawImage(video, 0, 0, width, height);
                var data = canvas.toDataURL('image/png');
            }

            takeBtn.addEventListener('click', function(ev) {
                takepicture();
                ev.preventDefault();
                video.style.display = "none";
                takeBtn.style.display = "none";
                canvas.style.display = "block";
            }, false);

        };


    }
});