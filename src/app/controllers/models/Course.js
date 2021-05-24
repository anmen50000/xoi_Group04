const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');


const Course = new Schema({
    name: {type: String, required: true, },
    phone: { type : String},
    address: {type: String},
    gmail: {type: String},
    gender: {type :String},
    slug: { type: String, slug: 'name', unique: true }
  },
  {
        timestamps : true
  }
);

//Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
  deletedAt : true,
  overrideMethods: 'all'
});
module.exports = mongoose.model('Course', Course);