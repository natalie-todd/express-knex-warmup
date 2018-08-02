<!-- npm init -y
make "start" script and put "node app.js"
npm install express -->

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const app = express() 
const port = 9000

app.use(cors())
app.use(bodyParser.json())
-app.get('/',(request, response, next) => {
})
app.listen(port,() => {
console.log(`I am listening on $
{port}`)
})

npm start
npm install cors
npm install body-parser

<!-- 1. install
2. require -->
