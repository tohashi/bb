define(['collection', 'model', 'view'], function(Collection, Model, View) {
    var MainRouter = Backbone.Router.extend({
        routes: {
            '': 'index'
        },

        index: function() {
            var tasks = new Collection.Tasks;
            var taskFormView = new View.TaskForm({
                el: $('#task-form'),
                collection: tasks
            });
        }
    });

    return {
        Main: MainRouter
    }
});
