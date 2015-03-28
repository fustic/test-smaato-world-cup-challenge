'use strict';

module.exports = ['$mdSidenav', function ($mdSidenav) {
  return {
    restrict: 'E',
    templateUrl: '/scripts/smaato/views/sidenavCloseButton.html',
    link: function (scope, element) {
      element.on('click', function () {
        var
          parent = element.parent(),
          parentNative = parent[0];

        while (parentNative.nodeName.toLowerCase() !== 'md-sidenav') {
          parent = parent.parent();
          parentNative = parent[0];
        }
        $mdSidenav(parent.attr('md-component-id')).close();
      });
      scope.$on('$destroy', function () {
        element.off('').remove();
      });
    }
  };
}];
