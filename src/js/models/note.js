var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var Note = Backbone.Model.extend({
  urlRoot: 'app/songs',
  defaults: {
    title: 'Title',
    id: 0,
    active: false
  }
});

module.exports = Note;
