var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var Notes = require('../collections/notes');

var Router = Backbone.Router.extend({
  routes: {
    all: 'allNotes',
    completed: 'completedNotes',
    notcompleted: 'notCompletedNotes'
  },

  initialize: function(ops) {
    this.model = ops.model;
    this.notesView = ops.notesView;
  },

  allNotes: function() {
    this.notesView.update(this.model);
  },
  completedNotes: function() {
    var notes = this.model.filter(noteModel => noteModel.get('completed'));
    this.notesView.update(new Notes(notes));
  },
  notCompletedNotes: function() {
    var notes = this.model.filter(noteModel => !noteModel.get('completed'));
    this.notesView.update(new Notes(notes));
  }
});

module.exports = Router;
