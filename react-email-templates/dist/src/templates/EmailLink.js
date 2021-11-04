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
exports.EmailLink = void 0;
var react_1 = __importDefault(require("react"));
// @ts-ignore
var react_html_email_1 = require("react-html-email");
var linkStyle = {
    color: "rgb(117, 128, 140)",
    fontSize: 15,
};
var EmailLink = function (_a) {
    var children = _a.children, href = _a.href, style = _a.style;
    return (react_1.default.createElement(react_html_email_1.A, { href: href, style: __assign(__assign({}, linkStyle), style) }, children));
};
exports.EmailLink = EmailLink;
