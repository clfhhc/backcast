var SearchView = Backbone.View.extend({

  events: {
    'click button': 'handleSearch'
  },

  render: function() {
    this.$el.html(this.template());
    return this.$el;
  },
  
  handleSearch: function() {
    let query = $('.form-control').val();
    this.trigger('search', query);
  },

  template: templateURL('src/templates/search.html')

});
