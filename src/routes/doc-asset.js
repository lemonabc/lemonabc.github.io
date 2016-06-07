/**
 * @html:doc/asset
 */
var router = require('express').Router(); // 新建一个 router
router.get('/doc/asset', function(req, res) {
    res.render('doc-asset', {
        title:'astro.Asset'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router