var express = require("express");

var mongoose = require("mongoose");
var bodyParser = require("body-parser");

var app = express();
var port = (process.env.PORT || 4000);


app.use(bodyParser.json())

//////////////schema and model///////////////////////////////////////////
var studentSchema = new mongoose.Schema({
    name: String,
    studing : String,
    class: String
});
var studentModel = mongoose.model("student new Name", studentSchema);
//////////////schema and model//////////////////////////////////////////


app.post("/user", function (req, res, next) {
    //console.log("body is: ",req.body);

    var newStudent = new studentModel({
        name: req.body.name,
        class: req.body.class,
        studing: req.body.studing
    })

    newStudent.save(function (err, data) {
        if (!err) {
            console.log("student is saved");
            res.send("student is saved");
        } else {
            res.send("student saving failed");
            console.log("student saving failed");
        }
    });
});


app.get("/users", function (req, res, next) {
    console.log("reauest is comming to '/' ");
    res.send("get all users api");
});

app.get("/", function (req, res, next) {
    console.log("reauest is comming to '/' ");
    res.send("Hello world express");
});

app.listen(port, function () {
    console.log('app is running on port', port);
});


mongoose.connect("mongodb://pkbilal:6363@ds151909.mlab.com:51909/pkbilal");
mongoose.connection.on('connected', function () {
    console.log("Mongoose is connected");
});