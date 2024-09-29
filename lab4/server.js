var express = require('express')
var app = express()

app.use(express.static('public'))

app.get('/index.htm', (req, res) => {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.get('/hello', (req, res) => {
   res.end("Hello Express JS");
})

app.get('/user', (req, res) => {
   //Prepare output in JSON format
   let response = {
      firstname: "Pritesh",
      lastname: "Patel"
   };

   if (req.query.firstname) {
      response.firstname = req.query.firstname;
   }
   if (req.query.lastname) {
      response.lastname = req.query.lastname;
   }

   console.log(response);
   res.end(JSON.stringify(response));
})

app.post('/user/:firstname/:lastname', (req, res) => {
   console.log(req.params);
   res.end(JSON.stringify(req.params));
})

var server = app.listen(8081, () => {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
