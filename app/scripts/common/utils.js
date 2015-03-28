'use strict';

var
  _ = require('_'),
  moment = require('moment'),
  config = require('../config/app.json'),
  keyCodes = config.keyCodes;

module.exports = {
  /**
   * @param {Object} obj
   * @return {boolean}
   */
  isEmptyObject: function isEmptyObject(obj) {
    if (Object.keys) {
      return !Object.keys(obj).length;
    }
    var key;
    for (key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
    return true;
  },
  emptyLinkFunction: function emptyLinkFunction(scope, element) {
    scope.$on('$destroy', function () {
      element.find('*').off();
      element.off().empty().remove();
      element = null;
    });
  },
  isInt: function isInt(number) {
    return number % 1 === 0;
  },
  dataTableDirectivesLink: function (scope, element) {
    var
      $iView = $('.iView'),
      prevScrollTop = 0,
      $toolbar = element.find('.iListToolbar'),
      toolBarHeight = $toolbar.height(),
      $dataHeader = element.find('.iDataHeader');

    function onWindowScroll() {
      if (!$dataHeader[0]) {
        $dataHeader = element.find('.iDataHeader');
      }
      var
        scrollTop = $iView.scrollTop(),
        top = scrollTop - toolBarHeight,
        isToggle = scrollTop > toolBarHeight;

      if (scrollTop > prevScrollTop) {
        top += $dataHeader.outerHeight();
      }
      prevScrollTop = scrollTop;
      $dataHeader
        .toggleClass('fixed', isToggle)
        .animate({
          top: top
        }, 100);
    }

    var _onWindowScroll = _.debounce(onWindowScroll, 200, {
      maxWait: 500
    });
    $iView.on('scroll', _onWindowScroll);

    scope.$on('$destroy', function () {
      $iView.off('scroll', _onWindowScroll);
    });
  },
  filtersDirectivesLink: function (scope, element, attrs, parentCtrl) {

    var
      $iView = $('.iView'),
      $document = $(document);

    scope.$watch(function () {
      return element[0].classList.length;
    }, function () {
      var isFilterClosed = element[0].classList.contains('md-closed');
      $iView.css({
        overflow: isFilterClosed ? 'auto': 'hidden',
        height: isFilterClosed ? '100%' : 'auto'
      });
    });

    function keyPressHandler(event) {
      if (event.keyCode === keyCodes.enter && !element[0].classList.contains('md-closed')) {
        scope[this.controllerAs].closeFilter();
        return applyFilters();
      }
    }
    var keyPress = keyPressHandler.bind(this);


    var applyFilters = function () {
      parentCtrl.setFilters(scope[this.controllerAs].filter);
    }.bind(this);


    element.on('click', '.iFilterActions button[type=submit]', applyFilters);

    element.on('submit', 'form', applyFilters);

    $document.on('keydown', keyPress);

    scope.$on('$destroy', function () {
      element.off('click', '.iFilterActions button');
      element.off('submit', 'form');
      element.empty();
      $document.off('keydown', keyPress);
    });

    applyFilters();
  },
  addClassToElement: function addClassToElement(element, className) {
    if (element) {
      if (element.classList) {
        element.classList.add(className);
      } else {
        element.className += ' ' + className;
      }
    }
  },
  normalizeFilterDate: function normalizeFilterDate(date) {
    var d = {};
    if (date.from) {
      d.from = moment(date.from).startOf('day').toISOString();
    }
    if (date.to) {
      d.to = moment(date.to).endOf('day').toISOString();
    }
    return d;
  }
};
