import OAuthManager from 'react-native-oauth';

const config = {
  twitter: {
    consumer_key: 'SOME_CONSUMER_KEY',
    consumer_secret: 'SOME_CONSUMER_SECRET',
  },
};
const oauthManager = new OAuthManager('TwitterSearchNotifier');
oauthManager.configure(config);

export default oauthManager;
