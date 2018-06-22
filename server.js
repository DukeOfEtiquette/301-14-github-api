const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const superagent = require('superagent');

app.use(express.static('./public'));
app.use(cors());

// Here is where we will manage out GitHub requests
app.get('/github/*', (req, res) => {
  console.log('Routing a GitHub AJAX request for ', req.params[0]);
  const url = `https://api.github.com/${req.params[0]}`;
  superagent.get(url)
    .set(`Authorization`, `token ${process.env.GITHUB_TOKEN}`)
    .then(
      repos => res.send(repos.text),
      err => res.send(err)
    )
})

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));