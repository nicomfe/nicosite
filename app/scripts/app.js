'use strict';

/**
 * @ngdoc overview
 * @name nicoSiteApp
 * @description
 * # nicoSiteApp
 *
 * Main module of the application.
 */
angular
  .module('nicoSiteApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
