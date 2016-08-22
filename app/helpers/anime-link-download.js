import Ember from 'ember';

export function animeLinkDownload([{episode: episode, link: link}]) {
  let result = `<a href='${link}' target='_blank'>Episode ${episode}</a>`;
  return Ember.String.htmlSafe(result);
}

export default Ember.Helper.helper(animeLinkDownload);
