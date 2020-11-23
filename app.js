var express   = require("express");
var app       = express();

// fetching endpoints to create routes
var endPoints = require("./routes/API_endpoints");


// function to add routes
var addRoutes = require("./addRoutes");

addRoutes(endPoints,app);

// landing page to test out the created endPoints
app.get("/",(req,res)=>{

    res.render("landing.ejs",{endPoints : endPoints});

})
// not found page
app.get("*",(req,res)=>{

    res.send("404, page not found");

})


// port setup
var port = 3004 || process.env.PORT;
app.listen(port,()=>{

    console.log(`server started on port ${port}`);

})