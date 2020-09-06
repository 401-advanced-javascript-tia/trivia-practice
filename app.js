'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.listen(PORT, () => console.log(`Listening on ${PORT}`));




