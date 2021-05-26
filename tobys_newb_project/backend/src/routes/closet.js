const express = require('express');
const router = express.Router()

router.get('/', (req,res) => {
    res.send("저장한 옷 목록을 보여줍니다.")
})
module.exports =  router;