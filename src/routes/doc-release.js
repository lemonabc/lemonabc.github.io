/**
 * @html:doc/release
 */
var router = require('express').Router(); // 新建一个 router
router.get('/doc/release', function(req, res) {
    res.render('doc-release', {
        title:'发布'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router