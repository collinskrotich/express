let express = require("express")
let router = express.Router(); //router

router.get("/", (req, res)=>{
    res.send("About Page");
});

exports.router = router;