/* eslint-disable */

// composed path polyfill;
export default (function(E, d, w) {
  if (!E.composedPath) {
    E.composedPath = function() {
      if (this.path) {
        return this.path;
      }

      let target = this.target;
      this.path = [];

      while (target.parentNode !== null) {
        this.path.push(target);
        target = target.parentNode;
      }

      this.path.push(d, w);
      return this.path;
    };
  }
}(Event.prototype, document, window));
