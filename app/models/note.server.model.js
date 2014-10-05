'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    User = mongoose.model('User');

/**
 * Note Schema
 */
var NoteSchema = new Schema({
  title: String,
  contentPlain: String,
  user: User
});

mongoose.model('Note', NoteSchema);