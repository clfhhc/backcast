var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    this.collection.on('sync', this.render, this);
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    //add forEach loop to iterate over each model in the collection
    this.collection.models.forEach(this.renderVideoListEntry, this);
    return this.$el;
  },
  //helper function to instantiate a new VideoListEntryView
  renderVideoListEntry: function(video) {
    let videoListEntry = new VideoListEntryView({model: video});
    this.$el.append(videoListEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});
