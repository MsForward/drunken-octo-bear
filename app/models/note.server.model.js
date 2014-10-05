'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Note Schema
 */
var NoteSchema = new Schema({
  title: String,
  contentPlain: String,
  user: Schema.Types.ObjectId
});

mongoose.model('Note', NoteSchema);