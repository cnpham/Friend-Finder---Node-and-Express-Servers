// load data
var surveyData = require("../data/friends");

module.exports = function(app) {
    app.get("/api/friends", function(req, res) {
        res.json(surveyData);
    });

    app.post("/api/friends", function(req, res) {
        for (var i; i < surveyData.length; i++) {
            var difference;
            difference.length = [];
            difference[i] = surveyData[i] - surveyData[i];
        };
    });

    app.post("api/clear", function(res, req) {
        surveyData.length = [];

        res.json({ ok: true });
    });
}