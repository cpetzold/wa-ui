"use strict";
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
exports.Table = exports.GridCell = exports.Panel = exports.Frame = exports.Button = exports.Heading = exports.Foo = exports.Input = exports.Grid = exports.Flex = exports.Box = exports.ThemeProvider = void 0;
const jsx_runtime_1 = require("theme-ui/jsx-runtime");
/** @jsxImportSource theme-ui */
const theme_ui_1 = require("theme-ui");
const theme_1 = __importDefault(require("./theme"));
const use_sound_1 = __importDefault(require("use-sound"));
function ThemeProvider({ children }) {
    return (0, jsx_runtime_1.jsx)(theme_ui_1.ThemeProvider, Object.assign({ theme: theme_1.default }, { children: children }), void 0);
}
exports.ThemeProvider = ThemeProvider;
exports.Box = theme_ui_1.Box;
exports.Flex = theme_ui_1.Flex;
exports.Grid = theme_ui_1.Grid;
exports.Input = theme_ui_1.Input;
function Foo() {
    return (0, jsx_runtime_1.jsx)(theme_ui_1.Heading, { children: "Foo!" }, void 0);
}
exports.Foo = Foo;
function Heading(_a) {
    var { size = "medium", sx } = _a, props = __rest(_a, ["size", "sx"]);
    return (0, jsx_runtime_1.jsx)(theme_ui_1.Heading, Object.assign({ sx: Object.assign({ fontSize: size }, sx) }, props), void 0);
}
exports.Heading = Heading;
function Button(props) {
    const [playHover] = (0, use_sound_1.default)("/hover.wav");
    const [playClick] = (0, use_sound_1.default)("/click.wav");
    return ((0, jsx_runtime_1.jsx)(theme_ui_1.Button, Object.assign({}, props, { onMouseEnter: () => playHover(), onMouseDown: (e) => {
            e.stopPropagation();
            playClick();
        } }), void 0));
}
exports.Button = Button;
function Frame({ title, children, sx, }) {
    return ((0, jsx_runtime_1.jsxs)(exports.Flex, Object.assign({ sx: Object.assign({ flexDirection: "column", flex: 1, width: "100%" }, sx) }, { children: [(0, jsx_runtime_1.jsxs)(exports.Flex, Object.assign({ sx: { alignItems: "center", gap: 4, marginBottom: -16 } }, { children: [(0, jsx_runtime_1.jsx)(exports.Box, { sx: { flex: 1, height: 3, backgroundColor: "border" } }, void 0), (0, jsx_runtime_1.jsx)(Heading, Object.assign({ sx: { color: "muted" } }, { children: title }), void 0), (0, jsx_runtime_1.jsx)(exports.Box, { sx: { flex: 1, height: 3, backgroundColor: "border" } }, void 0)] }), void 0), (0, jsx_runtime_1.jsxs)(exports.Flex, { children: [(0, jsx_runtime_1.jsx)(exports.Box, { sx: { width: 3, backgroundColor: "border" } }, void 0), (0, jsx_runtime_1.jsx)(exports.Box, Object.assign({ sx: { flex: 1, padding: "medium" } }, { children: children }), void 0), (0, jsx_runtime_1.jsx)(exports.Box, { sx: { width: 3, backgroundColor: "border" } }, void 0)] }, void 0), (0, jsx_runtime_1.jsx)(exports.Box, { sx: { height: 3, backgroundColor: "border" } }, void 0)] }), void 0));
}
exports.Frame = Frame;
function Panel({ children, sx, }) {
    return ((0, jsx_runtime_1.jsx)(exports.Flex, Object.assign({ sx: Object.assign({ flexDirection: "column", flex: 1, width: "100%", backgroundColor: "secondary", border: "2px solid", borderColor: "border", padding: "small" }, sx) }, { children: children }), void 0));
}
exports.Panel = Panel;
function GridCell({ children, sx, className, }) {
    return ((0, jsx_runtime_1.jsx)(exports.Box, Object.assign({ sx: Object.assign({ padding: "small" }, sx), className: className }, { children: children }), void 0));
}
exports.GridCell = GridCell;
function Table(_a) {
    var { sx, headers, children } = _a, props = __rest(_a, ["sx", "headers", "children"]);
    return ((0, jsx_runtime_1.jsxs)(exports.Flex, Object.assign({ sx: Object.assign({ flexDirection: "column", backgroundColor: "secondary", border: "2px solid", borderColor: "border" }, sx) }, props, { children: [(0, jsx_runtime_1.jsx)(exports.Grid, Object.assign({ sx: {
                    gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
                    backgroundColor: "black",
                    color: "muted",
                    borderBottom: "2px solid",
                    borderColor: "border",
                    gap: 0,
                    fontSize: "small",
                } }, { children: headers.map((header) => ((0, jsx_runtime_1.jsx)(GridCell, Object.assign({ sx: {
                        ":not(:last-child)": {
                            borderRight: "2px solid",
                            borderColor: "border",
                        },
                    } }, { children: header }), header))) }), void 0), (0, jsx_runtime_1.jsx)(exports.Grid, Object.assign({ sx: {
                    gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
                    gap: 0,
                    overflow: "auto",
                } }, { children: children }), void 0)] }), void 0));
}
exports.Table = Table;
