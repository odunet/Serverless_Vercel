let getURL = (id) => `https://jsonplaceholder.typicode.com/posts/${id}`;
const axios = require('axios');

let getEndpoint = async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,OPTIONS,PATCH,DELETE,POST,PUT'
  );
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  let { id = 1 } = req.query;
  let { data } = await axios({
    url: getURL(id),
    method: 'get',
  });

  res.send(data);
};

module.exports = getEndpoint;
