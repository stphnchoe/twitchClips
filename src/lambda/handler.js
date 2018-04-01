const axios = require('axios');
const twitchConfig = require('./config/config')['Client-ID'];

function fetchTopClips(cb) {
  axios.get('https://api.twitch.tv/kraken/clips/top', {
    headers: {
      'Client-ID': twitchConfig,
      Accept: 'application/vnd.twitchtv.v5+json',
    },
  })
    .then((response) => {
      console.log('success ', response.data);
      cb(null, JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
      cb(error, null);
    });
}

exports.handler = (event, ctx, cb) => {
  if (event.httpMethod !== 'GET') {
    cb('ERROR! METHOD NOT ACCEPTED', null);
  } else {
    fetchTopClips((err, data) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, {
          statusCode: 200,
          body: data,
        });
      }
    });
  }
};


// {
//     "path": "Path parameter",
//     "httpMethod": "Incoming request's method name"
//     "headers": {Incoming request headers}
//     "queryStringParameters": {query string parameters }
//     "body": "A JSON string of the request payload."
//     "isBase64Encoded": "A boolean flag to indicate if the applicable request payload is Base64-encode"
// }
// cb(err, res)
// response object
// {
//     "isBase64Encoded": true|false,
//     "statusCode": httpStatusCode,
//     "headers": { "headerName": "headerValue", ... },
//     "body": "..."
// }
// Here’s a simple example function hello.js:

// exports.handler = function(event, context, callback) {
//     callback(null, {
//     statusCode: 200,
//     body: "Hello, World"
//     });
// }