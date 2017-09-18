var keystone = require('keystone');
var Types = keystone.Field.Types;

//define the model
var Product = new keystone.List('Product', {
    map: {name: 'title'},
    singular: 'Product',
    plural: 'Products',
    autokey: {path: 'slug', from: 'title', unique: true} //for unique path, creating permalinks
});

//add fields
Product.add({
    title: {type: String, required: true},
    price: {type: Types.Money, currency: 'en-er'},
    description: {type: Types.Html, wysiwyg: true, height: 300},
    image: {type: Types.CloudinaryImage}
    //publishedDate: {type: Date, defaut: Date.now}
});

Product.register();