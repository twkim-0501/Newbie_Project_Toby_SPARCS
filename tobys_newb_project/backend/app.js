/*서버 실행을 위한 초기 설정, 라우터 연결*/
const express = require('express');
const path = require("path");
const bodyParser = require('body-parser');
const closetRouter = require('./src/routes/closet');
const calendarRouter = require('./src/routes/calendar');
const mongoose = require("mongoose");

const app = express();
const port = 8080;

mongoose.connect("mongodb://whale.sparcs.org:40/cody_closet", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});




const db = mongoose.connection;
db.once("open", function() {
  console.log("DB connected!");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/closet', closetRouter);
app.use('/calendar', calendarRouter);

app.get('/', (req, res) => {
    res.status(418).send("First Project");
});

app.listen(port, () => {
    console.log(port+"에서 express 실행 중");
})