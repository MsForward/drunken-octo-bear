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
var user, user2, note;

/**
 * Unit tests
 */
describe('User Model Unit Tests:', function() {
	before(function(done) {
		user = new User({
      id: new mongoose.Types.ObjectId(),
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password',
			provider: 'local'
		});
		user2 = new User({
			firstName: 'Full',
			lastName: 'Name',
			displayName: 'Full Name',
			email: 'test@test.com',
			username: 'username',
			password: 'password',
			provider: 'local'
		});
    note = new Note({
      user: user._id
    }).save();

		done();
	});

	describe('Method Save', function() {
		it('should begin with no users', function(done) {
			User.find({}, function(err, users) {
				users.should.have.length(0);
				done();
			});
		});

		it('should be able to save without problems', function(done) {
			user.save(done);
		});

		it('should fail to save an existing user again', function(done) {
			user.save();
			return user2.save(function(err) {
				should.exist(err);
				done();
			});
		});

		it('should be able to show an error when trying to save without first name', function(done) {
			user.firstName = '';
			return user.save(function(err) {
				should.exist(err);
				done();
			});
		});

    it('should remove all notes when removing user', function(done) {
      var id = user._id;
      user.remove(function(err) {
        should.not.exist(err);
        Note.find({ user: id }, function(err, docs) {
          docs.should.have.length(0);
          done();
        });
      });
    });
	});

	after(function(done) {
		User.remove().exec();
		done();
	});
});