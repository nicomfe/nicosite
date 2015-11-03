'use strict';

/**
 * @ngdoc function
 * @name nicoSiteApp.controller:GetInTouchCtrl
 * @description
 * # GetInTouchCtrl
 * Controller of the nicoSiteApp
 */
NicoSiteApp.controller('GetInTouchCtrl', function ($scope, emailService) {
  $scope.sendEmail = function(){
    emailService.sendEmail($scope.contactModel).then(function(response){
      console.log(response);
    });
  };
});
