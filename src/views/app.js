var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = this.collection || new Videos();
    this.render();
    this.on('select', function(model) {
      this.videoPlayerView.render(model);
    }, this);
  },


  render: function() {
    this.$el.html(this.template());
    //new variable for each of the views
    let searchView = new SearchView();
    this.$el.find('.search').append(searchView.render());
    
    let videoPlayerView = new VideoPlayerView({collection: this.videos});
    this.$el.find('.player').append(videoPlayerView.render());
    
    let videoListView = new VideoListView({collection: this.videos});
    this.$el.find('.list').append(videoListView.render());
    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});
