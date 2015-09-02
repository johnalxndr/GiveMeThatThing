(function() {
  'use strict';

  angular
    .module('giveMeThatThing')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
