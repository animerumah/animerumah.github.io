import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('anime-data').findPage(1);
  }
});
