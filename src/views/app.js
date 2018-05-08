var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    //new variable for each of the views
    let searchView = new SearchView();
    searchView.render();
    
    let videoPlayerView = new VideoPlayerView({collection: this.videos});
    videoPlayerView.render();
    
    let videoListView = new VideoListView({collection: this.videos});
    videoListView.render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
