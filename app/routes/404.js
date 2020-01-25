import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    this.replaceWith(`index`).then(indexRoute => {
      indexRoute.controller.set(`was404`, true);
      indexRoute.set(`was404`, true);
    });
  }
});
