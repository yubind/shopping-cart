const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
   imageUrl: {type: String, required: true},
   title: {type: String, required: true},
   description: {type: String, required: true},
   price: {type: String, required: true}
});

model.exports = mongoose.model('Product', schema);