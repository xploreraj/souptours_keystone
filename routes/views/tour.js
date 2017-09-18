const keystone = require('keystone');

exports = module.exports = function(req, res) {
    var view = new keystone.View(req, res),
        locals = res.locals;

    //Set locals - bootstrap navbar active selection
    locals.section = 'tours';
    locals.filters = {
        tour: req.params.tour
    };
    locals.data = {
        tours: []
    };

    view.on('init', function(next){
        var query = keystone.list('Tour').model.findOne({
            slug: locals.filters.tour
        });

        query.exec(function(err, result){
            locals.data.tour = result;
            next(err);
        })
    });

    //render
    view.render('tour');
}