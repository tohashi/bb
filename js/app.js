(function(window, undefined) {

    document.addEventListener('DOMContentLoaded', function() {
        var mainRouter = new MainRouter();
        Backbone.history.start({
            pushState: true
        });
    });

})(this.self || global);
