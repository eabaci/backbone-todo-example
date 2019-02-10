var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var Note = require('../models/note');

var Notes = Backbone.Collection.extend({
  model: Note,
  url: 'api/notes'
});

module.exports = Notes;
