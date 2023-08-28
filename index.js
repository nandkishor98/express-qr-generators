const express =require("express");
const app = express();
const indexRoute = require("./routes");

app.set("view engine", "ejs");
app.set("views","./views");

app.use(express.static("public"));

app.use(express.json());
app.use("/", indexRoute);
app.use((err,req,res,next)=>{
    err = err ? err.toString() : "something went wrong....";
    res.status(500).send(err);
});

app.listen(3005,() => {
  console.log("app is running on port 3005");
});