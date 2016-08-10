/**
 * @html:middlewares
 */
var router = require('express').Router(); // 新建一个 router
router.get('/middlewares', function(req, res) {
    res.render('middleware-list', {
        title: '中间件列表',
        list: [{
            name: 'astros-asset-parse',
            // 描述
            des: '根据请求路径，解析资源类型',
            npm: 'https://www.npmjs.com/package/astros-asset-parse',
            version:'1.0.2',
            tags: '映射、解析'.split('、'),
            //热度
            hot: 2589
        }, {
            name: 'astros-resource-refer',
            npm: 'https://www.npmjs.com/package/astros-resource-refer',
            version:'1.0.7',
            tags: '资源引用'.split('、'),
            hot: 2589,
            des: ' 分析依赖资源'
        }, {
            name: 'astros-2ximg',
            npm: 'https://www.npmjs.com/package/astros-2ximg',
            version:'1.0.3',
            tags: '图片、二倍图'.split('、'),
            hot: 2589,
            des: '图片'
        }, {
            name: 'astros-webcom-refer',
            npm: 'https://www.npmjs.com/package/astros-webcom-refer',
            version:'1.0.0',
            tags: 'web组件'.split('、'),
            hot: 2589,
            des: '    '
        }, {
            name: 'astros-cmd-dep',
            npm: 'https://www.npmjs.com/package/astros-cmd-dep',
            version:'1.0.3',
            tags: 'CMD、同步加载'.split('、'),
            hot: 2589,
            des: ' '
        }, {
            name: 'astros-cmd-read',
            npm: 'https://www.npmjs.com/package/astros-cmd-read',
            version:'1.0.1',
            tags: 'CMD、同步加载'.split('、'),
            hot: 2589,
            des: ' '
        }, {
            name: 'astros-js-dep',
            npm: 'https://www.npmjs.com/package/astros-js-dep',
            version:'1.0.2',
            tags: 'JS、依赖'.split('、'),
            hot: 2589,
            des: '    '
        }, {
            name: 'astros-js-process',
            npm: 'https://www.npmjs.com/package/astros-js-process',
            version:'1.0.1',
            tags: 'JS、合并'.split('、'),
            hot: 2589,
            des: '    '
        }, {
            name: 'astros-cmd-define',
            npm: 'https://www.npmjs.com/package/astros-cmd-define',
            version:'1.0.2',
            tags: 'CMD、同步加载'.split('、'),
            hot: 2589,
            des: ' '
        }, {
            name: 'astros-js-minify',
            npm: 'https://www.npmjs.com/package/astros-js-minify',
            version:'1.0.4',
            tags: 'JS、压缩、混淆'.split('、'),
            hot: 2589,
            des: ' '
        }, {
            name: 'astros-css-less2',
            npm: 'https://www.npmjs.com/package/astros-css-less2',
            version:'1.0.3',
            tags: '样式、LESS'.split('、'),
            hot: 2589,
            des: '  '
        }, {
            name: 'astros-css-sprite',
            npm: 'https://www.npmjs.com/package/astros-css-sprite',
            version:'1.0.3',
            tags: '图片、雪碧图'.split('、'),
            hot: 2589,
            des: '   '
        }]
    }, function(err, html) {
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});
module.exports = router