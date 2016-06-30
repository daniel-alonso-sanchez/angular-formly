(function() {
  'use strict';

  angular
    .module('angularFormly')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, webDevTec,fieldsService) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1467200083570;
    vm.user = {};
	vm.options = {};
	var response=fieldsService.get({id: 2});
		response.$promise.then(function(data) {
			vm.userFields=data.fields;
	});
   //vm.userFields
  
  vm.onSubmit = onSubmit;
 
  
 
    activate();

    function activate() {
      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

  
 function onSubmit() {
    
  }
    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
