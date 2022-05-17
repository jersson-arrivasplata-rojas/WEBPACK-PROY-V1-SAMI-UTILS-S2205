"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Clipboard = void 0;
var swal_fire_two_1 = require("./swal-fire-two");
var Clipboard = (function () {
    function Clipboard() {
    }
    Clipboard.prototype.copyToClipboard = function (element, flag) {
        var aux = document.createElement("input");
        aux.setAttribute("value", element.textContent);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand("copy");
        document.body.removeChild(aux);
        if (flag) {
            new swal_fire_two_1.SwalFireTwo().swalFireTimerToCopyCode();
        }
    };
    return Clipboard;
}());
exports.Clipboard = Clipboard;
