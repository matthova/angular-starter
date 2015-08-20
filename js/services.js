'use strict';

angular.module('AngularStarterApp.services', [])
.factory('FOAAS', function($http) {
  var req = {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  };
  return{
    getInsult: function(name){
      var url = "http://foaas.com/you/" + name + "/" + name;
      req.url = url;
      return $http(req);
    }
  }
});