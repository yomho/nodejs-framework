exports.register = function (app) {
    app.namespace('/admin/', function () {
        app.get('home', function (req, res) {
            res.render('admin/home');
        });
    });
};