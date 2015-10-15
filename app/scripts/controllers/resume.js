'use strict';

/**
 * @ngdoc function
 * @name nicoSiteApp.controller:ResumeCtrl
 * @description
 * # ResumeCtrl
 * Controller of the nicoSiteApp
 */
NicoSiteApp.controller('ResumeCtrl', function ($scope,ResumeFactory) {
  $scope.technologies = ResumeFactory.getTechnologies();
  $scope.workExperience = ResumeFactory.getWorkExperience();
  $scope.certifications = ResumeFactory.getCertifications();
  $scope.educations = ResumeFactory.getEducations();
});
