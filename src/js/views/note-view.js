var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

var NoteView = Backbone.View.extend({
  className: 'noteview',

  events: {
    click: 'toggleNote'
  },

  toggleNote: function() {
    if (!this.model.get('active')) {
      this.model.set('active', true);
      this.$el.addClass('active');
    } else {
      this.model.set('active', false);
      this.$el.removeClass('active');
    }
  },

  initialize: function(ops) {
    this.template = _.template($('#noteViewTemplate').html());
    this.html = this.template(this.model.toJSON());
  },
  render: function() {
    this.$el.html(this.html);
    if (this.model.get('active')) this.$el.addClass('active');

    return this;
  }
});

module.exports = NoteView;
