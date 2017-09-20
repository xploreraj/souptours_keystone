const keystone = require('keystone');

exports = module.exports = function(req, res){
    var view = new keystone.View(req, res),
        locals = res.locals;

        //set locals - bootstrap navbar active selection
        locals.section = 'tours';

        //Load tours
        view.query('tours', keystone.list('Tour').model.find());

        //Render
        view.render('tours');
};