"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IssueController = /** @class */ (function () {
    function IssueController() {
    }
    IssueController.prototype.getIssues = function (req, res) {
        console.log('in ct');
        res.send('suss by controller');
    };
    return IssueController;
}());
exports.IssueController = IssueController;
