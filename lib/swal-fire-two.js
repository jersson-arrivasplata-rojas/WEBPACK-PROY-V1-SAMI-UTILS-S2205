"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwalFireTwo = void 0;
var sweetalert2_1 = __importDefault(require("sweetalert2"));
var SwalFireTwo = (function () {
    function SwalFireTwo() {
    }
    SwalFireTwo.prototype.swalFireTimerToCopyCode = function () {
        var timerInterval;
        sweetalert2_1.default.fire({
            title: '¡El c&oacute;digo se ha copiado - Ctrl + v para pegar!',
            html: 'Se cerrara en <b></b> milisegundos.',
            width: 600,
            padding: '3em',
            color: '#0652dd',
            background: "#fff",
            backdrop: "\n                rgba(0,0,123,0.4)\n                left top\n                no-repeat\n            ",
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: function () {
                var _a;
                sweetalert2_1.default.showLoading();
                if (sweetalert2_1.default.getHtmlContainer()) {
                    var b_1 = (_a = sweetalert2_1.default.getHtmlContainer()) === null || _a === void 0 ? void 0 : _a.querySelector('b');
                    timerInterval = setInterval(function () {
                        b_1.textContent = sweetalert2_1.default.getTimerLeft();
                    }, 100);
                }
            },
            willClose: function () {
                clearInterval(timerInterval);
            }
        }).then(function (result) {
            if (result.dismiss === sweetalert2_1.default.DismissReason.timer) {
                console.log('I was closed by the timer');
            }
        });
    };
    SwalFireTwo.prototype.swalFireTimerToSuccess = function (title, background, backdrop) {
        var timerInterval;
        sweetalert2_1.default.fire({
            title: title,
            html: 'Se cerrara en <b></b> milisegundos.',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: background,
            backdrop: backdrop,
            showConfirmButton: false,
            timer: 4000,
            timerProgressBar: true,
            didOpen: function () {
                var _a;
                sweetalert2_1.default.showLoading();
                if (sweetalert2_1.default.getHtmlContainer()) {
                    var b_2 = (_a = sweetalert2_1.default.getHtmlContainer()) === null || _a === void 0 ? void 0 : _a.querySelector('b');
                    timerInterval = setInterval(function () {
                        b_2.textContent = sweetalert2_1.default.getTimerLeft();
                    }, 100);
                }
            },
            willClose: function () {
                clearInterval(timerInterval);
            }
        }).then(function (result) {
            if (result.dismiss === sweetalert2_1.default.DismissReason.timer) {
                console.log('I was closed by the timer');
            }
        });
    };
    return SwalFireTwo;
}());
exports.SwalFireTwo = SwalFireTwo;
