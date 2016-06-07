/**
 * @html:doc/astros
 */
var router = require('express').Router(); // 新建一个 router
router.get('/doc/astros', function(req, res) {
    res.render('doc-astros', {
        title:'合成字体'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router