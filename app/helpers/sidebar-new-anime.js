import Ember from 'ember';

export default Ember.Helper.extend({
  animeData: Ember.inject.service(),
  onDataChange: Ember.observer('animeData.items', function() {
    this.recompute();
  }),
  compute() {
    
  }
});
