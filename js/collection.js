define(['Backbone', 'model'], function(Backbone, Model) {
    var Tasks = Backbone.Collection.extend({
        model: Model.Task,
        done: function() {
            return this.where({done: true});
        },
        remaining: function() {
            return this.without.call(this, this.done());
        },
        nextOrder: function() {
            return !this.length ? 1 : this.last().get('order') + 1;
        },
        comparator: 'order'
    });

    return {
        Tasks: Tasks
    }
});
