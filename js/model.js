define(['Backbone'], function(Backbone) {
    var Task = Backbone.Model.extend({
        defaults: function() {
            return {
                title: 'empty task...',
                order: tasks.nextOrder(),
                done: false
            };
        },
        toggle: function() {
        }
    });

    return {
        Task: Task
    }
});

