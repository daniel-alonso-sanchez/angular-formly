(function() {
  'use strict';

  angular
    .module('angularFormly')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
