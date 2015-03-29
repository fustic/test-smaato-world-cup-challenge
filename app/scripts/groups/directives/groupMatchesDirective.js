'use strict';

var utils = require('../../common').utils;

module.exports = function () {
  return {
    restrict: 'E',
    scope: {
      'group': '='
    },
    templateUrl: '/scripts/groups/views/groupMatches.html',
    controller: 'GroupMatchesController',
    controllerAs: 'groupMatches',
    link: utils.emptyLinkFunction
  };
};
