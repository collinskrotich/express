let express = require("express")
let router = express.Router(); //router

router.get("/", (req, res)=>{
    console.log("Received request on the login page")
    res.send("Login Page");
});

exports.router = router;