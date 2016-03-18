(function () {
  'use strict';

  angular.module('myApp.extrato', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/extrato', {
        templateUrl: 'extrato/extrato.html',
        controller: 'ExtratoController'
      });
    }])

    .controller('ExtratoController', ['$scope', 'extratoService', function ($scope, extratoService) {

      $scope.extrato = extratoService.get();
    }]);
})();