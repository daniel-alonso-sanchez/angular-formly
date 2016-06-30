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
	fieldsService.get({user: 1});
  vm.userFields = [
    {
      key: 'email',
      type: 'input',
      templateOptions: {
        type: 'text',
        label: 'Email address',
        placeholder: 'Enter email'
      }
    },
    {
      key: 'password',
      type: 'input',
      templateOptions: {
        type: 'password',
        label: 'Password',
        placeholder: 'Password'
      }
	
      
    },
    {
      key: 'file',
      type: 'input',
      templateOptions: {
		type: 'file',
        label: 'File input',
        description: 'Example block-level help text here',
        url: 'https://example.com/upload'
      },
expressionProperties: {
		'templateOptions.disabled': '!model.checked'
      	}
    },
    {
      key: 'checked',
      type: 'checkbox',
      templateOptions: {
        label: 'Check me out'
      }
    }
  ];
  
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
