
const express = require('express');
const app = express();

const listRouter = require('./list.route');

// default app route
app.get('/', (req, res) => {
    res.json({'message': 'success app loaded!`'});
})

// list route
app.use('/list', listRouter);


module.exports = app;