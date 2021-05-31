const express = require("express");
const db = require("../../db");
const router = express.Router();

router.get("/:id", (req, res) => {
    db.getAll(
        req.params.id,
        (clothes)=> {
        res.json(clothes);
    })
});

module.exports = router;