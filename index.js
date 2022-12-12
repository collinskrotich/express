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

process.env.PORT

let PORT = null;

if(!process.env.PORT){
    PORT = 5500;
    console.log(`Setting custom port: ${PORT}`)
} else {
    PORT = process.env.PORT;
    console.log(`Setting default port: ${PORT}`)
}

app.listen(PORT, ()=>{
    console.log("Starting application: ")
});