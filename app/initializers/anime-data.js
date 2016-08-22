export function initialize(application) {
  application.inject('route', 'anime-data', 'service:anime-data');
}

export default {
  name: 'anime-data',
  initialize: initialize
};
