/**
 * @ngdoc service
 * @name app.common.dataservice
 * @description < description placeholder >
 */

(function(){

  'use strict';

	angular
		.module('app.common')
		.factory('dataservice', dataservice);

  /* @ngInject */
  function dataservice(Restangular){
		return {
			getCorversion: getCorversion
		};

		////////////////////

    /**
     * @ngdoc
     * @name app.common.dataservice#testFunction
     * @methodOf app.common.dataservice
     *
     * @description < description placeholder >
     * @example
     * <pre>
     * dataservice.testFunction(id);
     * </pre>
     * @param {int} entity id
     */

		function getCorversion(base, to){
      return Restangular.all('latest').customGET('', {base: base, symbols:to});
    }
	}

}());
