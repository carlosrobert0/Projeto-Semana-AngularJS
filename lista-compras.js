(function (angular) {
  'use strict';

  angular.module('listaTarefasApp', [])

  angular.module('listaTarefasApp')
    .controller('listaTarefasController', listaTarefasController)

  listaTarefasController.$inject = []

  function listaTarefasController() {
    var vm = this

    vm.logado = false;
    vm.validar = false;
    vm.register = false;

  }

})(angular)