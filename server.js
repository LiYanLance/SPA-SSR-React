import path from 'path'
import fs from 'fs'
import React from 'react'
import express from 'express'
import {renderToString} from 'react-dom/server'
import App from './src/App'

const app = express()
const port = 3000

app.use('/dist', express.static(path.join(__dirname, 'dist')))

app.get('/', function(req, res) {
  const renderedString = renderToString(<App/>)

  fs.readFile(path.resolve("./public/index.html"), "utf-8", (err, data) => {
    if(err){
      res.send("<p>Server Error</p>")
      return false
    }
    res.send(data.replace("<div id='root'></div>",
        `<div id='root'>${renderedString}</div>`));
  })
});

app.listen(port, () => console.log(`SPA to SSR listening on port ${port}!`))
