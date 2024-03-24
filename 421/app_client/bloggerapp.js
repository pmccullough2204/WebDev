// Define the AngularJS module
var app = angular.module('myApp', []);

// Define the controller and attach it to the module
app.controller('myController', function($scope) {
    // Initialize the value of myInput
    $scope.myInput = "";

    // Optionally, you can define functions to handle changes in myInput
});
