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
    .controller('MatchesController', require('./controllers/matchesController'))
    .directive('matches', require('./directives/matchesDirective'))
    .directive('matchCard', require('./directives/matchCardDirective'))
    .filter('matchCountry', require('./filters/matchCountryFilter'))
    .config(require('./router'));

module.exports = matches;
