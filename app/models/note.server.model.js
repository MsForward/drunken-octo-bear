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
    default: Date.now.toString()
  },
  contentPlain: {
    type: String,
    default: ''
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: 'User reference is required',
    index: true
  },
  tags: {
    type: [ String ],
    index: true
  },
  created: {
    type: Date,
    default: Date.now,
    index: true
  },
  modified: {
    type: Date
  }
});

noteSchema.index({ user: 1, created: -1, tags: 1 });
mongoose.model('Note', NoteSchema);