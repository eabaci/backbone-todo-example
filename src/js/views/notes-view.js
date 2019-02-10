var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var NoteView = require('./note-view');

var NotesView = Backbone.View.extend({
  el: '#notesView',

  initialize: function(ops) {
    this.model = ops.model;
    this.model.on('add', this.addNote, this);
  },

  addNote: function(noteModel) {
    var noteView = new NoteView({ model: noteModel });
    this.$el.append(noteView.render().$el);
  },

  update(model) {
    this.model = model;
    this.render();
  },

  render: function() {
    var self = this;
    self.$el.empty();
    self.model.each(function(noteModel) {
      var noteView = new NoteView({ model: noteModel });
      self.$el.append(noteView.render().$el);
    });
    return self;
  }
});

module.exports = NotesView;
