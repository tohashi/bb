requirejs.config({
    baseUrl: 'js/'
    paths: {
        'jquery': 'libs/jquery'
        'Backbone': 'libs/backbone'
    },
    shim: {
        'libs/lodash': {
          exports: '_'
        }
    }
});


require(['routes/main'], function(main) {
    document.addEventListener('DOMContentLoaded', function() {
        var mainRouter = new main.Router();
        Backbone.history.start({
            pushState: true
        });
    });
});
