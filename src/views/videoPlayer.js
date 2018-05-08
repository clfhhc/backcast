var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    //changed from 'select' to 'change:selected'
    this.collection.on('select', this.render, this);
  },

  render: function(model) {
    let selectedVideo = model || this.collection.models[0];
    console.log(selectedVideo.attributes);
    this.$el.html(this.template(selectedVideo.attributes));
    return this.$el;
  },
  
  //change selected this.collection.models[?].attributes on a select event

  template: templateURL('src/templates/videoPlayer.html')

});
