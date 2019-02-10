import 'bootstrap/dist/css/bootstrap.min.css';
var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var StartView = require('./views/start-view');
var Note = require('./models/note');
var Notes = require('./collections/notes');
var NotesView = require('./views/notes-view');
var NavView = require('./views/nav-view');
var Router = require('./routers/router');

Backbone.$(function() {
  var notes = new Notes();

  var notesView = new NotesView({ model: notes });
  notesView.render();

  var router = new Router({ model: notes, notesView: notesView });
  Backbone.history.start();

  var startView = new StartView({ model: notes });
  startView.render();

  var navView = new NavView({ router: router });
  navView.render();
});
