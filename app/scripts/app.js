'use strict';

var
  angular = require('angular');
require('./smaato');
module.exports = {
  /**
   * run the application
   * @param {Object} config
   */
  run: function appRun(config) {
    return angular.bootstrap(document, config.modules);
  }
};
