const transformers = require('../../app/transformers');

describe('transformers', () => {
  describe('#twitterSearchResultsToTweets', () => {
    function tweetFromTwitterSearchResults(twitterSearchResults) {
      const tweets = transformers.twitterSearchResultsToTweets(twitterSearchResults);
      return tweets[0];
    }

    it('creates a tweet for each search result', () => {
      const twitterSearchResults = {
        "statuses": [
          {},
          {},
        ]
      };

      const tweets = transformers.twitterSearchResultsToTweets(twitterSearchResults);
      expect(tweets.length).toBe(2);
    });

    it('tweet includes id', () => {
      const twitterSearchResults = {
        "statuses": [
          { id: 1 },
        ]
      };

      const tweet = tweetFromTwitterSearchResults(twitterSearchResults);
      expect(tweet.id).toBe(1);
    });

    it('tweet includes text', () => {
      const twitterSearchResults = {
        "statuses": [
          { text: 'a tweet' },
        ]
      };

      const tweet = tweetFromTwitterSearchResults(twitterSearchResults);
      expect(tweet.text).toBe('a tweet');
    });
  });
});
