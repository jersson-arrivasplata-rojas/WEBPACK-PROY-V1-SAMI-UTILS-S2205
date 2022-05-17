"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Devices = void 0;
var Devices = (function () {
    function Devices() {
    }
    Devices.prototype.isMobile = function () {
        return (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
    };
    return Devices;
}());
exports.Devices = Devices;
