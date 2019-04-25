const express  = require('express')
const path = require('path')

const app = express()
const port = 3000


app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, () => console.log(`SPA to SSR listening on port ${port}!`))
