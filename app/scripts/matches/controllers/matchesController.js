'use strict';

matchesController.$inject = [
  'MatchesService', 'UtilService'
];

/**
 * @class
 * @name MatchesController
 * @param {MatchesService} MatchesService
 * @param {UtilService} UtilService
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
