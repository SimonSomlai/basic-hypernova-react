const path = require('path');
const axios = require('axios');
const express = require('express');
const Renderer = require('hypernova-client');

const template = require('./assets/index.template');

const app = express();

app.use('/bundle.js', express.static(path.join(__dirname, 'build', 'bundle.js')));

const renderer = new Renderer({
  url: 'http://localhost:8080/batch'
});

app.get('*', (req, res) => {
  console.log("1) Getting request on webserver = ", req.originalUrl);
  const jobs = {
      "Hello": {
          "name": "Hello",
          "data": {}
      }
    }

  console.log("2) Posting component to hypernova server");
  renderer.render(jobs).then((html) => {
    console.log("5) Got response back with ", html);
    const renderedMarkup = template(html);
    console.log("6) Filling in template with rendered component + sending response = ", renderedMarkup);
    res.send(renderedMarkup)
  });
});

app.listen(3000, () => {
    console.log("Server listening on port 3000!");
});
