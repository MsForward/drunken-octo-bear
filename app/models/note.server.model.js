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
  title: {
    type: String,
    default: 'Untitled'
  },
  contentPlain: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  tags: {
    type: [ String ],
    index: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  modified: {
    type: Date
  }
});

mongoose.model('Note', NoteSchema);