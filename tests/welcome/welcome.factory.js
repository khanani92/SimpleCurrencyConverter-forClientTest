(function(){

  /* global module, inject */

  'use strict';

  describe('Factory: welcome', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.common'));
    beforeEach(module('app.welcome'));

    var welcome;
    var dataservice;
    var q;
    var hideDeferred;

    beforeEach(inject(function($injector){
      welcome = $injector.get('welcome');
      dataservice = $injector.get('dataservice');
      q = $injector.get('$q');
    }));
    hideDeferred = q.defer();
    spyOn(dataservice, 'hide').and.returnValue(hideDeferred.promise);
    it('should do nothing', function(){
      expect(true).toBe(false);
    });

  });
}());
