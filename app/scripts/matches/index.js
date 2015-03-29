'use strict';

/**
 * @module smaato.matches
 * @name smaatoMatches
 * @description show matches information
 */

var
  angular = require('angular'),
  matches = angular
    .module('smaatoMatches', [
      'ct.ui.router.extras'
    ])
    .service('MatchesService', require('./services/matchesService'))
    .config(require('./router'));

module.exports = matches;
