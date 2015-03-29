'use strict';

var utils = require('../../common').utils;

module.exports = function () {
  return {
    restrict: 'E',
    templateUrl: '/scripts/matches/views/matches.html',
    controller: 'MatchesController',
    controllerAs: 'matches',
    link: utils.emptyLinkFunction
  };
};
