var BaseView = Backbone.View.extend({
    initialize: function() {
        this.render();
    },
    render: function() {
        var template = Handlebars.compile($('#indexTemplate').html());
        $('body').html(template(this.model.templateValues));
    }
});
