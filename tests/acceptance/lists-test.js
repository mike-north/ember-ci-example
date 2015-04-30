import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'testme/tests/helpers/start-app';

var application;

module('Acceptance: Lists', {
  beforeEach() {
    application = startApp();
  },

  afterEach() {
    Ember.run(application, 'destroy');
  }
});

test('Drilling into a shopping list from the index page', assert => {
  visit('/lists');

  andThen(() => {
    assert.equal(currentURL(), '/lists', 'Should be at the index page');
    assert.equal(find('.list-of-lists .list-item').length, 2, 'Two shopping lists are in the index');
  });

  click('.list-of-lists .list-item:nth-child(1)');

  andThen(() => {
    assert.equal(currentURL(), '/list/1', 'Showing the first shopping list');
  });
});
