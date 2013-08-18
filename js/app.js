requirejs.config({
    baseUrl: 'js/',
    paths: {
        '$': 'libs/jquery/jquery',
        '_': 'libs/lodash/lodash',
        'Backbone': 'libs/backbone/backbone',
        'Hogan': 'libs/hogan/web/builds/2.0.0/hogan-2.0.0.amd',
        'T': '/templates/compiled'
    },
    shim: {
        'Backbone': {
            deps: ['$', '_'],
            exports: 'Backbone'
        },
        'T': {
            deps: ['Hogan'],
            exports: 'T'
        }
    }
});


require(['router'], function(Router) {
    var mainRouter = new Router.Main();
    Backbone.history.start({
        pushState: true
    });
});
