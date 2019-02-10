var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var NavView = Backbone.View.extend({
  el: '#navView',
  events: {
    'click .nav-item': 'navView'
  },
  initialize: function(ops) {
    this.router = ops.router;
    this.template = _.template($('#navViewTemplate').html());
    this.html = this.template();
  },
  render: function() {
    this.$el.html(this.html);
    return this;
  },
  navView: function(e) {
    var url = $(e.target).attr('data-url');
    this.router.navigate(url, { trigger: true });
  }
});

module.exports = NavView;
