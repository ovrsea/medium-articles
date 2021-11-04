"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SignupWelcome = void 0;
var react_1 = __importDefault(require("react"));
var react_html_email_1 = __importStar(require("react-html-email"));
var EmailFooter_1 = require("./EmailFooter");
react_html_email_1.default.configStyleValidator({
    platforms: [
        'gmail',
        'gmail-android',
        'apple-mail',
        'apple-ios',
        'yahoo-mail',
        'outlook',
        'outlook-legacy',
        'outlook-web',
    ],
});
var emailHeadCSS = "\n  body {\n    background-color: #F5F8FA;\n  }\n".trim();
var backgroundStyle = {
    WebkitBoxShadow: "6px 6px 40px 3px rgba(140, 152, 164, 0.2)",
    backgroundColor: "#FFF",
    borderRadius: 7,
    boxShadow: "6px 6px 40px 3px rgba(140, 152, 164, 0.2)",
    margin: "0 auto",
    width: "100%",
    padding: "0 32px",
};
var containerStyle = {
    backgroundColor: "#F5F8FA",
    width: "100%",
};
var linkStyle = {
    color: "white",
    display: "block",
    paddingBottom: "13px",
    paddingTop: "13px",
    textDecoration: "none",
    width: "100%",
};
var fluidItemStyle = {
    backgroundColor: "rgb(59, 139, 128)",
    borderRadius: 4,
    cursor: "pointer",
    height: 48,
    textAlign: "center",
    textDecoration: "none",
};
var SignupWelcome = function (_a) {
    var userName = _a.userName, subject = _a.subject, confirmationUrl = _a.confirmationUrl;
    return (react_1.default.createElement(react_html_email_1.Box, { align: "center", style: containerStyle },
        react_1.default.createElement(react_html_email_1.Email, { align: "center", headCSS: emailHeadCSS, title: subject },
            react_1.default.createElement(react_html_email_1.Item, { style: { height: 45 } }),
            react_1.default.createElement(react_html_email_1.Item, null,
                react_1.default.createElement(react_html_email_1.Image, { height: "auto", src: "https://s3.eu-central-1.amazonaws.com/images.ovrsea.com/Ovrsea-Logo-noir%2Bpicto.png", style: { margin: "0 auto " }, width: 160 })),
            react_1.default.createElement(react_html_email_1.Item, { style: { height: 30 } }),
            react_1.default.createElement(react_html_email_1.Item, { align: "center" },
                react_1.default.createElement(react_html_email_1.Box, { style: backgroundStyle },
                    react_1.default.createElement(react_html_email_1.Item, { style: { height: 40 } }),
                    react_1.default.createElement(react_html_email_1.Item, null,
                        react_1.default.createElement(react_html_email_1.Span, { fontSize: 22, fontWeight: "bold" }, "Welcome to OVRSEA\u00A0")),
                    react_1.default.createElement(react_html_email_1.Item, { style: { height: 25 } }),
                    react_1.default.createElement(react_html_email_1.Item, null,
                        "Hello ",
                        userName,
                        ", we are happy to have you on board!"),
                    react_1.default.createElement(react_html_email_1.Item, { style: { height: 25 } }),
                    react_1.default.createElement(react_html_email_1.Item, null, "To access the optimal experience for shipment management, you only need to activate your account below."),
                    react_1.default.createElement(react_html_email_1.Item, { style: { height: 50 } }),
                    react_1.default.createElement(react_html_email_1.Item, { className: "button", style: fluidItemStyle },
                        react_1.default.createElement(react_html_email_1.A, { href: confirmationUrl, style: linkStyle }, "Activate my account")),
                    react_1.default.createElement(react_html_email_1.Item, { style: { height: 35 } })),
                react_1.default.createElement(EmailFooter_1.EmailFooter, null)))));
};
exports.SignupWelcome = SignupWelcome;
