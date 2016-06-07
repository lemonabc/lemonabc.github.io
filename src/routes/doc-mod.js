/**
 * @html:doc/mod
 */
var router = require('express').Router(); // 新建一个 router
router.get('/doc/mod', function(req, res) {
    res.render('doc-mod', {
        title:'模块化'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router