const axios = require('axios');
const twitchConfig = require('../config/config')['Client-ID'];

function fetchTopClips(cb) {
  axios.get('https://api.twitch.tv/kraken/clips/top', {
    headers: {
      'Client-ID': twitchConfig,
      Accept: 'application/vnd.twitchtv.v5+json',
    },
  })
    .then((response) => {
      console.log('success ', response.data);
      cb(response.data);
    })
    .catch((error) => {
      console.error(error);
      cb(error);
    });
}

module.exports = {
  fetchTopClips,
};
