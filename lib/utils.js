"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utils = void 0;
var Utils = (function () {
    function Utils() {
    }
    Utils.prototype.hello = function (world) {
        if (world === void 0) { world = 'world'; }
        return "Hello ".concat(world, "! ");
    };
    Utils.prototype.downloadCanvasToImage = function (canvas, filename) {
        var image = canvas.toDataURL("image/png");
        var link = document.createElement('a');
        link.download = filename;
        link.href = image;
        link.click();
    };
    return Utils;
}());
exports.Utils = Utils;
