'use strict';

describe('Component: sidemenu', function() {
  // load the component's module
  beforeEach(module('codingBlindApp.sidemenu'));

  var sidemenuComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    sidemenuComponent = $componentController('sidemenu', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
