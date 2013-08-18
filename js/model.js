define(['Backbone'], function(Backbone) {
    var IndexModel = Backbone.Model.extend({
        defaults: {
            templateValues: {
                title: 'index',
                desctiption: 'this is index page'
            }
        },

        initialize: function() {
        }
    });

    return {
        Index: IndexModel
    }
});

