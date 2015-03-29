'use strict';

/**
 * @module smaato.matches
 * @name SmaatoMatches
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
    .controller('MatchController', require('./controllers/matchController'))
    .directive('matches', require('./directives/matchesDirective'))
    .directive('matchCard', require('./directives/matchCardDirective'))
    .directive('matchInfo', require('./directives/matchInfoDirective'))
    .directive('matchEvents', require('./directives/matchEventsDirective'))
    .filter('matchCountry', require('./filters/matchCountryFilter'))
    .config(require('./router'));

module.exports = matches;
