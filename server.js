let express = require("express");
let app = express();
let bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static("src"));

app.listen(3000, function () {
  console.log("Server started on port: 3000");
}); 