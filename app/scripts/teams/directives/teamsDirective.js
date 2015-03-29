'use strict';

var utils = require('../../common').utils;

module.exports = function () {
  return {
    restrict: 'E',
    templateUrl: '/scripts/teams/views/teams.html',
    controller: 'TeamsController',
    controllerAs: 'teams',
    link: utils.emptyLinkFunction
  };
};
