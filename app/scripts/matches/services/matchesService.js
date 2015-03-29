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
    },
    getMatch: function getMatch(matchID) {
      var
        deferred = $q.defer();

      matchesServiceObject.getMatches().then(function success (response) {
        var
          match = _.filter(response.data, {'match_number': matchID})[0];

        if (match) {
          return deferred.resolve(match);
        }
        return deferred.reject();

      }, function error(err) {
        deferred.reject(err);
      });

      return deferred.promise;
    },
    getTeamMatches: function getTeamMatches(teamID) {
      return $http.get(Config.api.url + Config.api.endPoints.teamMatches, {
        cache: true,
        params: {
          'fifa_code': teamID
        }
      });
    }
  };

  return matchesServiceObject;
}

module.exports = matchesService;
