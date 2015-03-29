'use strict';

matchController.$inject = [
  '$stateParams', 'MatchesService', 'UtilService'
];

/**
 * @class MatchController
 */
function matchController($stateParams, MatchesService, UtilService) {
  var matchID = +$stateParams.matchID;

  this.data = {};

  MatchesService.getMatch(matchID).then(function success(match) {
    this.data = match;
    console.log(match);
  }.bind(this), function error(err) {
    UtilService.showErrorMessage('Can not load match', err);
  });
}

module.exports = matchController;
