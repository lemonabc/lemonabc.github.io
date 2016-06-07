/**
 * @html:doc/middleware
 */
var router = require('express').Router(); // 新建一个 router
router.get('/doc/middleware', function(req, res) {
    res.render('doc-middleware', {
        title:'中间件开发'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router