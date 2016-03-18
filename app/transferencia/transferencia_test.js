(function () {
  'use strict';

  describe('myApp.transferencia module', function () {

    var ctrl, mockDataSrv, scope;

    beforeEach(module('myApp.transferencia'));

    describe('transferencia controller', function () {

      it('should ....', inject(function ($rootScope, $controller) {
        //spec body
        var transferenciaController = $controller('TransferenciaController', { $scope: $rootScope.$new() });
        expect(transferenciaController).toBeDefined();
      }));

    });
  });
})();