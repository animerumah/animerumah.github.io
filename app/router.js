import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('anime', {path: '/anime/:anime_title'});
  this.route('page', {path: '/page/:page_number'});
});

export default Router;
