const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(path.join(__dirname, 'dist', 'SortII')));

app.get('/', (req, res, next) => {

	res.sendFile(path.join(__dirname, 'dist', 'SortII', 'index.html'));
})
