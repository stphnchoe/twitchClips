const axios = require('axios');
const db = require('../../database/index');
const twitchConfig = process.env.TWITCH_CLIENT_ID || require('./config/config')['Client-ID'];

exports.handler = async (event, ctx, cb) => {
  if (event.httpMethod !== 'GET') {
    cb('ERROR! METHOD NOT ACCEPTED', null);
  } else {
    try {
      const data0 = await axios.get('https://api.twitch.tv/kraken/clips/top', {
        headers: {
          'Client-ID': twitchConfig,
          Accept: 'application/vnd.twitchtv.v5+json',
        },
        params: {
          limit: 100,
          period: 'day',
        },
      });
      const data1 = await axios.get('https://api.twitch.tv/kraken/clips/top', {
        headers: {
          'Client-ID': twitchConfig,
          Accept: 'application/vnd.twitchtv.v5+json',
        },
        params: {
          limit: 100,
          period: 'week',
        },
      });
      const data2 = await axios.get('https://api.twitch.tv/kraken/clips/top', {
        headers: {
          'Client-ID': twitchConfig,
          Accept: 'application/vnd.twitchtv.v5+json',
        },
        params: {
          limit: 100,
          period: 'month',
        },
      });
      const data3 = await axios.get('https://api.twitch.tv/kraken/clips/top', {
        headers: {
          'Client-ID': twitchConfig,
          Accept: 'application/vnd.twitchtv.v5+json',
        },
        params: {
          limit: 100,
          period: 'all',
        },
      });

      const data = data0.data.clips.concat(data1.data.clips.concat(data2.data.clips.concat(data3.data.clips)));
      cb(null, { statusCode: 200, body: JSON.stringify(data) });
    } catch (error) {
      console.error(error);
    }
  }
};
