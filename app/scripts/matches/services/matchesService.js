'use strict';

var
  _ = require('_');

matchesService.$inject = ['$q', 'Smaato.Config', '$http'];

/**
 * @class
 * @name MatchesService
 * @param {$q} $q
 * @param {Smaato.Config} Config
 * @param {$http} $http
 */
function matchesService($q, Config, $http) {

  /**
   * @this MatchesService
   * @type {{getMatches: Function, getMatch: Function, getTeamMatches: Function}}
   */
  var matchesServiceObject = {
    /**
     * @this MatchesService
     * @doc method
     * @name getMatches
     * @description get all matches information
     * @returns {HttpPromise}
     */
    getMatches: function getMatches() {
      return $http.get(Config.api.url + Config.api.endPoints.matches, {
        cache: true
      });
    },
    /**
     * @this MatchesService
     * @doc method
     * @name getMatch
     * @description get match information
     * @param {number} matchID
     * @returns {Promise}
     */
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
    /**
     * @this MatchesService
     * @name getTeamMatches
     * @description get all matches for the giving team
     * @param {string} teamID - fifa code
     * @returns {HttpPromise}
     */
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
