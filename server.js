const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const superagent = require('superagent');

app.use(express.static('./public'));
app.use(cors());

app.get('/github/*', (req, res) => {
  console.log('Routing a request to GitHub');
  const url = `https://api.github.com/${req.params[0]}`;
  superagent.get(url)
    .set('Authorization', process.env.GITHUB_TOKEN)
    .then(repos => res.send(repos))
    .catch(error => console.log(error.message))
});

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));