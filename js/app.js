'use strict';

angular.module('AngularStarterApp', [
  'ngRoute',
  'AngularStarterApp.filters',
  'AngularStarterApp.services',
  'AngularStarterApp.directives',
  'AngularStarterApp.controllers'
]).
config(function($routeProvider) {
  $routeProvider.when(
    '/',
    {
      templateUrl: 'partials/home-partial.html',
      controller: 'HomeController'
    }
  );

  $routeProvider.when(
    '/two',
    {
      templateUrl: 'partials/two-partial.html',
      controller: 'TwoController'
    }
  );

  $routeProvider.otherwise({redirectTo:'/'});
});