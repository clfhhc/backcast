var SearchView = Backbone.View.extend({

  events: {
    'click button': 'handleSearch',
    'keypress': 'keyAction'
  },

  render: function() {
    this.$el.html(this.template());
    return this.$el;
  },
  
  handleSearch: function() {
    let query = $('.form-control').val();
    this.trigger('search', query);
  },
  
  keyAction: function(e) {
    if (e.which === 13) {
      this.handleSearch();
    }
  },

  template: templateURL('src/templates/search.html')

});
