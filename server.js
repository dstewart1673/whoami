const express = require('express');
const os = require('os');
const ip = require('ip');
const port = process.env.PORT || 8080;
const app = express();

app.get('/', (req, res) => {
  let data = {};
  data.ipaddress = ip.address();
  data.lang = req.headers["accept-language"];
  data.browser = req.headers["user-agent"];

  res.json(data);
})

app.listen(port, () => {
  console.log("server listening on " + port);
})
