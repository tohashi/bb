var IndexView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },

    render: function() {
        var template = Handlebars.compile($('#indexTemplate').html());
        this.$el.html(template(this.model.get('templateValues')));
    }
});
