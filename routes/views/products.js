var keystone = require('keystone');

exports = module.exports = function(req, res){
    var view = new keystone.View(req, res);
    var locals = res.locals;

    //Set locals
    locals.section = 'store'; //bootstrap navbar active section

    //Load products
    view.query('products', keystone.list('Product').model.find());

    //render
    view.render('products');
};