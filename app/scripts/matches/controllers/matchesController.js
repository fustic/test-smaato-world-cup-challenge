'use strict';

matchesController.$inject = [
  'MatchesService', 'UtilService'
];

/**
 * @class MatchesController
 */
function matchesController(MatchesService, UtilService) {

  this.list = [];
  this.loadMatches = function loadMatches() {
    this.list = [];
    MatchesService.getMatches().then(function success(response) {
      this.list = response.data;
    }.bind(this), function error(err) {
      UtilService.showErrorMessage('Can not load matches', err);
    });
  };

  this.loadMatches();
}

module.exports = matchesController;
