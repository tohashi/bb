define(['Backbone'], function(Backbone) {
    var Tasks = Backbone.Collection.extend({
        model: Task,
        done: function() {
            return this.where({done: true});
        },
        remaining: function() {
            return this.without.call(this, this.done());
        },
        nextOrder: function() {
            this.length || return 1;
            return this.last().get('order') + 1;
        },
        comparator: 'order'
    });

    return {
        Tasks: Tasks
    }
});
