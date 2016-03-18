(function () {
  'use strict';

  describe('myApp.extrato module', function () {

    beforeEach(module('myApp.extrato'));

    beforeEach(function () {
      var extratoMock = {
        get: function () {
          return ['mocked extrato service'];
        }
      };

      module(function ($provide) {
        $provide.value('extratoService', extratoMock);
      });

      inject(function ($injector) {
        extratoMock = $injector.get('extratoService');
      });
    });

    describe('extrato controller', function () {

      it('should ....', inject(function ($rootScope, $controller) {
        //spec body
        var extratoController = $controller('ExtratoController', { $scope: $rootScope.$new() });
        expect(extratoController).toBeDefined();
      }));

    });
  });
})();