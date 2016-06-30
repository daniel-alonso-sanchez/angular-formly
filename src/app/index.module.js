(function() {
  'use strict';

  var app =angular
    .module('angularFormly', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ngRoute', 'ui.bootstrap','formly','formlyBootstrap']);
  app.run(function(formlyConfig) {
  var attributes = [
    'date-disabled',
    'custom-class',
    'show-weeks',
    'starting-day',
    'init-date',
    'min-mode',
    'max-mode',
    'format-day',
    'format-month',
    'format-year',
    'format-day-header',
    'format-day-title',
    'format-month-title',
    'year-range',
    'shortcut-propagation',
    'datepicker-popup',
    'show-button-bar',
    'current-text',
    'clear-text',
    'close-text',
    'close-on-date-selection',
    'datepicker-append-to-body'
  ];

  var bindings = [
    'datepicker-mode',
    'min-date',
    'max-date'
  ];

  var ngModelAttrs = {};

  angular.forEach(attributes, function(attr) {
    ngModelAttrs[camelize(attr)] = {attribute: attr};
  });

  angular.forEach(bindings, function(binding) {
    ngModelAttrs[camelize(binding)] = {bound: binding};
  });

  console.log(ngModelAttrs);
  
  formlyConfig.setType({
	name: 'datepicker',
    template: '<div class="input-group"><div class="input-group-addon" ng-click="$event.stopPropagation();to.isOpen=!to.isOpen;"><i class="glyphicon glyphicon-calendar"></i></div><input ng-click="to.isOpen=true" class="form-control" ng-model="model[options.key]" is-open="to.isOpen" datepicker-options="to.datepickerOptions" /></div>',
    wrapper: ['bootstrapLabel', 'bootstrapHasError'],
    defaultOptions: {
        ngModelAttrs: ngModelAttrs,
        templateOptions: {
            onFocus: function($viewValue, $modelValue, scope) {
                scope.to.isOpen = !scope.to.isOpen;
            },
            datepickerOptions: {}
        }
    },
    controller: ['$scope', function ($scope) {
      $scope.datepicker = {};

      $scope.datepicker.opened = false;

      $scope.datepicker.open = function ($event) {
        $scope.datepicker.opened = !$scope.datepicker.opened;
      };
    }]
  });

  function camelize(string) {
    string = string.replace(/[\-_\s]+(.)?/g, function(match, chr) {
      return chr ? chr.toUpperCase() : '';
    });
    // Ensure 1st char is always lowercase
    return string.replace(/^([A-Z])/, function(match, chr) {
      return chr ? chr.toLowerCase() : '';
    });
  }
  });
})();
