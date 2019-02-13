var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var Note = require('../models/note');
var startViewTemplate = require('../templates/start-view-template.html');

var StartView = Backbone.View.extend({
  el: '#startView',
  events: {
    'click button': 'addTodo'
  },
  template: _.template(startViewTemplate),
  initialize: function(ops) {
    this.html = this.template();
    this.counter = 0;
  },
  render: function() {
    this.$el.html(this.html);
    return this;
  },
  addTodo: function() {
    var title = this.$el.find('input').val();
    this.$el.find('input').val('');
    this.model.add(
      new Note({ title: title, id: this.counter, completed: false })
    );
    this.counter++;
  }
});

module.exports = StartView;
