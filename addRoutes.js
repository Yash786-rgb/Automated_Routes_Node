var express = require("express");

function createRoute(pathOfRoute,app){ 
    // this function will create a route for the required path
   var router = express.Router();

   router.get("/",(req,res)=>{

       res.send(pathOfRoute + " page");

   })
   // returning the created route
   return router;

}

function addRoutes(endPoints,app){
    // this function will make our app use that route
    var n = endPoints.length; // length of endPoints array

    for(var i=0; i<n; i++){

    var pathOfRoute = endPoints[i];

    var routeOfThatPath = createRoute(pathOfRoute,app);

    app.use("/"+pathOfRoute,routeOfThatPath);   

   } 
}

module.exports = addRoutes;