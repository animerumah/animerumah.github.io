import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('anime-data').findPage(params.page_number);
  }
});
