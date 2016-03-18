(function(){

  /* global module, inject */

  'use strict';

  xdescribe('Controller: WelcomeCtrl', function(){

    beforeEach(module('app.core'));
    beforeEach(module('app.common'));
    beforeEach(module('app.welcome'));

    var vm;
    var scope;
    var welcome;

    beforeEach(inject(function($controller, $injector){
      scope = $injector.get('$rootScope');
      welcome = $injector.get('welcome');
      vm = $controller('Welcome', {
        welcome:welcome
        //add injectable services
      });

    }));
    console.log(vm);
    it('should do nothing', function (){

      expect(true).toBe(false);
    });

  });
}());

