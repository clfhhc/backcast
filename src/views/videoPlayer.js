var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    //changed from 'select' to 'change:selected'
    (this.collection) && (this.collection.on('select', this.render, this));
  },

  render: function(model) {
    let selectedVideo = model || (this.collection && this.collection.models[0]) || null;
    this.$el.html(this.template(selectedVideo && selectedVideo.attributes));
    return this.$el;
  },
  
  //change selected this.collection.models[?].attributes on a select event

  template: templateURL('src/templates/videoPlayer.html')

});
