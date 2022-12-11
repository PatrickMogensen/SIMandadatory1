const express = require('express')
const app = express()
const port = 8080
const axios = require('axios');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



app.get('/time', async (req, res)  => {
    console.log(Date.now())
    let date = Date.now()
res.send({ "timestamp": date })
})

app.get('/request-time', (req, res)  => {
    axios
  .get('http://127.0.0.1:8000/time')
  .then(response => {
    console.log(`statusCode: ${response.status}`);
    console.log(response);
    res.send(response.data)
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})