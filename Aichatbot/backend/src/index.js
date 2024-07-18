"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app_js_1 = require("./app.js");
var connection_js_1 = require("./db/connection.js");
var PORT = process.env.PROT || 5000;
(0, connection_js_1.connectToDatabase)()
    .then(function () {
    app_js_1.default.listen(PORT, function () {
        return console.log("Server open and connected to database");
    });
})
    .catch(function (err) { return console.log(err); });
