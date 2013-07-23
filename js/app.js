(function(window, undefined) {

    function initialize() {
        var baseModel = new BaseModel();

        baseView = new BaseView({
            model: baseModel
        });
    }

    document.addEventListener('DOMContentLoaded', initialize);

})(this.self || global);
