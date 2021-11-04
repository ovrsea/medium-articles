"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.renderSignupWelcomeEmail = exports.renderReactEmail = void 0;
var react_1 = __importDefault(require("react"));
var react_html_email_1 = require("react-html-email");
var SignupWelcome_1 = require("./src/templates/SignupWelcome");
var renderReactEmail = function (Component, data) {
    return (0, react_html_email_1.renderEmail)(react_1.default.createElement(Component, __assign({}, data)));
};
exports.renderReactEmail = renderReactEmail;
var renderSignupWelcomeEmail = function (props) {
    return (0, exports.renderReactEmail)(SignupWelcome_1.SignupWelcome, props);
};
exports.renderSignupWelcomeEmail = renderSignupWelcomeEmail;
