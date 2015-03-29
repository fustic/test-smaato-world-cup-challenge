'use strict';

matchController.$inject = [
  '$stateParams', 'MatchesService', 'UtilService'
];

/**
 * @class
 * @name MatchController
 * @param {$stateParams} $stateParams
 * @param {MatchesService} MatchesService
 * @param {UtilService} UtilService
 */
function matchController($stateParams, MatchesService, UtilService) {
  var matchID = +$stateParams.matchID;

  this.data = {};

  MatchesService.getMatch(matchID).then(function success(match) {
    this.data = match;
  }.bind(this), function error(err) {
    UtilService.showErrorMessage('Can not load match', err);
  });
}

module.exports = matchController;
