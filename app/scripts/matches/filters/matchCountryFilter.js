'use strict';

function matchCountryFilter() {
  /**
   * @doc method
   * @description show shortest country name
   * @params {Object} country
   * @return {string}
   */
  return function (country) {
    return country.country.indexOf(' ') === -1 ? country.country : country.code;
  };
}


module.exports = matchCountryFilter;
