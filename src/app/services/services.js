(function() {
  'use strict';

  angular
    .module('angularFormly')
	.factory('fieldsService', function($resource) {	
		return $resource('http://localhost:3004/forms/:id',{id: "@id"});
	});
})();
