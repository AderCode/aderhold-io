import Route from '@ember/routing/route';
import HeadTagsGenerator from '../constants/meta-tags';

export default Route.extend({
  afterModel() {

    //* Setup Meta Tags
    const headTags = HeadTagsGenerator();
    this.set('headTags', headTags);
  },

  setupController(controller) {
    //* Setup Page Title
    controller.set('routeTitle', 'Home')
  }

});
