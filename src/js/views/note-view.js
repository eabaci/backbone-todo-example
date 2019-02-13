var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var noteViewTemplate = require('../templates/note-view-template.html');

var NoteView = Backbone.View.extend({
  className: 'noteview',

  events: {
    click: 'toggleNote'
  },

  template: _.template(noteViewTemplate),

  toggleNote: function() {
    this.model.toggle();
    this.updateCompletedClass(this.model.get('completed'));
  },

  updateCompletedClass: function(completed) {
    this.$el.toggleClass('completed', completed);
  },

  initialize: function(ops) {
    this.html = this.template(this.model.toJSON());
  },
  render: function() {
    this.$el.html(this.html);
    this.updateCompletedClass(this.model.get('completed'));

    return this;
  }
});

module.exports = NoteView;
