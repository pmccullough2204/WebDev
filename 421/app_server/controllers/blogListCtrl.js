
/* GET home page */
module.exports.index = function(req,res) {
    res.render('blogList', { title: 'Blog List' });
};