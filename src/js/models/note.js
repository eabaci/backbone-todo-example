var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var Note = Backbone.Model.extend({
  urlRoot: 'https://jsonplaceholder.typicode.com/todos',
  defaults: {
    title: 'Title',
    id: 0,
    completed: false
  },

  toggle: function() {
    this.set('completed', !this.get('completed'));
  }
});

module.exports = Note;
