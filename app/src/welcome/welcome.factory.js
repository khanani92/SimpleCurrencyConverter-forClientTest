/**
 * @ngdoc service
 * @name app.welcome.welcome
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.welcome')
		.factory('welcome', welcome);

  /* @ngInject */
  function welcome(dataservice){
		return {
			getCorversion: getCorversion
		};

		////////////////////

    /**
     * @ngdoc
     * @name app.welcome.welcome#testFunction
     * @methodOf app.welcome.welcome
     *
     * @description < description placeholder >
     * @example
     * <pre>
     * welcome.testFunction(id);
     * </pre>
     * @param {int} entity id
     */

		function getCorversion(base, to, amount){
			return dataservice.getCorversion(base, to)
            .then(function(response){
          console.log(response)
          return response.rates[to] * amount;
         //console.log(response.data.rates[vm.currencyTo] * vm.currencyAmount)
      });
		}
	}

}());
