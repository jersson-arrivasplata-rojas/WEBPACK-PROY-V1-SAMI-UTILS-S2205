"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dom = void 0;
var Dom = (function () {
    function Dom() {
    }
    Dom.prototype.getById = function (id) {
        return document.getElementById(id);
    };
    return Dom;
}());
exports.Dom = Dom;
