// models/Project.js

var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
  name:{type:String, required:true, unique:true},
  contents:{type:String},
  position:{type:String},
  company:{type:String},
  category:{type:String},
  started_at:{type:DateTime},
  ended_at:{type:DateTime},
});

var Project = mongoose.model('project', contactSchema);

module.exports = Contact;
