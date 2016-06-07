/**
 * @html:index
 */
var router = require('express').Router(); // 新建一个 router
router.get('/', function(req, res) {
    res.render('index', {
        title:'Astros——前端工程化方案'
    }, function(err, html){
        res.set('Content-Type', 'text/html');
        res.end(html)
    });
});

module.exports = router