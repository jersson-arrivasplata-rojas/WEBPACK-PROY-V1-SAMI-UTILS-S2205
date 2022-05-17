"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialMediaShare = void 0;
var SocialMediaShare = (function () {
    function SocialMediaShare() {
    }
    SocialMediaShare.prototype.shareLinkedin = function (url) {
        window.open("https://www.linkedin.com/sharing/share-offsite/?url=".concat(url), 'sharer', 'toolbar=0,status=0,width=626,height=436');
        return false;
    };
    SocialMediaShare.prototype.shareFacebook = function (url, title) {
        window.open("http://www.facebook.com/sharer.php?u=".concat(url, "&quote=").concat(String(title).replace(/\&/g, '%26')), 'sharer', 'toolbar=0,status=0,width=626,height=436');
        return false;
    };
    SocialMediaShare.prototype.shareWhatsapp = function (url) {
        location.href = "https://api.whatsapp.com/send?phone=&text=".concat(url);
    };
    return SocialMediaShare;
}());
exports.SocialMediaShare = SocialMediaShare;
