var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'bpPqcscWrCesuhpwLmWsQ0mhr',
  consumer_secret: '7rm52GfJtunFxIQcVVaolBqyTiGyXcBFwE5oB3A9RrAFZ7MJd6',
  access_token_key: '2403031868-VTZ8mlCtgvEl3zXBKRBOUMMNXZvvxntcyOWVhaw',
  access_token_secret: 'dYttG84usSzxzIe3NzUZJtztVheIfaRgK9JYoWVhLxlfY'
});

function getTweets(req, res, next) {
    client.get('search/tweets', { q: 'node.js' }, function (error, tweets, response) {
        if (!error) {
        res.send(tweets);
      } else {
        res.send(error);
      }
    });
  }

export default {getTweets};