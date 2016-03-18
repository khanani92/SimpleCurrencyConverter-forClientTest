/**
 * @ngdoc controller
 * @name app.welcome.controller:Welcome
 * @description Welcome controller which typically is useless and you are going to delete it
 */

(function(){

  'use strict';

  angular.module('app.welcome')
    .controller('Welcome', Welcome);

  /* @ngInject */
  function Welcome(welcome, dataservice){
    var vm = this;

    vm.welcomeMessage = 'ZE GENGO !';
    vm.convert = convert;

    /////////////////////

    /**
     * @ngdoc method
     * @name testFunction
     * @param {number} num number is the number of the number
     * @methodOf app.welcome.controller:Welcome
     * @description
     * My Description rules
     */

    function convert(){
      welcome.getCorversion(vm.currencyFrom, vm.currencyTo, vm.currencyAmount).then(function(response){
        vm.conversionMessage = vm.currencyAmount + ' ' + vm.currencyFrom + ' is equal to ' + response + vm.currencyTo;
      });
    }
    vm.currencySymbols = ['AUD', 'BGN', 'BRL', 'CAD', 'CHF', 'CNY', 'CZK', 'DKK', 'GBP', 'HKD', 'HRK', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PLN', 'RON', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'USD', 'ZAR'];

  }

}());
