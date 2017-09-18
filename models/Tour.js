var keystone = require('keystone');
var Types = keystone.Field.Types;

//define model
var Tour = new keystone.List('Tour', {
    map: {name: 'title'},
    singular: 'Tour',
    plural: 'Tours',
    autokey: {path: 'slug', from: 'title', unique: true} //for permalinks
});

Tour.add({
    title: {type: String, required: true},
    about: {type: Types.Html, wysiwyg: true, height: 250},
    'tour info': {type: Types.Html, wysiwyg: true, height: 250},
    images: {type: Types.CloudinaryImages},
    'tour duration': {type: String},
    'cost per person': {type: Types.Money, currency: 'en-eu'},
    'min group size': {type: Number},
    'starting point': {type: String} //add google location also
});

Tour.register();