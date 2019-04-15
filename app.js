const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('public'));
app.use(express.json());









app.listen(3000, () => {
    console.log('Let the game begin');
});