define(['Backbone', 'T'], function(Backbone, T) {
    var TaskView = Backbone.View.extend({

        tagName: 'li',

        template: T.task,

        events: {
            'click .toggle': 'toggleDone',
            'dbclick .view': 'edit',
            'click a.destroy': 'clear',
            'keypress .edit': 'updateOnEnter',
            'blur .edit': 'close'
        },

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
        },

        render: function() {
            this.$el.html(this.template.render(this.model.toJSON()));
            this.$el.toggleClass('done', this.model.get('done'));
            this.input = this.$('.edit');
            return this;
        },

        toggleDone: function() {
            this.model.toggle();
        },

        edit: function() {
            this.$el.addClass('editing');
            this.input.focus();
        },

        close: function() {
            var value = this.input.val();
            if (!value) {
                return this.clear();
            }
            this.model.save({title: value});
            this.$el.removeClass('editing');
        },

        updateOnEnter: function(e) {
            e.keyCode == 13 && this.close();
        },

        clear: function() {
            this.model.destroy();
        }
    });

    return {
        Task: TaskView
    }
});

