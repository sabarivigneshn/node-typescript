"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import only what we need from express
var express = require("express");
var issueController_1 = require("./../controllers/issueController");
// Create a new express application instance
var app = express();
var express_1 = require("express");
// Assign router to the express.Router() instance
var router = express_1.Router();
var controller = new issueController_1.IssueController();
// In this case it's /api
router.get('/', function (req, res) {
    // Reply with a hello world when no name param is provided
    res.send('Hello, World!');
});
router.get('/:name', function (req, res) {
    // Extract the name from the request parameters
    var name = req.params.name;
    // Greet the given name
    console.log('ff');
    res.send("Hello, " + name);
});
//response from controller 
router.get('/ctlr', controller.getIssues);
// Export the express.Router() instance to be used by server.ts
exports.ApiRoutes = router;
