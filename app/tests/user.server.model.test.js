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

	beforeEach(function(done) {
		user = new User({
			firstName: 'John',
			lastName: 'Doe',
			displayName: 'John Doe',
			email: 'test@test.com',
			username: 'username',
			password: 'password',
			provider: 'local'
		});
		user2 = new User({
			firstName: 'John',
			lastName: 'Doe',
			displayName: 'John Doe',
			email: 'test@test.com',
			username: 'username',
			password: 'password',
			provider: 'local'
		});
    note = new Note({
      user: user._id
    });

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
	});

	afterEach(function(done) {
		User.remove().exec();
    Note.remove().exec();
		done();
	});
});