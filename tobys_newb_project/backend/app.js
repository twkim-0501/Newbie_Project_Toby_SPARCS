const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080
const closetRouter = require('./src/routes/closet')


app.use('/closet', closetRouter)

app.get('/', (req, res) => {
    res.send('TaewooKim Newbie Project');
});

app.listen(port, () => {
    console.log(port+"에서 express 실행 중")
})