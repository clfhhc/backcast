var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = this.collection || new Videos();
    this.videos.search('dog');
    this.render();
    this.on('select', function(model) {
      this.videoPlayerView.render(model);
    }, this);
    this.listenTo(this.searchView, 'search', function(query) {
      // console.log(1);
      // let query = $('.form-control').val();
      // console.log('In App View', query);
      this.videos.search(query);
    }, this);
  },


  render: function() {
    this.$el.html(this.template());
    //new variable for each of the views
    this.searchView = new SearchView();
    this.$el.find('.search').append(this.searchView.render());
    
    this.videoPlayerView = new VideoPlayerView({collection: this.videos});
    this.$el.find('.player').append(this.videoPlayerView.render());
    
    this.videoListView = new VideoListView({collection: this.videos});
    this.$el.find('.list').append(this.videoListView.render());
    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});
