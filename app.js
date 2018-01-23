var express = require('express');
var swig = require('swig');
require('express-namespace');
var routes = require('./routes');
var config = require('./config.json');
var app = express();
swig.setDefaults({
    allowErrors: false,//默认值为 false。将所有模板解析和编译错误直接输出到模板。如果为 true，则将引发错误，抛出到 Node.js 进程中，可能会使您的应用程序崩溃。
    autoescape: true,/*默认true，强烈建议保持。字符转换表请参阅转义过滤器。•true: HTML安全转义
                    •false: 不转义，除非使用转义过滤器或者转义标签
                    •'js': js安全转义
                    */
    cache: 'memory',//更改为 false 将重新编译每个请求的模板的文件。正式环境建议保持true。
    encoding: 'utf8',//模板文件编码
    filters: {},//自定义过滤器或者重写默认过滤器，参见自定义过滤器指南。
    root: '/',//需要搜索模板的目录。如果模板传递给 swig.compileFile 绝对路径(以/开头)，Swig不会在模板root中搜索。如果传递一个数组，使用第一个匹配成功的数组项。
    tags: {},//自定义标签或者重写默认标签，参见自定义标签指南。
    extensions: {},//添加第三方库，可以在编译模板时使用，参见参见自定义标签指南。
    tzOffset: 0,//设置默认时区偏移量。此设置会使转换日期过滤器会自动的修正相应时区偏移量。
    locals: {
        now: function () {
            return new Date();
        },
        config: config
    }
});
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.set('port',process.env.PORT || 3000);
//app.use(connect.compress);
app.use(express.static(__dirname + '/public'));
/*switch(app.get('env')){
    case 'development':
        // 紧凑的、 彩色的开发日志
        app.use(require('morgan')('dev'));
        break;
    case 'production':
        // 模块 'express-logger' 支持按日志循环
        app.use(require('express-logger')({
            path: __dirname + '/log/requests.log'
        }));
        break;
}*/
//app.get('/login',routes.login);
routes.register(app);
app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

app.listen(app.get('port'), function(){
    console.log( 'Express started on http://localhost:'
    +app.get('port')
    + '; press Ctrl-C to terminate.');
});