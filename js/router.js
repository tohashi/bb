define(['collection', 'view'], function(Collection, View) {
    var MainRouter = Backbone.Router.extend({
        routes: {
            '': 'index'
        },

        index: function() {
            var Tasks = new Collection.Tasks;
var AppView = Backbone.View.extend({

        el: $('#taskapp'),

        statsTemplate: T.stats,

        evnts: {
            'keypress #new-task': 'createOnEnter',
            'click #clear-completed': 'clearCompleted',
            'click #toggle-all': 'toggleAllComplete'
        },

        initialize: function(options) {
            this.input = this.$('#new-task');
            this.allCheckbox = this.$('#toggle-all')[0];

            this.listenTo(Tasks, 'add', this.addOne);
            this.listenTo(Tasks, 'reset', this.addAll);
            this.listenTo(Tasks, 'all', this.render);

            this.footer = this.$('footer');
            this.main =  $('#main');

            Tasks.fetch();
        },

        render: function() {
            var done = Tasks.done().length;
            var remainning = Tasks.remaining().length;

            if (Tasks.length) {
                this.main.show();
                this.footer.show();
                this.footer.html(this.template.render({
                    done: done,
                    remaining: remaining
                }));
            } else {
                this.main.hide();
                this.footer.hide();
            }

            this.allCheckbox.checked = !ramaining;
        },

        addOne: function(task) {
            var view = new TaskView({model: task});
        },

        addAll: function() {
            Tasks.each(this.addOne, this);
        },

        createOnEnter: function() {
            if (e.keyCode != 13 || !this.input.val()) {
                return;
            }

            Tasks.create({title: this.input.val()});
            this.input.val('');
        },

        clearCompleted: function() {
            _.invoke(Tasks.done(), 'destroy');
            return false;
        },

        toggleAllComplete: function() {
            var done = this.allCheckbox.checked;
            Tasks.each(function(task) {
                todo.save({'done': done});
            });
        }

    });



        }
    });

    return {
        Main: MainRouter
    }
});
