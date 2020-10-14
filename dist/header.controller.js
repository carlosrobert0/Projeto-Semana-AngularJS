(function () {
  'use strict';
  
  angular.module('listaComprasApp')
    .controller('HeaderController', headerController)

  headerController.$inject = ['ListaComprasService', 'helperFactory'];

  function headerController(service, helper) {
    var vm = this;

    vm.go = helper.go;
    vm.logout = logout
    vm.iniciar = iniciar;
    vm.serviceF = serviceF;

    function iniciar() {
      vm.go();
    }

    function serviceF(_path) {
      return service.exemplo()
        .then(function(response) {
          console.log('veio da service', response)
        })
    }

    function logout() {
      helper.setRootScope('userLogged', null)
      helper.path('/login');
    }
  }

})()