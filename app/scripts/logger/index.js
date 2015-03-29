'use strict';

/**
 * @module smaato.logger
 * @name SmaatoLogger
 * @description Logger service
 */

var
  angular = require('angular'),
  logger = angular
    .module('smaatoLogger', [])
    .service('LoggerService', require('./services/loggerService'));

module.exports = logger;
