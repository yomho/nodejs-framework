//<1>fis3 release -d ./dist
//<2>fis3 release -d ./dist/public -r ./public
// 所有的文件产出到 static/ 目录下
// fis.match('public/**/*', {
//     release: '/public/$0'
// });
// 所有模板放到 tempalte 目录下

// 启用插件npm install -g fis3-hook-relative
// fis.hook('relative');
// fis.match('public/**/*', {
//     relative: "/public",
//     url:"$0"
// });
// fis.match('public/**/*.css', {
//     useHash: true
// });
// fis.match('public/resource/**/*.css', {
//     useHash: false
// });
// // 所有模板放到 tempalte 目录下
// fis.match('public/**/*.js', {
//     useHash: false
// });
// // 所有模板放到 tempalte 目录下
// fis.match('public/**/*.html', {
//     useHash: true
// });
// fis.match('public/**/*.png', {
//    useHash: true
// });
fis.set('project.ignore', ['node_modules/**', 'output/**','public/**','dist/**', 'fis-conf.js']); // set 为覆盖不是叠加
fis.match('*', {
    useCompile: false
});
// fis.match('view/**/*', {
//     useCompile: true
// });
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
