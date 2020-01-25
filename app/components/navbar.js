import Component from '@ember/component';

export default Component.extend({
  pages: null,
  init() {
    this._super(...arguments);
    this.set('pages', [
      // {
      //   path: "index",
      //   label: "Home",
      // }, /* {
      //   path: "about",
      //   label: "About",
      // }, */ {
      //   path: "experience",
      //   label: "Experience",
      // }, /* {
      //   path: "projects",
      //   label: "Projects",
      // }, */ /* {
      //   path: "blogs",
      //   label: "Blog",
      // }, */ {
      //   path: "contact",
      //   label: "Contact",
      // }
    ]);
  }
});
