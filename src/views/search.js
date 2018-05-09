var SearchView = Backbone.View.extend({

  events: {
    'click .btn': 'handleSearch'
  },

  render: function() {
    this.$el.html(this.template());
    return this.$el;
  },
  
  handleSearch: function() {
    //console.log(2);
    let query = $('.form-control').val();
    this.trigger('search', query);
  },

  template: templateURL('src/templates/search.html')

});
