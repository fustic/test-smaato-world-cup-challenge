'use strict';

var
  _ = require('_');

teamsService.$inject = ['$q', 'Smaato.Config', '$http', 'MatchesService'];

/**
 * @class
 * @name TeamsService
 */
function teamsService($q, Config, $http) {

  var teamsServiceObject = {
    getTeams: function getTeams() {
      return $http.get(Config.api.url + Config.api.endPoints.teams, {
        cache: true
      });
    },
    getTeamsResults: function getTeamsResults() {
      return $http.get(Config.api.url + Config.api.endPoints.teamsResults, {
        cache: true
      });
    },
    getTeam: function getTeam(teamID) {
      var
        deferred = $q.defer();

      teamsServiceObject.getTeamsResults().then(function success(response) {
        var
          team = _.filter(response.data, {'fifa_code': teamID})[0];
        if (team) {
          return deferred.resolve(team);
        }
        return deferred.reject();
      }, function error(err) {
        deferred.reject(err);
      });

      return deferred.promise;
    }
  };

  return teamsServiceObject;
}

module.exports = teamsService;
