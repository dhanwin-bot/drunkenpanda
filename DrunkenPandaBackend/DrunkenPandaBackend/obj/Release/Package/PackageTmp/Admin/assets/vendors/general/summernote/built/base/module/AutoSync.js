"use strict";
var dom_1 = require("../core/dom");
/**
 * textarea auto sync.
 */
var AutoSync = (function () {
    function AutoSync(context) {
        var _this = this;
        this.$note = context.layoutInfo.note;
        this.events = {
            'summernote.change': function () {
                _this.$note.val(context.invoke('code'));
            }
        };
    }
    AutoSync.prototype.shouldInitialize = function () {
        return dom_1["default"].isTextarea(this.$note[0]);
    };
    return AutoSync;
}());
exports.__esModule = true;
exports["default"] = AutoSync;
//# sourceMappingURL=AutoSync.js.map