export function initialize(application) {
  application.inject('route', 'anime-data-link', 'service:anime-data-link');
}

export default {
  name: 'anime-data-link',
  initialize
};
