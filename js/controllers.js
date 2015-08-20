'use strict';

angular.module('AngularStarterApp.controllers', [])
.controller(
  'HomeController',
  function($scope, FOAAS) {
    FOAAS.getInsult("homepage")
    .success(function(data){
      $scope.insult = data.message;
    })
    .error(function(){
      alert("oh noes!");
    });
  }
)
.controller(
  'TwoController',
  function($scope, FOAAS) {
    FOAAS.getInsult("two")
    .success(function(data){
      $scope.insult = data.message;
    })
    .error(function(){
      alert("oh noes!");
    });
  }
)
;