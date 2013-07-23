var MainRouter = Backbone.Router.extend({
    routes: {
        '': 'index',
        'login': 'login'
    },

    index: function() {
        var indexView = new IndexView({
            el: $('#main-content'),
            model: new IndexModel
        });
    },

    login: function() {}
});
