"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var renderEmail_1 = require("./renderEmail");
(function () {
    var htmlContent = (0, renderEmail_1.renderSignupWelcomeEmail)({
        subject: "Welcome to OVRSEA",
        userName: "Eric Cabrel",
        confirmationUrl: "https://ovrsea.com"
    });
    console.log(htmlContent);
})();
