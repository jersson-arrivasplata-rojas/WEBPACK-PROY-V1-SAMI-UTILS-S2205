"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Filters = void 0;
var Filters = (function () {
    function Filters() {
    }
    Filters.prototype.filterWordToHide = function (selector, word) {
        var selectors = Array.from(document.querySelectorAll(selector));
        var filter = word.toUpperCase();
        for (var i = 0; i < selectors.length; i++) {
            var selector_1 = selectors[i];
            var value = '';
            if (selector_1) {
                value = selector_1.getAttribute('class');
                if (value.toUpperCase().indexOf(filter) > -1) {
                    selector_1.parentElement.style.display = "";
                }
                else {
                    selector_1.parentElement.style.display = "none";
                }
            }
        }
    };
    return Filters;
}());
exports.Filters = Filters;
