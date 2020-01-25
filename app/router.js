import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('about');
  this.route('experience');
  this.route('contact');
  this.route('projects');
  this.route('blogs', { path: "/blog" });
  this.route('blog', { path: "blog/:blog_id" });
  this.route('404', { path: "/*path" })
});
