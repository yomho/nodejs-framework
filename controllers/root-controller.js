exports.register = function (app) {
    app.namespace('/', function () {
        app.get('login', function (req, res) {
            //res.send('GET forum ' + req.params.id);
            res.render('login', { title:'login' });
        });

        // app.get('/edit', function (req, res) {
        //     res.send('GET forum ' + req.params.id + ' edit page');
        // });

        // app.namespace('/thread', function () {
        //     app.get('/:tid', function (req, res) {
        //         res.send('GET forum ' + req.params.id + ' thread ' + req.params.tid);
        //     });
        // });

        // app.del('/', function (req, res) {
        //     res.send('DELETE forum ' + req.params.id);
        // });
    });
};