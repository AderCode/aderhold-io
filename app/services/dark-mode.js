import Service from '@ember/service';

export default Service.extend({
  isActive: false,
  isTrueBlack: false,

  activate() {
    this.set('isActive', true);
  },
  deactivate() {
    this.set('isActive', false);
    this.set('isTrueBlack', false);
  },
  toggleTrueBlack() {
    if(this.isTrueBlack) {
      this.set('isTrueBlack', false);
    } else if (!this.isActive) {
      this.set('isActive', true);
      this.set('isTrueBlack', true)
    } else {
      this.set('isTrueBlack', true);
    }
  }

});
