/**
 * @html:doc/page
 */
var router = require('express').Router(); // 新建一个 router
router.get('/doc/page', function(req, res) {
    res.render('doc-page', {
        title:'模块化'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router