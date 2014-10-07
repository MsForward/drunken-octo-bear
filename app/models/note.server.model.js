'use strict';

/**
 * Module dependencies
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.Types.ObjectId;

/**
 * Note Schema
 */
var NoteSchema = new Schema({
  title: {
    type: String,
    default: new Date().toString()
  },
  contentPlain: {
    type: String,
    default: ''
  },
  user: {
    type: ObjectId,
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

NoteSchema.index({ user: 1, created: -1, tags: 1 });
mongoose.model('Note', NoteSchema);