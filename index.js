let express = require("express")

let homeRouter = require("./routes/home");
let aboutRouter = require("./routes/about");
let loginRouter = require("./routes/login");

let app = express(); //server
app.use(express.static('public'))

app.set('view engine', 'ejs');

app.use("/home", homeRouter.router);
app.use("/about", aboutRouter.router);
app.use("/login", loginRouter.router);


let PORT = 5500;

app.listen(PORT, ()=>{
    console.log("Starting application: ")
});