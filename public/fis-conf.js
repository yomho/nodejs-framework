//<2>fis3 release -d ../dist/public
// 所有的文件产出到 static/ 目录下
// fis.match('public/**/*', {
//     release: '/public/$0'
// });
// 所有模板放到 tempalte 目录下

// 启用插件npm install -g fis3-hook-relative
// fis.hook('relative');
// fis.match('*', {
//     //relative: "/public",
//     //url:"/public/"//,
//     //release: '/public/$0'
// });
fis.match('*.css', {
    useHash: true
});
fis.match('resource/**/*.css', {
    useHash: false
});
// 所有模板放到 tempalte 目录下
fis.match('*.js', {
    useHash: false
});
// 所有模板放到 tempalte 目录下
fis.match('*.html', {
    useHash: false
});
fis.match('*.png', {
   useHash: true
});
// // optimize
// fis.media('prod')
//     .match('*.js', {
//         optimizer: fis.plugin('uglify-js', {
//             mangle: {
//                 expect: ['require', 'define', 'some string'] //不想被压的
//             }
//         })
//     })
//     .match('*.css', {
//         optimizer: fis.plugin('clean-css', {
//             'keepBreaks': true //保持一个规则一个换行
//         })
//     });

// // pack
// fis.media('prod')
//     // 启用打包插件，必须匹配 ::package
//     .match('::package', {
//         packager: fis.plugin('map'),
//         spriter: fis.plugin('csssprites', {
//             layout: 'matrix',
//             margin: '15'
//         })
//     })
//     .match('*.js', {
//         packTo: '/static/all_others.js'
//     })
//     .match('*.css', {
//         packTo: '/staitc/all_others.css'
//     })
//     .match('/widget/**/*.js', {
//         packTo: '/static/all_comp.js'
//     })
//     .match('/widget/**/*.css', {
//         packTo: '/static/all_comp.css'
//     });
