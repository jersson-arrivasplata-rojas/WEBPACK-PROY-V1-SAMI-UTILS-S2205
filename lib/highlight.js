"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Highlight = void 0;
var highlight_js_1 = __importDefault(require("highlight.js"));
var Highlight = (function () {
    function Highlight() {
    }
    Highlight.prototype.init = function () {
        highlight_js_1.default.highlightAll();
    };
    return Highlight;
}());
exports.Highlight = Highlight;
