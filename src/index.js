"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
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
exports.__esModule = true;
exports.Button = exports.ThemeProvider = exports.Box = void 0;
var tui = require("theme-ui");
var react_1 = require("react");
var theme_1 = require("./theme");
var use_sound_1 = require("use-sound");
var theme_ui_1 = require("theme-ui");
__createBinding(exports, theme_ui_1, "Box");
function ThemeProvider(_a) {
    var children = _a.children;
    <tui.ThemeProvider theme={theme_1["default"]}>{children}</tui.ThemeProvider>;
}
exports.ThemeProvider = ThemeProvider;
function Button(_a) {
    var disabled = _a.disabled, rest = __rest(_a, ["disabled"]);
    var playHover = (0, use_sound_1["default"])("/hover.wav")[0];
    var playClick = (0, use_sound_1["default"])("/click.wav")[0];
    return (<tui.Button disabled={disabled} {...rest} onMouseEnter={function () { return playHover(); }} onMouseDown={function (e) {
            e.stopPropagation();
            playClick();
        }}/>);
}
exports.Button = Button;
