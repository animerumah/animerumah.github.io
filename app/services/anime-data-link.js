import Ember from 'ember';

export default Ember.Service.extend({
  items: {},
  set: function(anime, link) {
    let self = this;

    self.items[anime] = link;
  },
  get: function(anime) {
    let self = this;

    return self.items[anime];
  },
  findRecord: function(anime) {
    let self = this;

    if(self.get(anime) === undefined) {
      return Ember.$.getJSON('https://raw.githubusercontent.com/animerumah/link/master/anime/'+anime+'.json').then(function(json){
        self.set(anime, json.data);
        return self.get(anime);
      });
    } else {
      return this.get(anime);
    }
  }
});
