var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',
  
  search: function(query) {
    this.fetch({
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        embeddable: 'true'
      }
    });
  },
  
  parse: function(data) {
    return data.items;
  }
  //add search function (fetch data from youtube API)
  //receives data object
  //query - string to search for
  //maxResults: 5
  //collection set to 5 models
  //key - YOUTUBE_API_KEY
  // --> only fetch embeddable videos
});
