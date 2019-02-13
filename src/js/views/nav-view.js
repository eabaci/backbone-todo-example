var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var navViewTemplate = require('../templates/nav-view-template.html');

var NavView = Backbone.View.extend({
  el: '#navView',
  events: {
    'click .nav-item': 'navView'
  },
  template: _.template(navViewTemplate),
  initialize: function(ops) {
    this.router = ops.router;
  },
  render: function() {
    this.$el.html(this.template());
    return this;
  },
  navView: function(e) {
    var url = $(e.target).attr('data-url');
    this.router.navigate(url, { trigger: true });
  }
});

module.exports = NavView;
