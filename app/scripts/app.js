'use strict';

/**
 * @ngdoc overview
 * @name nicoSiteApp
 * @description
 * # nicoSiteApp
 *
 * Main module of the application.
 */

 var NicoSiteApp = angular
  .module('NicoSiteApp', [
    'ngAnimate',
    'ngRoute',
    'ngTouch'
  ]);


  NicoSiteApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeCtrl'
      })
      .when('/about-me', {
        templateUrl: 'views/about-me.html',
        controller: 'AboutMeCtrl'
      })
      .when('/get-in-touch', {
        templateUrl: 'views/get-in-touch.html',
        controller: 'GetInTouchCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
