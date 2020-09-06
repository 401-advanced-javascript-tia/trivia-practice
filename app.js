'use strict';

const express = require('express');
const app = express();
const PORT = 3005;

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.listen(PORT, () => console.log(`Listening on ${PORT}`));




