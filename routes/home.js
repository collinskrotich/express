let express = require("express")
let router = express.Router(); //router

router.get("/", (req, res)=>{
    let data = {
        "username": "Ngamia"
    }

    res.render("home", data);
});

router.get("/home", (req, res)=>{
    console.log("Received request on the home page")
    res.send("Mtaani Page");
});

exports.router = router;

