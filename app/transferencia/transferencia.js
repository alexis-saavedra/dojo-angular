(function () {
  'use strict';

  angular.module('myApp.transferencia', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
      $routeProvider.when('/transferencia', {
        templateUrl: 'transferencia/transferencia.html',
        controller: 'TransferenciaController'
      });
    }])

    .controller('TransferenciaController', ['$scope', function ($scope) {
    }]);
})();