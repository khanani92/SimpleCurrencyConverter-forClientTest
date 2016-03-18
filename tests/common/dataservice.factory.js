(function(){

  /* global module, inject */

  'use strict';

  describe('Factory: dataservice', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.common'));

    var dataservice;

    beforeEach(inject(function($injector){

      dataservice = $injector.get('dataservice');

    }));


  });
}());
