'use strict';

var cheerio = require('cheerio');

var Promise = require('pinkie-promise');

var got = require('got');

userName.exports = function (userName) {
	if (typeof userName !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	var url = 'https://www.twitter.com/' + userName;

	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);

		return {
			
		};
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'Sorry! user doesn\'t exists.';
		}

		throw err;
	});
};
