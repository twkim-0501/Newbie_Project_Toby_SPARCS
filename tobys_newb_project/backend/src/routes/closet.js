const express = require("express");
const db = require("../../database/db");
const router = express.Router();

router.get("/", (req, res) => {
    db.getAll(
        (clothes)=> {
        res.json(clothes);
    })
});

router.get("/:category", (req, res) => {
    db.getCategory(
        req.params.category,
        (clothes)=> {
        res.json(clothes);
    })
});

router.post("/:category", (req,res) =>{
    /*console.log(req.body);*/
    db.add(
        req.params.category,
        req.body, 
        ()=> {
        res.status(200).send();
    });
});
router.post("/delete/:category", (req,res) => {
    //console.log(req.body);
    db.remove(
        req.params.category,
        req.body.id,
        ()=> {
            res.status(200).send();
    });
});
router.post("/toggle/:category", (req,res)=> {
    db.toggle(
        req.params.category,
        req.body.id,
        () => {
            res.status(200).send();
        }
    );
});

module.exports = router;