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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
});

mongoose.model('Note', NoteSchema);