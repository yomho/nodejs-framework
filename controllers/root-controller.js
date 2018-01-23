exports.register = function (app) {
    app.namespace('/', function () {
        var cookieHelper = require('../utils/cookie.js');
        app.get('login', function (req, res) {
            //res.send('GET forum ' + req.params.id);
            cookieHelper.signedCookie.set(res, 'currentUser', '123');
            cookieHelper.cookie.set(res, 'currentUserUnsignd', 'ABC');
            res.render('login', { title: 'login' + '-' + cookieHelper.signedCookie.get(req, 'currentUser') + '*' + cookieHelper.cookie.get(req, 'currentUserUnsignd') });
        });
        app.get('logout', function (req, res) {
            cookieHelper.clearCookie(res, 'currentUser');
            cookieHelper.clearCookie(res, 'currentUserUnsignd');
            res.render('login', { title: 'logout' });
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