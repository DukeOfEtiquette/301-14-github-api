const express = require('express');
const app = express();
const PORT = process.env.PORT;
const cors = require('cors');
const superagent = require('superagent');

app.use(express.static('./public'));
app.use(cors());

// Here is where we will manage out GitHub requests
// app.get('/github/*', (req, res) => {
//   console.log('Routing a request to GitHub');
// });

app.get('/', (req, res) => {
  res.sendFile('index.html')
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));