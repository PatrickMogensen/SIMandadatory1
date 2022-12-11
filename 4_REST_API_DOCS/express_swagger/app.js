//import express from "express";
const express = require("express")
const app = express();

import userRouter from "./routers/users.js"
app.use(userRouter);

const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes*.js'],
};

const openapiSpecification = swaggerJsdoc(options);

const swaggerUi = require('swagger-ui-express');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 8080;
app.listen(PORT, () =>{
    console.log("server is running on port", PORT)
})