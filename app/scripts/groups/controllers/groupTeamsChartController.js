'use strict';

groupTeamsChartController.$inject = [
  '$scope'
];

/**
 * @class GroupTeamsChartController
 */
function groupTeamsChartController($scope) {
  this.chart = {
    type: 'PieChart',
    options: {
      title: 'Pie chart dividing the points of each team',
      is3D: true
    },
    data: {
      cols: [
        {
          id: 'title',
          label: 'Team',
          type: 'string'
        },
        {
          id: 'points',
          label: 'Points',
          type: 'number'
        }
      ],
      rows: []
    }
  };
  var
    team,
    teams = $scope.teams,
    teamsLen = teams.length;

  while (teamsLen--) {
    team = teams[teamsLen].team;
    this.chart.data.rows.push({
      c: [
        {
          v: team.country
        },
        {
          v: team.points === 0 ? 0.1 : team.points
        }
      ]
    });
  }

}

module.exports = groupTeamsChartController;
