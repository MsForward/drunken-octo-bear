'use strict';

/**
 * Module dependencies.
 */
var should = require('should'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Note = mongoose.model('Note');

/**
 * Globals
 */
var user, note;

/**
 * Unit tests
 */
describe('Note Model Unit Tests:', function() {

	before(function(done) {
		user = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password',
      provider: 'local'
		});

    note = new Note();

    user.save(function(err) {
      if (err) done(err);
      note.user = user._id;

      done();
    });
	});

	describe('Method Save', function() {

		it('should be able to save without problems', function(done) {
			return note.save(function(err) {
				should.not.exist(err);
				done();
			});
		});

    it('should add user info', function(done) {
      return note.save(function(err) {
        Note.findOne(function(err, note) {
          should.exist(note.user);
          done();
        });
      });
    });

    it('should add proper user id', function(done) {
      return note.save(function(err) {
        Note.findOne(function(err, note) {
          note.user.should.be.an.instanceOf(mongoose.Types.ObjectId);
          done();
        });
      });
    });

		it('should reference an existing user', function(done) {
      return note.save(function(err) {
        User.findOne({ _id: note.user }, function(err, user) {
          should.exist(user);
          done();
        });
      });
    });
	});

  describe('Method Remove', function() {

    beforeEach(function(done) {
      note = new Note({
        user: user._id
      });
      note.save(done);
      });

    it('should be able to delete', function(done) {
      Note.remove({ _id: note._id }, function(err) {
        should.not.exist(err);

        Note.findOne({ _id: note._id }, function(err, note) {
          should.not.exist(note);
          done();
        });
      });
    });
  });

	after(function(done) {
		Note.remove().exec();
		User.remove().exec();

		done();
	});
});