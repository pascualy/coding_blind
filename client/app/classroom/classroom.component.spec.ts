'use strict';

describe('Component: ClassroomComponent', function() {
  // load the controller's module
  beforeEach(module('codingBlindApp.classroom'));

  var ClassroomComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ClassroomComponent = $componentController('classroom', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
