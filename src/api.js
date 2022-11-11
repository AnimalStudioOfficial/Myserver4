const express= require('express')
const app = express();
const serverless= require('serverless-http');
const cors = require('cors')
const router = require('./routes');
app.use(cors())



//app.use('/.netlify/functions/api',router)
//app.use("/", (req, res) => res.sendFile(path.join(__dirname, "../index.html")));
app.get('/oof', function (req, res) {
  res.send('Welcome')
})




module.exports.handler = serverless(app);
