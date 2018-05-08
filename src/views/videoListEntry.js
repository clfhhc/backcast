var VideoListEntryView = Backbone.View.extend({
  
  initialize: function() {
    this.on('click', this.model.select, this);
  },
  events: {
    'click .video-list-entry-title': 'handleClick'
  },
  render: function() {
    console.log(this.model.attributes);
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },
  
  handleClick: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
