'use strict';

describe('Controller: GetInTouchCtrl', function () {

  // load the controller's module
  beforeEach(module('nicoSiteApp'));

  var GetInTouchCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    GetInTouchCtrl = $controller('GetInTouchCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
