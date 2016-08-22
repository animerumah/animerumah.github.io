import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(params) {
    return RSVP.hash({
      anime: this.get('anime-data').findRecord(params.anime_title),
      link: this.get('anime-data-link').findRecord(params.anime_title)
    });
  }
});
