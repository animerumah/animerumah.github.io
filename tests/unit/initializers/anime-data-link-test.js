import Ember from 'ember';
import AnimeDataLinkInitializer from 'animerumah/initializers/anime-data-link';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | anime data link', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  AnimeDataLinkInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok(true);
});
