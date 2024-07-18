"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureOpenAI = void 0;
var openai_1 = require("openai");
var configureOpenAI = function () {
    var config = new openai_1.default({
        apiKey: process.env.OPEN_AI_SECRET,
        organization: process.env.OPENAI_ORGANISATION_ID, // Make sure this is spelled correctly
    });
    return config;
};
exports.configureOpenAI = configureOpenAI;
