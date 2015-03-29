'use strict';

var utils = require('../../common').utils;

module.exports = function () {
  return {
    restrict: 'E',
    scope: {
      'match': '='
    },
    templateUrl: '/scripts/matches/views/matchInfo.html'
  };
};
