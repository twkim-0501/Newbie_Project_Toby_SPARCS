const express = require("express");
const codyDB = require("../../database/codyDB");
const router = express.Router();

router.get("/", (req, res) => {
    codyDB.getAll(
        (codies)=> {
        res.json(codies);
    })
});

router.post("/", (req,res) => {
    codyDB.add(
        req.body,
        ()=> {
            res.status(200).send();
        }
    );
})
router.post("/delete/", (req,res) => {
    codyDB.remove(
        req.body,
        ()=> {
            res.status(200).send();
    });
});

module.exports = router;