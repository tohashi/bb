define(['Backbone', 'T'], function(Backbone, T) {
    var IndexView = Backbone.View.extend({
        initialize: function() {
            this.render();
        },

        render: function() {
            this.$el.html(T.index.render(this.model.get('templateValues')));
        }
    });

    return {
        Index: IndexView
    }
});

