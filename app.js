var express = require ("express");
var app = express();

app.use(express.static(__dirname + '/static'));

app.get('/hello', function (request, response) {
    response.send("Hello from the other side!");
});

app.listen(8000, function () {
    console.log("Server started");
});