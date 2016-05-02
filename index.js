'use strict';

var cheerio = require('cheerio');

var Promise = require('pinkie-promise');

var got = require('got');

module.exports = function (username) {
	if (typeof username !== 'string') {
		return Promise.reject(new Error('username required'));
	}

	var url = 'https://www.twitter.com/' + username;

	return got(url).then(function (res) {
		var $ = cheerio.load(res.body);

		return {
			tweet0: $('.TweetTextSize').eq(0).text() || null,
			tweet1: $('.TweetTextSize').eq(1).text() || null,
			tweet2: $('.TweetTextSize').eq(2).text() || null,
			tweet3: $('.TweetTextSize').eq(3).text() || null,
			tweet4: $('.TweetTextSize').eq(4).text() || null,
			tweet5: $('.TweetTextSize').eq(5).text() || null,
			tweet6: $('.TweetTextSize').eq(6).text() || null,
			tweet7: $('.TweetTextSize').eq(7).text() || null,
			tweet8: $('.TweetTextSize').eq(8).text() || null,
			tweet9: $('.TweetTextSize').eq(9).text() || null
		};
	}).catch(function (err) {
		if (err.statusCode === 404) {
			err.message = 'Sorry! user doesn\'t exists.';
		}

		throw err;
	});
};
