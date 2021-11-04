"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var createBrowserHistory_1 = __importDefault(require("history/createBrowserHistory"));
var react_router_1 = require("react-router");
var SignupWelcome_1 = require("./templates/SignupWelcome");
var history = (0, createBrowserHistory_1.default)();
function App() {
    return (react_1.default.createElement(react_router_1.Router, { history: history },
        react_1.default.createElement(react_router_1.Switch, null,
            react_1.default.createElement(react_router_1.Route, { path: "/signup", render: function () { return (react_1.default.createElement(SignupWelcome_1.SignupWelcome, { subject: "Welcome to OVRSEA", userName: "Eric Cabrel", confirmationUrl: "https://ovrsea.com" })); }, exact: true }))));
}
exports.default = App;
