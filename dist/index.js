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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = exports.ThemeProvider = exports.Box = void 0;
var tui = __importStar(require("theme-ui"));
var react_1 = __importDefault(require("react"));
var theme_1 = __importDefault(require("./theme"));
var use_sound_1 = __importDefault(require("use-sound"));
var theme_ui_1 = require("theme-ui");
Object.defineProperty(exports, "Box", { enumerable: true, get: function () { return theme_ui_1.Box; } });
function ThemeProvider(_a) {
    var children = _a.children;
    return react_1.default.createElement(tui.ThemeProvider, { theme: theme_1.default }, children);
}
exports.ThemeProvider = ThemeProvider;
function Button(_a) {
    var disabled = _a.disabled, rest = __rest(_a, ["disabled"]);
    var playHover = (0, use_sound_1.default)("/hover.wav")[0];
    var playClick = (0, use_sound_1.default)("/click.wav")[0];
    return (react_1.default.createElement(tui.Button, __assign({ disabled: disabled }, rest, { onMouseEnter: function () { return playHover(); }, onMouseDown: function (e) {
            e.stopPropagation();
            playClick();
        } })));
}
exports.Button = Button;
