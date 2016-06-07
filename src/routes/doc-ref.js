/**
 * @html:doc/doc-ref
 */
var router = require('express').Router(); // 新建一个 router
router.get('/doc/res-ref', function(req, res) {
    res.render('doc-ref', {
        title:'资源引用'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router