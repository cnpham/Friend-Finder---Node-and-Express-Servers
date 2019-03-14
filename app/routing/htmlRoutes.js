// dependency for path
var path = require("path");

module.exports = function(app) {
    // route for survey that displays the survey page
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(_dirname, "../public/survey.html"));
    });
    // default route if no matching route
    app.get("*", function(req, res) {
        res.sendFile(path.join(_dirname, "../public/home.html"));
    });
};