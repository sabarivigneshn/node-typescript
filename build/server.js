"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import everything from express and assign it to the express variable
var express = require("express");
var morgan = require("morgan"); // log requests to the console (express4)
// Import WelcomeController from controllers entry point
var welcomeController_1 = require("./controllers/welcomeController");
var apiRoutes_1 = require("./routes/apiRoutes");
// Create a new express application instance
var app = express();
// The port the express app will listen on
var port = process.env.PORT || 3000;
// Mount the WelcomeController at the /welcome route
app.use('/welcome', welcomeController_1.WelcomeController);
app.use('/api', apiRoutes_1.ApiRoutes);
app.use(morgan()); // log every request to the console
// Serve the application at the given port
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
