/**
 * @html:doc/image
 */
var router = require('express').Router(); // 新建一个 router
router.get('/doc/image', function(req, res) {
    res.render('doc-image', {
        title:'图片处理'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router