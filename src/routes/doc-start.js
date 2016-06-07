/**
 * @html:doc/start
 */
var router = require('express').Router(); // 新建一个 router
router.get('/doc/start', function(req, res) {
    res.render('doc-start', {
        title:'如何开始'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router