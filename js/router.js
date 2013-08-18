define(['model', 'view'], function(Models, Views) {
    var MainRouter = Backbone.Router.extend({
        routes: {
            '': 'index',
            'login': 'login'
        },

        index: function() {
            var indexView = new Views.Index({
                el: $('#main-content'),
                model: new Models.Index
            });
        },

        login: function() {}
    });

    return {
        Main: MainRouter
    }
});
