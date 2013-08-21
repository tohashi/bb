define(['Backbone'], function(Backbone) {
    var Task = Backbone.Model.extend({
        defaults: {
            title: "empty task..."
            order: tasks.nextOrder(),
            done: false
        },
        toggle: function() {
        }
    });

    return {
        Task: Task
    }
});

