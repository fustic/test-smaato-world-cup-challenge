'use strict';

var utils = require('../../common').utils;

module.exports = function () {
  return {
    restrict: 'E',
    scope: {
      'teams': '='
    },
    templateUrl: '/scripts/groups/views/groupTeamsTable.html',
    link: utils.emptyLinkFunction
  };
};
