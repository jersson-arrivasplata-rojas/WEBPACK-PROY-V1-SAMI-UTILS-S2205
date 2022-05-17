"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlToCanvas = void 0;
var html2canvas_1 = __importDefault(require("html2canvas"));
var utils_1 = require("./utils");
var HtmlToCanvas = (function () {
    function HtmlToCanvas() {
    }
    HtmlToCanvas.prototype.generateHtmlToCanvas = function (data) {
        var content = document.getElementById(data.id);
        (0, html2canvas_1.default)(data.element, {
            allowTaint: true,
            logging: true,
            width: data.measures.width,
            height: data.measures.height,
            scale: 3,
            useCORS: false,
        }).then(function (canvas) {
            canvas.id = "canvas";
            content.innerHTML = "";
            content.appendChild(canvas);
            return canvas;
        }).then(function (canvas) {
            var imageName = "layout_" + new Date().getTime() + ".png";
            var cv = document.querySelector('#' + canvas.id);
            new utils_1.Utils().downloadCanvasToImage(cv, imageName);
        });
    };
    return HtmlToCanvas;
}());
exports.HtmlToCanvas = HtmlToCanvas;
