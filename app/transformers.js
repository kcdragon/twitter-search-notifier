const transformers = {
  twitterSearchResultsToTweets: (twitterSearchResults) => {
    const results = twitterSearchResults.statuses;
    return results.map((result) => {
      return {
        id: result.id,
        text: result.text,
      };
    });
  },
};

module.exports = transformers;
