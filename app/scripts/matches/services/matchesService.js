'use strict';

var
  _ = require('_');

matchesService.$inject = ['$q', 'Smaato.Config', '$http'];

/**
 * @class
 * @name MatchesService
 */
function matchesService($q, Config, $http) {

  var matchesServiceObject = {
    getMatches: function getMatches() {
      return $http.get(Config.api.url + Config.api.endPoints.matches, {
        cache: true
      });
    }
  };

  return matchesServiceObject;
}

module.exports = matchesService;
