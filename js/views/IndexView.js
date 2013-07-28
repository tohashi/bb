var IndexView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },

    render: function() {
        var template = Hogan.compile($('#indexTemplate').html());
        this.$el.html(template.render(this.model.get('templateValues')));
    }
});
