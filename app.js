const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = process.env.PORT || 9000;
const queries = require('./queries');

const app = express();

app.use(cors());

app.use(bodyParser.json());

app.get('/', (req, res, next) => {
    queries.getAll().then(g90server => 
        res.json({ g90server }))
})

app.listen(port, () => {
    console.log(`we got you on port ${port}`)
})

