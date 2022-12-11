const fs = require('fs');
const csv=require('csvtojson')

const express = require('express')
const app = express()
const port = 3000

app.get('/csv', async (req, res)  => {
  const jsonArray = await csv().fromFile('file.csv');
  res.send(JSON.stringify(jsonArray))
})

app.get('/json', (req, res) => {
  var cars = JSON.parse(fs.readFileSync('file.json', 'utf8'))
  res.send(cars)
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})