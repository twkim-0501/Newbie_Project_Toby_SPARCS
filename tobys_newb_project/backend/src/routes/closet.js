const express = require("express");
const db = require("../../db");
const router = express.Router();

router.get("/:category", (req, res) => {
    db.getAll(
        req.params.category,
        (clothes)=> {
        res.json(clothes);
    })
});

router.post("/:category", (req,res) =>{
    console.log(req.body);
    db.add(
        req.params.category,
        req.body, 
        ()=> {
        res.status(200).send();
    })
});

module.exports = router;