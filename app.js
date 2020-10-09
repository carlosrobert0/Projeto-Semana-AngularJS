(function () {
  'use strict';

  var div1 = document.getElementById('app1')
  var div2 = document.getElementById('app2')

  angular
    .module('app1', [])
    .controller('controlador', function ($scope) {
      $scope.nome = ' Carlos'
    })

  angular
    .module('app2', [])
    .controller('controlador2', function ($scope) {
      $scope.contador = 10
    })

  angular.bootstrap(div1, ['app1'])
  angular.bootstrap(div2, ['app2'])
})()